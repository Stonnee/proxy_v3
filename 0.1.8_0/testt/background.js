var preferences = {
  "selected_proxy": null,
  "current_proxy": null,
};

function best_proxy_switcher() {
  var instance = function () {
    var bypass_list = ["*proxy-list.org", "*best-proxy.com",];

    this.load_preferences = function(callback) {
      chrome.storage.local.get(preferences).then(function(result) {
        preferences = result;
        if (callback && typeof callback === 'function')
          callback();
      });
    }
    
    this.save_preferences = function(callback) {
      chrome.storage.local.set(preferences, function() {
        if (callback && typeof callback === 'function')
          callback();
      });
    }

    this.set_icon = function(type, code, badge, title) {
      chrome.action.setIcon({
        path: {
          19: '19/'+type+'/'+code+'.png',
          38: '38/'+type+'/'+code+'.png'
        }
      });
      chrome.action.setBadgeText({text: badge});
      chrome.action.setTitle({title: title});
    }

    this.set_proxy = function(proxy_data) {
      preferences.current_proxy = proxy_data;
      preferences.selected_proxy = proxy_data;
      this.save_preferences();
      
      var host = proxy_data.proxy.split(':')[0];
      var port = proxy_data.proxy.split(':')[1];

      if ('registerProxyScript' in chrome.proxy) {
        chrome.proxy.registerProxyScript('proxy_script.js');
        chrome.runtime.sendMessage({host: host, port: port, bypass_list: bypass_list}, {toProxyScript: true});
      } else if ('settings' in chrome.proxy) {
          chrome.proxy.settings.set({
          value: {
            mode: 'pac_script',
            pacScript: {
              data: 'function FindProxyForURL(url, host) {if (shExpMatch(host, "('+bypass_list.join('|')+')")) return "DIRECT"; return "'+(host.indexOf('best-proxy.com') > 0 ? 'HTTPS' : 'PROXY')+' '+host+':'+port+'";}'
            }
          },
          scope: 'regular'
        }, function() {});
      }
    }

    this.reset_proxy = function() {
      preferences.current_proxy = null;
      this.save_preferences();
      
      if ('registerProxyScript' in chrome.proxy) {
        chrome.proxy.registerProxyScript('');
        chrome.runtime.sendMessage({host: null, port: null, bypass_list: bypass_list}, {toProxyScript: true});
      } else if ('settings' in chrome.proxy) {
        chrome.proxy.settings.clear({scope: 'regular'});
      }
    }
  }

  return new instance();
}

var emit_message = function(options) {
  chrome.runtime.sendMessage({
    message: options.message,
    content: options.content
  });
}

var listen_message = function(options) {
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (options.message == request.message)
      options.callback(request.content);
    sendResponse({message: true});
    return true;
  });
}

listen_message({
  message: 'select_proxy',
  callback: function (message) {
    var proxy_data = message.proxy_data;
    best_proxy_switcher().load_preferences(function() {
      var current_proxy = preferences.current_proxy;
      if (null != current_proxy && proxy_data.proxy == current_proxy.proxy) {
        best_proxy_switcher().reset_proxy();
        best_proxy_switcher().set_icon('icon', 'disabled', '', 'Best Proxy Switcher');
      } else {
        best_proxy_switcher().set_proxy(proxy_data);
        best_proxy_switcher().set_icon('flag', proxy_data.code.toUpperCase(), proxy_data.code, proxy_data.proxy);
      }
    });
  }
});

listen_message({
  message: 'enable_proxy',
  callback: function (message) {
    best_proxy_switcher().load_preferences(function() {
      var selected_proxy = preferences.selected_proxy;
      if (null != selected_proxy) {
        best_proxy_switcher().set_proxy(selected_proxy);
        best_proxy_switcher().set_icon('flag', selected_proxy.code.toUpperCase(), selected_proxy.code, selected_proxy.proxy);
        emit_message({
          message: 'show_menu',
          content: {}
        });         
      }
    });
  }
});

listen_message({
  message: 'disable_proxy',
  callback: function (message) {
    best_proxy_switcher().reset_proxy();
    best_proxy_switcher().set_icon('icon', 'disabled', '', 'Best Proxy Switcher');    
    emit_message({
      message: 'show_menu',
      content: {}
    });             
  }
});

listen_message({
  message: 'is_enable_proxy_enabled',
  callback: function (message) {
    best_proxy_switcher().load_preferences(function() {
      emit_message({
        message: 'is_enable_proxy_enabled',
        content: {
          'result': preferences.selected_proxy && !preferences.current_proxy,
        }
      });      
    });
  }
});

listen_message({
  message: 'is_disable_proxy_enabled',
  callback: function (message) {
    best_proxy_switcher().load_preferences(function() {
      emit_message({
        message: 'is_disable_proxy_enabled',
        content: {
          'result': null != preferences.current_proxy,
        }
      });      
    });
  }
});

listen_message({
  message: 'console_log',
  callback: function (message) {
    console.log(message);
  }
});


chrome.runtime.onStartup.addListener(function() {
  best_proxy_switcher().load_preferences(function() {
    var selected_proxy = preferences.selected_proxy;
    if (null != selected_proxy) {
      best_proxy_switcher().set_proxy(selected_proxy);
      best_proxy_switcher().set_icon('flag', selected_proxy.code.toUpperCase(), selected_proxy.code, selected_proxy.proxy);
    }
  });
});

chrome.runtime.onInstalled.addListener(function() {
  // todo: redirect to welcome page
  chrome.windows.create({url: 'tutorial.html', width: 1020, height: 682, type: 'popup'});
});

chrome.runtime.setUninstallURL(chrome.i18n.getMessage('url_uninstall'), function() {
  best_proxy_switcher().reset_proxy();
});

chrome.webRequest.onAuthRequired.addListener(function(details, callbackFn) {
  best_proxy_switcher().load_preferences(function() {
    var current_proxy = preferences.current_proxy;
    console.log("onAuthRequired!", current_proxy);
    if (details.isProxy && null !== current_proxy && null !== current_proxy.user) {
      callbackFn({
        authCredentials: {username: current_proxy.user, password: current_proxy.pass}
      });
    }    
  });
}, {urls: ['<all_urls>']}, ['asyncBlocking']);

chrome.management.getAll(function(apps) {
  apps.forEach (function(extension) {
    if (extension.id == chrome.runtime.id || extension.enabled == false) return;
    extension.permissions.forEach(function(permission) {
      if (permission == 'proxy')
        chrome.management.setEnabled(extension.id, false);
    });
  });
});

chrome.commands.onCommand.addListener(function(command) {
  if ('enable-proxy' == command) {
    best_proxy_switcher().load_preferences(function() {
      var selected_proxy = preferences.selected_proxy;
      if (null != selected_proxy) {
        best_proxy_switcher().set_proxy(selected_proxy);
        best_proxy_switcher().set_icon('flag', selected_proxy.code.toUpperCase(), selected_proxy.code, selected_proxy.proxy);
      }
    });
  }
  if ('disable-proxy' == command) {
    best_proxy_switcher().reset_proxy();
    best_proxy_switcher().set_icon('icon', 'disabled', '', 'Best Proxy Switcher');
  }
});