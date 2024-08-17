jQuery.each(jQuery('[data-l10n-id]'), function(i, e) {
  if (jQuery(e).attr('data-l10n-id').indexOf('placeholder') == 0) {
    jQuery(e).attr('placeholder', chrome.i18n.getMessage(jQuery(e).attr('data-l10n-id')));
  } if (jQuery(e).attr('data-l10n-id').indexOf('value') == 0) {
    jQuery(e).val(chrome.i18n.getMessage(jQuery(e).attr('data-l10n-id')));
  } else {
    jQuery(e).html(chrome.i18n.getMessage(jQuery(e).attr('data-l10n-id')));
  }
});

function popup() {
  var instance = function() {
    var share_cache_timeout = 300*1000;
    var vpn_cache_timeout = 300*1000;
    var show_after_time = 24*60*60;
    var show_later_time = 24*60*60;
    var show_thanks_time = 30*24*60*60;
    var service_url = 'https://proxy-list.org/engine/best-proxy-switcher.php';
    var register_url = 'https://proxy-list.org/english/register.php?package=surfer';
    var rate_url = 'https://chrome.google.com/webstore/detail/best-proxy-switcher/lgkgpmoglpemohmihphdaljcjnfkndoi';
    var that = this;
    var menu_list = {
      user_proxy: jQuery('.menu.user_proxy'),
      shared_proxy: jQuery('.menu.shared_proxy'),
      vpn_proxy: jQuery('.menu.vpn_proxy'),
      enable_proxy: jQuery('.menu.enable_proxy'),
      disable_proxy: jQuery('.menu.disable_proxy'),
      import: jQuery('.menu.import'),
      account: jQuery('.menu.account'),
      checker: jQuery('.menu.checker'),
      tutorial: jQuery('.menu.tutorial'),
    }
    var holder_list = {
      user_proxy: jQuery('.holder.user_proxy'),
      shared_proxy: jQuery('.holder.shared_proxy'),
      captcha: jQuery('.holder.captcha'),
      vpn_proxy: jQuery('.holder.vpn_proxy'),
      import: jQuery('.holder.import'),
      account: jQuery('.holder.account'),
      status: jQuery('.holder.status'),
      loading: jQuery('.loading'),
      message: jQuery('.message'),
      rate: jQuery('.rate'),
    }
    var storage_list = {
      user_proxy: 'user_proxy',
      shared_proxy: 'shared_proxy',
      share_cache_time: 'share_cache_time',
      vpn_proxy: 'vpn_proxy',
      vpn_cache_time: 'vpn_cache_time',
      account_main: 'user_pass',
      account_demo: 'demo_user_pass',
      show_rate: 'show_rate',
    }

    var emit_message = function(options) {
      chrome.runtime.sendMessage({
        message: options.message,
        content: options.content
      });
    };
    var listen_message = function(options) {
      chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (options.message == request.message)
          options.callback(request.content);
        sendResponse({message: true});
        return true;
      });
    };
    var console_log = function(data) {
      emit_message({
        message: 'console_log',
        content: data
      });      
    }
    
    var hide_menu = function(current) {
      for (name in menu_list)
        if (name != current)
          menu_list[name].slideUp(150);
    }
    var show_menu = function() {
      for (name in menu_list)
        menu_list[name].removeClass('disable').slideDown(150);

      if (!user_proxy_read().length)
        menu_list.user_proxy.addClass('disable');
      emit_message({
        message: 'is_enable_proxy_enabled',
        content: {}
      });
      emit_message({
        message: 'is_disable_proxy_enabled',
        content: {}
      });
    }
    var hide_load = function() {
      holder_list.loading.fadeOut(200);
    }
    var show_load = function() {
      holder_list.loading.fadeIn(200);
    }

    var get_current_time = function() {
      return Math.round((new Date()).getTime()/1000);
    }
    var extract_proxy = function(raw_proxy_list) {
      var match_list = raw_proxy_list.match(/([\w\s]+,[\w\s]+,[\w\s]*,)?([\.%\w]+:\w+@)?((\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})|[\w\.-]+):\d{2,5}/g);

      var proxy_list = [];
      if (match_list && match_list.length)
        for (var i in match_list) {
          var code = country = city = user = pass = proxy = '';
          if (match_list[i].indexOf(',') > 0) {
            var code = match_list[i].split(',')[0].trim();
            var country = match_list[i].split(',')[1].trim();
            var city = match_list[i].split(',')[2].trim();
            match_list[i] = match_list[i].split(',')[3];
          }
          if (match_list[i].indexOf('@') > 0) {
            var user = match_list[i].split('@')[0].split(':')[0].trim();
            var pass = match_list[i].split('@')[0].split(':')[1].trim();
            match_list[i] = match_list[i].split('@')[1];
          }
          var proxy = match_list[i].trim();
          proxy_list.push({
            code: code,
            country: country,
            city: city,
            user: user,
            pass: pass,
            proxy: proxy,
          });
        }

      return proxy_list;
    }
    var proxy_list_to_string = function(proxy_list) {
      var raw_proxy_list = [];
      for (var i in proxy_list) {
        var geo_data = ('' != proxy_list[i].code) ? proxy_list[i].code+','+proxy_list[i].country+','+proxy_list[i].city+',' : '';
        var auth_data = ('' != proxy_list[i].user) ? proxy_list[i].user+':'+proxy_list[i].pass+'@' : '';
        raw_proxy_list.push(geo_data+auth_data+proxy_list[i].proxy);
      }
      return raw_proxy_list.join('\n');
    }

    var ajax_request = function(url, type, data, success, error) {
      jQuery.ajax({
        url: url,
        type: type,
        data:  data,
        attempt: 0,
        attempt_limit : 3,
        success : function(data) {
          var result = {
            text: data,
            json: jQuery.parseJSON(data),
          }
          success(result);
        },
        error : function(xhr, textStatus, errorThrown ) {
          if (textStatus == 'timeout') {
            this.attempt++;
            if (this.attempt <= this.attempt_limit) {
              jQuery.ajax(this);
              return;
            }
            return;
          }
          error();
        }
      });
    }
    var show_message = function(message) {
      holder_list.message.find('.window').empty().append(message);
      holder_list.message.fadeIn(200);
    }
    var gen_proxy_list = function(container, proxy_list) {
      container.empty();
      for (var i in proxy_list) {
        var proxy_label = (null != proxy_list[i].label) ? proxy_list[i].label : proxy_list[i].proxy;
        var proxy_type = (1 == proxy_list[i].type ? 'unlock' : (4 == proxy_list[i].type ? 'user' : (5 == proxy_list[i].type ? 'vpn' : 'hide' )))
        container.append(
          jQuery('<ul>')
            .attr('proxy', JSON.stringify(proxy_list[i]))
            .append(jQuery('<li class="type">').addClass(proxy_type))
            .append(jQuery('<li class="proxy">').text(proxy_label))
            .append(jQuery('<li class="flag">').addClass(proxy_list[i].code.toLowerCase()))
            .append(jQuery('<li class="country">').text(proxy_list[i].country))
            .append(jQuery('<li class="city">').text(proxy_list[i].city))
            .on('click', select_proxy)
        );
      }
    }
    var select_proxy = function() {
      emit_message({
        message: 'select_proxy',
        content: {
          'proxy_data': jQuery.parseJSON(jQuery(this).attr('proxy')),
        }
      })
    }

    var user_proxy_read = function() {
      var proxy_list = window.localStorage.getItem(storage_list.user_proxy);
      try {var proxy_list = JSON.parse(proxy_list); if (proxy_list === null) proxy_list = [];} catch(err) { proxy_list = [] };
      for (var i in proxy_list)
        proxy_list[i].type = 4;
      return proxy_list;
    }
    var user_proxy_write = function(proxy_list) {
      window.localStorage.setItem(storage_list.user_proxy, JSON.stringify(proxy_list));
      return true;
    }
    var user_proxy_detect = function(raw_proxy_list, result) {
      var proxy_to_detect = [];
      var proxy_list = extract_proxy(raw_proxy_list);
      for (var i in proxy_list)
        if ('' == proxy_list[i].code)
          proxy_to_detect.push(proxy_list[i].proxy);
      if (!proxy_to_detect.length) {
        result(proxy_list);
        return;
      }

      ajax_request(service_url, 'POST', {op: 'detect', raw: proxy_to_detect.join('\n')},
        function(data) {
          if ('OK' == data.json.result) {
            for (var i in data.json.proxy_list) {
              var detect_proxy_data = data.json.proxy_list[i];
              for (var j in proxy_list)
                if (proxy_list[j].proxy == detect_proxy_data.proxy) {
                  proxy_list[j].code = detect_proxy_data.code;
                  proxy_list[j].country = detect_proxy_data.country;
                  proxy_list[j].city = detect_proxy_data.city;
                }
            }
          }
          for (var i in proxy_list)
            proxy_list[i].type = 4;
          result(proxy_list);
        },
        function() {
          // no reply
          result([]);
        }
      )
    }

    var shared_proxy_read = function() {
      var cache_time = window.localStorage.getItem(storage_list.share_cache_time);
      if ((new Date()).getTime() - cache_time > share_cache_timeout) return [];

      var proxy_list = window.localStorage.getItem(storage_list.shared_proxy);
      try {var proxy_list = JSON.parse(proxy_list); if (proxy_list === null) proxy_list = [];} catch(err) { proxy_list = [] };
      return proxy_list;
    }
    var shared_proxy_write = function(proxy_list) {
      window.localStorage.setItem(storage_list.share_cache_time, (new Date()).getTime());
      window.localStorage.setItem(storage_list.shared_proxy, JSON.stringify(proxy_list));
      return true;
    }
    var shared_proxy_download = function(auth_data, result) {
      ajax_request(service_url, 'POST', auth_data,
        function(data) {
          if ('OK' == data.json.result) {
            result(data.json.proxy_list, data.json.expire, data.json.error_number);
          } else {
            result([], 0, data.json.error_number);
          }
        },
        function() {
          // no reply
          result([], 0, 1);
        }
      )
    }

    var vpn_proxy_read = function() {
      var cache_time = window.localStorage.getItem(storage_list.vpn_cache_time);
      if ((new Date()).getTime() - cache_time > vpn_cache_timeout) return [];

      var proxy_list = window.localStorage.getItem(storage_list.vpn_proxy);
      try {var proxy_list = JSON.parse(proxy_list); if (proxy_list === null) proxy_list = [];} catch(err) { proxy_list = [] };
      return proxy_list;
    }
    var vpn_proxy_write = function(proxy_list) {
      window.localStorage.setItem(storage_list.vpn_cache_time, (new Date()).getTime());
      window.localStorage.setItem(storage_list.vpn_proxy, JSON.stringify(proxy_list));
      return true;
    }
    var vpn_proxy_download = function(auth_data, result) {
      ajax_request(service_url, 'POST', auth_data,
        function(data) {
          if ('OK' == data.json.result) {
            result(data.json.proxy_list, data.json.expire, data.json.error_number);
          } else {
            result([], 0, data.json.error_number);
          }
        },
        function() {
          // no reply
          result([], 0, 1);
        }
      )
    }

    var account_main_read = function() {
      var user_pass = window.localStorage.getItem(storage_list.account_main);
      try {var user_pass = JSON.parse(user_pass); if (user_pass === null) user_pass = {user:'', pass:'', expire: 0};} catch(err) { user_pass = {user:'', pass:'', expire: 0} };
      return user_pass;
    }
    var account_main_write = function(user, pass, expire) {
      var user_pass = {user: user, pass: pass, expire: expire};
      window.localStorage.setItem(storage_list.account_main, JSON.stringify(user_pass));
    }

    var account_demo_read = function() {
      var user_pass = window.localStorage.getItem(storage_list.account_demo);
      try {var user_pass = JSON.parse(user_pass); if (user_pass === null) user_pass = {user:'', pass:'', expire: 0};} catch(err) { user_pass = {user:'', pass:'', expire: 0} };
      return user_pass;
    }
    var account_demo_write = function(user, pass, expire) {
      var user_pass = {user: user, pass: pass, expire: expire};
      window.localStorage.setItem(storage_list.account_demo, JSON.stringify(user_pass));
    }
    var account_demo_create = function(result) {
      ajax_request(service_url, 'POST', {op: 'demo'},
        function(data) {
          var user = pass = '';
          var expire = 0;
          if ('OK' == data.json.result) {
            user = data.json.user;
            pass = data.json.pass;
            expire = data.json.expire;
          }
          result(user, pass, expire);
        },
        function() {
          // no reply
          result('', '', 0);
        }
      )
    }

    var show_rate_read = function() {
      var default_show_rate_data = {first_time:get_current_time(), show_time:get_current_time()+show_after_time,};
      var show_rate_data = window.localStorage.getItem(storage_list.show_rate);
      try {
        var show_rate_data = JSON.parse(show_rate_data);
        if (show_rate_data === null)
          show_rate_data = default_show_rate_data
      } catch(err) {
        show_rate_data = default_show_rate_data
      };
      return show_rate_data;
    }
    var show_rate_write = function(show_rate_data) {
      window.localStorage.setItem(storage_list.show_rate, JSON.stringify(show_rate_data));
    }

    this.init = function () {
      for (var name in holder_list)
        holder_list[name].hide();

      holder_list.message.on('click', function() {
        jQuery(this).fadeOut(200);
      })
      holder_list.loading.on('click', function() {
        jQuery(this).fadeOut(200);
      })
      holder_list.rate.on('click', function() {
        jQuery(this).fadeOut(200);
      })

      menu_list.user_proxy.off('click').on('click', function() {
        if (holder_list.user_proxy.is(':visible')) {
          menu_list.user_proxy.removeClass('open');
          holder_list.user_proxy.slideUp(200);
          show_menu();
          return true;
        }

        var proxy_list = user_proxy_read();
        if (!proxy_list.length) {
          return false;
        } else {
          holder_list.user_proxy.slideDown(200)
          gen_proxy_list(holder_list.user_proxy.find('.list_wrap'), proxy_list);
        }
        menu_list.user_proxy.addClass('open');
        hide_menu('user_proxy');
      })

      menu_list.shared_proxy.off('click').on('click', function() {
        if (holder_list.shared_proxy.is(':visible') || holder_list.captcha.is(':visible')) {
          menu_list.shared_proxy.removeClass('open');
          holder_list.shared_proxy.slideUp(200);
          holder_list.captcha.slideUp(200);
          show_menu();
          return true;
        }

        var proxy_list = shared_proxy_read();
        if (!proxy_list.length) {
          holder_list.captcha.slideDown(200)
          holder_list.captcha.find('.form .code').focus();
          // use unexpired user&pass instead of code
          var auth_data = null;
          var current_time = Math.round((new Date()).getTime()/1000);
          if (null == auth_data) {
            var user_pass_time = account_demo_read();
            var account_write_fn = account_demo_write;
            if ('' != user_pass_time.user && user_pass_time.expire > current_time)
              auth_data = {op: 'list', user: user_pass_time.user, pass: user_pass_time.pass,};
          }
          if (null != auth_data) {
            show_load();
            shared_proxy_download(auth_data, function(proxy_list, expire, error_number) {
              hide_load();
              if (proxy_list.length) {
                shared_proxy_write(proxy_list);
                account_write_fn(auth_data.user, auth_data.pass, expire);
                holder_list.captcha.slideUp(200, function(){
                  menu_list.shared_proxy.trigger('click');
                });
              }
            });
          }
        } else {
          gen_proxy_list(holder_list.shared_proxy.find('.list_wrap'), proxy_list);
          holder_list.shared_proxy.slideDown(200)
        }
        menu_list.shared_proxy.addClass('open');
        hide_menu('shared_proxy');
      })
      holder_list.shared_proxy.find('a[href="#premium"]').on('click', function() {
        menu_list.shared_proxy.trigger('click');
        menu_list.vpn_proxy.trigger('click');
      })
      holder_list.captcha.find('.form .code').on('keyup', function(e) {
        if (e.keyCode == 13)
          holder_list.captcha.find('.form .button').trigger('click');
      })
      holder_list.captcha.find('.form .button').on('click', function() {
        show_load();
        var code = holder_list.captcha.find('.form .code').val();
        shared_proxy_download({op: 'list', code: code}, function(proxy_list, expire, error_number) {
          hide_load();
          if (!proxy_list.length) {
            show_message(jQuery('<p>').text('Please make sure you entered correct CODE. If you get this message several times, then we are sorry to inform you that something is wrong with our service. Please do not get frustrated, usually we fix everything in no time. Send us email to admin@proxy-list.org, thanks!'));
            holder_list.captcha.find('img').attr('src', service_url+'?op=captcha&'+(new Date()).getTime());
          } else {
            shared_proxy_write(proxy_list);
            holder_list.captcha.slideUp(200, function(){
              menu_list.shared_proxy.trigger('click');
            });
          }
        });
      })

      menu_list.vpn_proxy.off('click').on('click', function() {
        if (holder_list.vpn_proxy.is(':visible')) {
          menu_list.vpn_proxy.removeClass('open');
          holder_list.vpn_proxy.slideUp(200);
          show_menu();
          return true;
        }

        var proxy_list = vpn_proxy_read();
        if (!proxy_list.length) {
          // use unexpired user&pass instead of code
          var auth_data = null;
          var current_time = Math.round((new Date()).getTime()/1000);
          if (null == auth_data) {
            var user_pass_time = account_main_read();
            var account_write_fn = account_main_write;
            if ('' != user_pass_time.user && user_pass_time.expire > current_time)
              auth_data = {op: 'vpn', user: user_pass_time.user, pass: user_pass_time.pass,};
          }
          if (null == auth_data) {
            var user_pass_time = account_demo_read();
            var account_write_fn = account_demo_write;
            if ('' != user_pass_time.user && user_pass_time.expire > current_time)
              auth_data = {op: 'vpn', user: user_pass_time.user, pass: user_pass_time.pass,};
          }
          if (null != auth_data) {
            show_load();
            vpn_proxy_download(auth_data, function(proxy_list, expire, error_number) {
              hide_load();
              if (proxy_list.length) {
                for (var i in proxy_list) {
                  proxy_list[i].type = 5;
                  proxy_list[i].user = auth_data.user;
                  proxy_list[i].pass = auth_data.pass;
                }
                vpn_proxy_write(proxy_list);
                account_write_fn(auth_data.user, auth_data.pass, expire);
                gen_proxy_list(holder_list.vpn_proxy.find('.list_wrap'), proxy_list);
              }
            });
          } else {
            menu_list.account.trigger('click');
            return;
          }
        } else {
          gen_proxy_list(holder_list.vpn_proxy.find('.list_wrap'), proxy_list);
        }

        holder_list.vpn_proxy.slideDown(200)
        menu_list.vpn_proxy.addClass('open');
        hide_menu('vpn_proxy');
      })

      menu_list.enable_proxy.on('click', function() {
        emit_message({
          message: 'enable_proxy',
          content: {}
        });
      })
      menu_list.disable_proxy.on('click', function() {
        emit_message({
          message: 'disable_proxy',
          content: {}
        });
      })

      menu_list.import.off('click').on('click', function() {
        if (holder_list.import.is(':visible')) {
          menu_list.import.removeClass('open');
          holder_list.import.slideUp(200);
          show_menu();
          return true;
        }

        holder_list.import.find('.form textarea').val(proxy_list_to_string(user_proxy_read()));
        holder_list.import.slideDown(200)
        menu_list.import.addClass('open');
        hide_menu('import');
      })
      holder_list.import.find('.form .button.save').on('click', function() {
        show_load();
        var raw_proxy_list = holder_list.import.find('.form textarea').val();
        user_proxy_detect(raw_proxy_list, function(proxy_list) {
          hide_load();
          if (!proxy_list.length) {
            user_proxy_write([]);
            show_message(jQuery('<p>').text('It is weird but we cannot extract even single proxy from text you entered. Please double check allowed proxy list formats.'));
            holder_list.import.find('.form textarea').focus();
          } else {
            user_proxy_write(proxy_list);
            menu_list.import.trigger('click');
            menu_list.user_proxy.trigger('click');
          }
        })
      })
      holder_list.import.find('.form .button.clear').on('click', function() {
        holder_list.import.find('.form textarea').val('');
      })
      holder_list.import.find('.form .button.file').on('click', function() {
        chrome.windows.create({url: 'file_input.html', width: 460, height: 200, type: 'popup'});
      })

      menu_list.account.off('click').on('click', function() {
        if (holder_list.account.is(':visible') || holder_list.status.is(':visible')) {
          menu_list.account.removeClass('open');
          holder_list.account.slideUp(200);
          holder_list.status.slideUp(200);
          show_menu();
          return true;
        }

        var user_pass_time = account_main_read();
        holder_list.account.find('.email input').val(user_pass_time.user);
        holder_list.account.find('.pass input').val(user_pass_time.pass);

        if ('' != user_pass_time.user) {
          var time_left = user_pass_time.expire - Math.round((new Date()).getTime()/1000);
          if (time_left > 0) {
            holder_list.status.find('.valid').show();
            holder_list.status.find('.expire').hide();
          } else {
            holder_list.status.find('.expire').show();
            holder_list.status.find('.valid').hide();
          }
          holder_list.status.find('.email').text(user_pass_time.user);
          holder_list.status.find('.time').text(Math.ceil(time_left/(24*60*60)));
          holder_list.status.slideDown(200);
        } else {
          holder_list.account.slideDown(200);
        }
        menu_list.account.addClass('open');
        hide_menu('account');
      })
      holder_list.account.find('.form .button.login').on('click', function() {
        show_load();
        var user = holder_list.account.find('.email input').val();
        var pass = holder_list.account.find('.pass input').val();
        var auth_data = {op: 'vpn', user: user, pass: pass};
        vpn_proxy_download(auth_data, function(proxy_list, expire, error_number) {
          hide_load();
          if (proxy_list.length) {
            account_main_write(user, pass, expire);
            menu_list.account.trigger('click');
          } else {
            account_main_write('', '', 0);
            switch(error_number) {
              case 1:
                show_message(jQuery('<p>').text('Errro, please make sure that you are able to open www.proxy-list.org web site and try again!'));
                break;
              case 2:
                show_message(jQuery('<p>').text('Errro, please check email spelling. We cannot find user with such email in our system!'));
                break;
              case 3:
                show_message(jQuery('<p>').text('Errro, you need to confirm your account. Emial with confirmation link was sent to your billing email!'));
                break;
              case 4:
                show_message(jQuery('<p>').text('Errro, we are very sorry to inform you but we had to disable your account. Please send us email to admin@proxy-list.org!'));
                break;
            }
          }
        })
      })
      holder_list.account.find('.email input').on('keyup', function(e) {
        if (e.keyCode == 13)
          holder_list.account.find('.form .button.login').trigger('click');
      })
      holder_list.account.find('.pass input').on('keyup', function(e) {
        if (e.keyCode == 13)
          holder_list.account.find('.form .button.login').trigger('click');
      })
      holder_list.account.find('.form .button.register').on('click', function() {
        chrome.tabs.create({url: register_url});
      })

      holder_list.status.find('.button.logout').on('click', function() {
        account_main_write('', '', 0);
        menu_list.account.trigger('click');
      })
      holder_list.status.find('.button.extend').on('click', function() {
        var user_pass_time = account_main_read();
        chrome.tabs.create({url: register_url+'&extend='+user_pass_time.user});
      })

      holder_list.rate.find('.button.now').on('click', function() {
        chrome.tabs.create({url: rate_url});
        var show_rate_data = show_rate_read();
        show_rate_data.show_time = get_current_time() + show_thanks_time;
        show_rate_write(show_rate_data);
        holder_list.rate.fadeOut(200);
      })
      holder_list.rate.find('.button.later').on('click', function() {
        var show_rate_data = show_rate_read();
        show_rate_data.show_time = get_current_time() + show_later_time;
        show_rate_write(show_rate_data);
        holder_list.rate.fadeOut(200);
      })
      holder_list.rate.find('.button.thanks').on('click', function() {
        var show_rate_data = show_rate_read();
        show_rate_data.show_time = get_current_time() + show_thanks_time;
        show_rate_write(show_rate_data);
        holder_list.rate.fadeOut(200);
      })

      menu_list.tutorial.on('click', function() {
        chrome.windows.create({url: 'tutorial.html', width: 1020, height: 682, type: 'popup'});
      })

      var user_pass_time = account_demo_read();
      if ('' == user_pass_time.user) {
        account_demo_create(function(user, pass, expire) {
          account_demo_write(user, pass, expire);
        })
      }
      // account_demo_write('', '', 0);

      var show_rate_data = show_rate_read();
      if (get_current_time() > show_rate_data.show_time)
        holder_list.rate.fadeIn(200);
      show_rate_write(show_rate_data);

      show_menu();
    }

    this.import = function(raw_proxy_list, result) {
      user_proxy_detect(raw_proxy_list, function(proxy_list) {
        user_proxy_write(proxy_list);
        result();
      })
    }
    
    listen_message({
      message: 'show_menu',
      callback: function (message) {
        show_menu();
      }
    });
    
    listen_message({
      message: 'is_enable_proxy_enabled',
      callback: function (message) {
        if (!message.result)
          menu_list.enable_proxy.addClass('disable');
      }
    });
    
    listen_message({
      message: 'is_disable_proxy_enabled',
      callback: function (message) {
        if (!message.result)
          menu_list.disable_proxy.addClass('disable');
      }
    });
    
  }
  
  return new instance();
}