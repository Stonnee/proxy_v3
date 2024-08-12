var core = {
  "start": function () {
    core.load();
  },
  "install": function () {
    core.load();
  },
  "load": function () {
    app.proxy.query.all(function (e) {
      const scope = "regular";
      const value = e.value || {};
      /*  */
      config.proxy.object.new = {"scope": scope, "value": value};
      /*  */
      const a = JSON.stringify(config.proxy.object.new);
      const b = JSON.stringify(config.proxy.object.old);
      if (a === b) {
        app.proxy.apply(config.proxy.object.new, core.desktop.notifications);
      }
      /*  */
      core.action.webrequest.initiate();
    });
  },
  "desktop": {
    "notifications": function () {
      let a = config.proxy.object.new;
      if (a) {
        if (a.value) {
          if (a.value.mode) {
            let message = "Proxy Mode :: " + a.value.mode.replace('_', ' ').toUpperCase();
            if (a.value.mode) {
              if (config.proxy.options.notifications) {
                app.notifications.create({
                  "message": message,
                  "title": "Proxy Switcher",
                  "iconUrl": "data/icons/" + a.value.mode + "/64.png"
                });
              }
            } else {
              if (config.proxy.options.notifications) {
                app.notifications.create({
                  "message": message,
                  "title": "Proxy Switcher"
                });
              }
            }
            /*  */
            app.button.icon(null, a.value.mode);
          }
        }
      }
    }
  },
  "action": {
    "storage": function (changes, namespace) {
      /*  */
    },
    "webrequest": {
      "initiate": function() {
        app.permissions.check({
          "origins": ["*://*/*"],
          "permissions": [
            "webRequest", 
            "webRequestAuthProvider"
          ]
        }, function (granted) {
          const flag = granted && config.proxy.authentication.active;
          app.webrequest.on.auth.required[flag ? "add" : "remove"]();
        });
      },
      "onauthrequired": function (info) {
        if (info) {
          if (info.isProxy) {
            if (config.proxy.authentication.active) {
              const username = config.proxy.authentication.username;
              const password = config.proxy.authentication.password;
              /*  */
              if (username && password) {
                if (config.proxy.options.notifications) {
                  app.notifications.create({
                    "title": "Proxy Switcher",
                    "message": "Set Proxy Authentication :: \n" + info.url
                  });
                }
                /*  */
                return {
                  "authCredentials": {
                    "username": username,
                    "password": password
                  }
                };
              }
            }
          }
        }
      }
    },
    "popup": {
      "error": function () {
        app.popup.send("fallback");
        if (config.proxy.options.notifications) {
          app.notifications.create({
            "title": "Proxy Switcher",
            "message": "Error! Cannot set proxy. \nPlease fill all the required fields and try again."
          });
        }
      },
      "webrequest": function (key) {
        app.webrequest.on.auth.required[key]();
        /*  */
        app.permissions[key]({
          "origins": ["*://*/*"],
          "permissions": [
            "webRequest", 
            "webRequestAuthProvider"
          ]
        });
      },
      "proxy": {
        "set": function (e) {
          config.proxy.object.new = e;
          /*  */
          let a = JSON.stringify(config.proxy.object.new);
          let b = JSON.stringify(config.proxy.object.old);
          if (a !== b) {
            if (config.log) console.error(config.proxy.object.new);
            app.proxy.apply(config.proxy.object.new, core.desktop.notifications);
            config.proxy.object.old = config.proxy.object.new;
          }
        },
        "save": function (e) {          
          config.proxy.mode = e.mode;
          config.proxy.color = e.color;
          config.proxy.rules = e.rules;
          config.proxy.single = e.single;
          config.proxy.scheme = e.scheme;
          config.proxy.settings.pac.url = e.settings.pac.url;
          config.proxy.settings.pac.type = e.settings.pac.type;
          config.proxy.settings.pac.script = e.settings.pac.script;
          config.proxy.settings.bypass.list = e.settings.bypass.list;
          config.proxy.options.notifications = e.options.notifications;
          config.proxy.authentication.active = e.authentication.active;
          config.proxy.settings.pac.mandatory = e.settings.pac.mandatory;
          config.proxy.settings.bypass.active = e.settings.bypass.active;
          config.proxy.authentication.username = e.authentication.username;
          config.proxy.authentication.password = e.authentication.password;
        }
      },
      "load": function () {
        app.popup.send("storage", {
          "mode": config.proxy.mode,
          "rules": config.proxy.rules,
          "color": config.proxy.color,
          "single": config.proxy.single,
          "scheme": config.proxy.scheme,
          "options": {
            "notifications": config.proxy.options.notifications
          },
          "authentication": {
            "active": config.proxy.authentication.active,
            "username": config.proxy.authentication.username,
            "password": config.proxy.authentication.password
          },
          "section": {
            "direct": config.section.direct,
            "system": config.section.system,
            "pac_script": config.section.pac_script,
            "auto_detect": config.section.auto_detect,
            "fixed_servers": config.section.fixed_servers
          },
          "settings": {
            "bypass": {
              "list": config.proxy.settings.bypass.list,
              "active": config.proxy.settings.bypass.active
            },
            "pac": {
              "url": config.proxy.settings.pac.url,
              "type": config.proxy.settings.pac.type,
              "script": config.proxy.settings.pac.script,
              "mandatory": config.proxy.settings.pac.mandatory
            }
          }
        });
      }
    }
  }
};

app.storage.load(core.load);

app.webrequest.on.auth.required.callback(core.action.webrequest.onauthrequired);

app.popup.receive("reload", app.tab.reload);
app.popup.receive("load", core.action.popup.load);
app.popup.receive("error", core.action.popup.error);
app.popup.receive("proxy.set", core.action.popup.proxy.set);
app.popup.receive("proxy.save", core.action.popup.proxy.save);
app.popup.receive("webrequest", core.action.popup.webrequest);
app.popup.receive("support", function () {app.tab.open(app.homepage())});
app.popup.receive("check", function () {app.tab.open(config.proxy.check)});
app.popup.receive("section", function (e) {config.section[e.section] = e.open});
app.popup.receive("donation", function () {app.tab.open(app.homepage() + "?reason=support")});

app.on.startup(core.start);
app.on.installed(core.install);
app.on.storage(core.action.storage);
