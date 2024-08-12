var background = {
  "port": null,
  "message": {},
  "receive": function (id, callback) {
    if (id) {
      background.message[id] = callback;
    }
  },
  "send": function (id, data) {
    if (id) {
      chrome.runtime.sendMessage({
        "method": id,
        "data": data,
        "path": "popup-to-background"
      }, function () {
        return chrome.runtime.lastError;
      });
    }
  },
  "connect": function (port) {
    chrome.runtime.onMessage.addListener(background.listener); 
    /*  */
    if (port) {
      background.port = port;
      background.port.onMessage.addListener(background.listener);
      background.port.onDisconnect.addListener(function () {
        background.port = null;
      });
    }
  },
  "post": function (id, data) {
    if (id) {
      if (background.port) {
        background.port.postMessage({
          "method": id,
          "data": data,
          "path": "popup-to-background",
          "port": background.port.name
        });
      }
    }
  },
  "listener": function (e) {
    if (e) {
      for (let id in background.message) {
        if (background.message[id]) {
          if ((typeof background.message[id]) === "function") {
            if (e.path === "background-to-popup") {
              if (e.method === id) {
                background.message[id](e.data);
              }
            }
          }
        }
      }
    }
  }
};

var config = {
  "render": function (e) {
    config.proxy.object = e;
    config.interface.load();
  },
  "fallback": function () {
    window.setTimeout(function () {
      document.getElementById("system").click();
    }, 1000);
  },
  "color": {
    "direct": "rgb(241, 101, 79)",
    "system": "rgb(110, 179, 19)",
    "pac_script": "rgb(30, 157, 206)",
    "auto_detect": "rgb(206, 153, 33)",
    "fixed_servers": "rgb(175, 68, 230)"
  },
  "unique": {
    "array": function (arr) {
      let hash = {};
      let result = [];
      for (let i = 0, l = arr.length; i < l; ++i) {
        if (!hash.hasOwnProperty(arr[i])) {
          hash[arr[i]] = true;
          result.push(arr[i]);
        }
      }
      /*  */
      return result;
    }
  },
  "load": function () {
    const check = document.getElementById("check");
    const reload = document.getElementById("reload");
    const refresh = document.getElementById("refresh");
    const support = document.getElementById("support");
    const donation = document.getElementById("donation");
    const input = [...document.querySelectorAll("input")];
    const select = [...document.querySelectorAll("select")];
    const summary = [...document.querySelectorAll("summary")];
    const textarea = [...document.querySelectorAll("textarea")];
    /*  */
    check.addEventListener("click", function () {background.send("check")});
    reload.addEventListener("click", function () {background.send("reload")});
    refresh.addEventListener("click", function () {document.location.reload()});
    support.addEventListener("click", function () {background.send("support")});
    donation.addEventListener("click", function () {background.send("donation")});
    /*  */
    for (let i = 0; i < input.length; i++) {
      input[i].addEventListener("change", config.proxy.engine.update);
    }
    /*  */
    for (let i = 0; i < select.length; i++) {
      select[i].addEventListener("change", config.proxy.engine.update);
    }
    /*  */
    for (let i = 0; i < textarea.length; i++) {
      textarea[i].addEventListener("change", config.proxy.engine.update);
    }
    /*  */
    for (let i = 0; i < summary.length; i++) {
      summary[i].addEventListener("click", function (e) {
        let target = e.target.closest("details");
        background.send("section", {
          "open": !target.open,
          "section": target.getAttribute("section")
        });
      });
    }
    /*  */
    config.handle.footer();
    background.send("load");
    window.removeEventListener("load", config.load, false);
  },
  "handle": {
    "footer": function () {
      const footer = document.querySelector(".footer");
      /*  */
      const direct = footer.querySelector(".direct");
      const system = footer.querySelector(".system");
      const pac_script = footer.querySelector(".pac_script");
      const auto_detect = footer.querySelector(".auto_detect");
      const fixed_servers = footer.querySelector(".fixed_servers");
      /*  */
      direct.addEventListener("click", function () {
        document.querySelector("summary[class*='direct']").click();
      });
      /*  */
      auto_detect.addEventListener("click", function () {
        document.querySelector("summary[class*='auto_detect']").click();
      });
      /*  */
      system.addEventListener("click", function () {
        document.querySelector("summary[class*='system']").click();
      });
      /*  */
      pac_script.addEventListener("click", function () {
        document.querySelector("summary[class*='pac_script']").click();
      });
      /*  */
      fixed_servers.addEventListener("click", function () {
        document.querySelector("summary[class*='fixed_servers']").click();
      });
    }
  },
  "interface": {
    "load": function () {
      const title = [...document.querySelectorAll(".title")];
      const summary = [...document.querySelectorAll("summary")];
      const details = [...document.querySelectorAll("details")];
      /*  */
      document.getElementById("single").checked = config.proxy.object.single;
      document.getElementById("pac-url").value = config.proxy.object.settings.pac.url;
      document.getElementById("auth").checked = config.proxy.object.authentication.active;
      document.getElementById("pac-script").value = config.proxy.object.settings.pac.script;
      document.getElementById("username").value = config.proxy.object.authentication.username;
      document.getElementById("password").value = config.proxy.object.authentication.password;
      document.getElementById("notifications").checked = config.proxy.object.options.notifications;
      document.getElementById("pac-mandatory").checked = config.proxy.object.settings.pac.mandatory;
      document.getElementById("bypass-active").checked = config.proxy.object.settings.bypass.active;
      document.querySelector("input[name=mode][value=" + config.proxy.object.mode + "]").checked = true;
      document.querySelector("input[name=scheme][value=" + config.proxy.object.scheme + "]").checked = true;
      document.getElementById("ftp-port").value = config.proxy.object.rules["proxyForFtp"] ? config.proxy.object.rules["proxyForFtp"].port : '';
      document.getElementById("ftp-host").value = config.proxy.object.rules["proxyForFtp"] ? config.proxy.object.rules["proxyForFtp"].host : '';
      document.getElementById("https-port").value = config.proxy.object.rules["proxyForHttps"] ? config.proxy.object.rules["proxyForHttps"].port : '';
      document.getElementById("https-host").value = config.proxy.object.rules["proxyForHttps"] ? config.proxy.object.rules["proxyForHttps"].host : '';
      document.getElementById("bypass-list").value = config.proxy.object.settings.bypass.list ? config.proxy.object.settings.bypass.list.join(',') : '';
      document.getElementById("fallback-host").value = config.proxy.object.rules["fallbackProxy"] ? config.proxy.object.rules["fallbackProxy"].host : '';
      document.getElementById("fallback-port").value = config.proxy.object.rules["fallbackProxy"] ? config.proxy.object.rules["fallbackProxy"].port : '';
      /*  */
      let a = config.proxy.object.rules["proxyForHttp"] ? config.proxy.object.rules["proxyForHttp"].port : (config.proxy.object.rules["singleProxy"] ? config.proxy.object.rules["singleProxy"].port : '');
      let b = config.proxy.object.rules["proxyForHttp"] ? config.proxy.object.rules["proxyForHttp"].host : (config.proxy.object.rules["singleProxy"] ? config.proxy.object.rules["singleProxy"].host : '');
      document.getElementById("http-port").value = a;
      document.getElementById("http-host").value = b;
      /*  */ 
      for (let name in config.proxy.object.section) {
        let target = document.querySelector("details[section='" + name + "']");
        if (target) {
          target.open = config.proxy.object.section[name];
          /*  */
          if (target.open) {
            if (name === config.proxy.object.mode) {
              window.setTimeout(function () {
                target.scrollIntoView();
              }, 0);
            }
          }
        }
      }
      /*  */
      for (let i = 0; i < title.length; i++) {
        let flag = title[i].querySelector("input").checked;
        /*  */
        summary[i].style.color = flag ? "#fff" : "#555";
        summary[i].style.backgroundColor = flag ? config.proxy.object.color : "transparent";
        flag ? title[i].setAttribute("selected", '') : title[i].removeAttribute("selected");
        flag ? details[i].setAttribute("selected", '') : details[i].removeAttribute("selected");
      }
      /*  */
      config.proxy.engine.start();
    }
  },
  "proxy": {
    "object": {},
    "engine": {
      "start": function () {
        let tmp = {
          "scope": "regular", 
          "value": {
            "mode": config.proxy.object.mode
          }
        };
        /*  */
        if (config.proxy.object.mode === "direct") background.send("proxy.set", tmp);
        if (config.proxy.object.mode === "system") background.send("proxy.set", tmp);
        if (config.proxy.object.mode === "auto_detect") background.send("proxy.set", tmp);
        if (config.proxy.object.mode === "pac_script") {
          const url = config.proxy.object.settings.pac.url;
          const data = config.proxy.object.settings.pac.script;
          const mandatory = config.proxy.object.settings.pac.mandatory;
          if (url || data) {
            if (url) {
              tmp.value["pacScript"] = {
                "url": url,
                "mandatory": mandatory
              };
            } else {
              tmp.value["pacScript"] = {
                "data": data,
                "mandatory": mandatory
              };
            }
            /*  */
            background.send("proxy.set", tmp);
          } else {
            background.send("error");
          }
        }
        /*  */
        if (config.proxy.object.mode === "fixed_servers") {
          let a = "singleProxy" in config.proxy.object.rules;
          let b = "proxyForFtp" in config.proxy.object.rules;
          let c = "proxyForHttp" in config.proxy.object.rules;
          let d = "proxyForHttps" in config.proxy.object.rules;
          let e = "fallbackProxy" in config.proxy.object.rules;
          /*  */
          if (a || b || c || d || e) {
            tmp.value["rules"] = config.proxy.object.rules;
            background.send("proxy.set", tmp);
          } else {
            background.send("error");
          }
        }
      },
      "update": function (e) {
        const title = [...document.querySelectorAll(".title")];
        const details = [...document.querySelectorAll("details")];
        const summary = [...document.querySelectorAll("summary")];
        /*  */
        const auth = document.getElementById("auth").checked;
        const pacurl = document.getElementById("pac-url").value;
        const single = document.getElementById("single").checked;
        const ftpport = document.getElementById("ftp-port").value;
        const ftphost = document.getElementById("ftp-host").value;
        const password = document.getElementById("password").value;
        const username = document.getElementById("username").value;
        const httpport = document.getElementById("http-port").value;
        const httphost = document.getElementById("http-host").value;
        const httpsport = document.getElementById("https-port").value;
        const httpshost = document.getElementById("https-host").value;
        const pacscript = document.getElementById("pac-script").value;
        const bypasslist = document.getElementById("bypass-list").value;
        const fallbackport = document.getElementById("fallback-port").value;
        const fallbackhost = document.getElementById("fallback-host").value;
        const mode = document.querySelector("input[name=mode]:checked").value;
        const bypassactive = document.getElementById("bypass-active").checked;
        const pacmandatory = document.getElementById("pac-mandatory").checked;
        const notifications = document.getElementById("notifications").checked;
        const scheme = document.querySelector("input[name=scheme]:checked").value;
        /*  */
        const proxy_for_ftp = (ftpport && ftphost) ? {"proxyForFtp": {"port": parseInt(ftpport), "host": ftphost, "scheme": scheme}} : null;
        const proxy_for_http = (httpport && httphost) ? {"proxyForHttp": {"port": parseInt(httpport), "host": httphost, "scheme": scheme}} : null;
        const proxy_for_https = (httpsport && httpshost) ? {"proxyForHttps": {"port": parseInt(httpsport), "host": httpshost, "scheme": scheme}} : null;
        const single_proxy = (single && httpport && httphost) ? {"singleProxy": {"port": parseInt(httpport), "host": httphost, "scheme": scheme}} : null;
        const fallback_proxy = (fallbackport && fallbackhost) ? {"fallbackProxy": {"port": parseInt(fallbackport), "host": fallbackhost, "scheme": scheme}} : null;
        /*  */
        config.proxy.object.settings.bypass.active = bypassactive;
        config.proxy.object.settings.bypass.list = config.unique.array(bypasslist ? bypasslist.split(',') : []);
        /*  */
        config.proxy.object.mode = mode;
        config.proxy.object.single = single;
        config.proxy.object.scheme = scheme;
        config.proxy.object.settings.pac.url = pacurl;
        config.proxy.object.authentication.active = auth;
        config.proxy.object.settings.pac.script = pacscript;
        config.proxy.object.authentication.username = username;
        config.proxy.object.authentication.password = password;
        config.proxy.object.options.notifications = notifications;
        config.proxy.object.settings.pac.mandatory = pacmandatory;
        config.proxy.object.color = config.color[config.proxy.object.mode];
        /*  */
        const c = (config.proxy.object.settings.bypass.active && config.proxy.object.settings.bypass.list.length) ? {"bypassList": config.proxy.object.settings.bypass.list} : null;
        const a = Object.assign({}, single_proxy, c);
        const b = Object.assign({}, proxy_for_http, proxy_for_https, proxy_for_ftp, fallback_proxy, c);
        config.proxy.object.rules = single_proxy ? a : b;
        /*  */
        for (let i = 0; i < title.length; i++) {
          let flag = title[i].querySelector("input").checked;
          /*  */
          summary[i].style.color = flag ? "#fff" : "#555";
          summary[i].style.backgroundColor = flag ? config.proxy.object.color : "transparent";
          flag ? title[i].setAttribute("selected", '') : title[i].removeAttribute("selected");
          flag ? details[i].setAttribute("selected", '') : details[i].removeAttribute("selected");
        }
        /*  */
        if (e.target.id === "auth") {
          chrome.permissions.request({
            "origins": ["*://*/*"],
            "permissions": [
              "webRequest", 
              "webRequestAuthProvider"
            ]
          }, function (granted) {
            let flag = granted && e.target.checked;
            background.send("webrequest", flag ? "add" : "remove");
          });
        }
        /*  */
        background.send("proxy.save", config.proxy.object);
        config.proxy.engine.start();
      }
    }
  }
};

background.receive("storage", config.render);
background.receive("fallback", config.fallback);
background.connect(chrome.runtime.connect({"name": "popup"}));

window.addEventListener("load", config.load, false);
