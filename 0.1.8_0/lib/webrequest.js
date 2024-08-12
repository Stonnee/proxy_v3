app.webrequest = {
  "on": {
    "auth": {
      "required": {
        "listener": null,
        "callback": function (callback) {
          app.webrequest.on.auth.required.listener = callback;
        },
        "remove": function () {
          if (chrome.webRequest) {
            chrome.webRequest.onAuthRequired.removeListener(app.webrequest.on.auth.required.listener);
          }
        },
        "add": function () {
          const options = ["blocking"];
          const filter = {"urls": ["*://*/*"]};
          /*  */
          if (chrome.webRequest) {
            chrome.webRequest.onAuthRequired.removeListener(app.webrequest.on.auth.required.listener);
            chrome.webRequest.onAuthRequired.addListener(app.webrequest.on.auth.required.listener, filter, options);
          }
        }
      }
    }
  }
};
