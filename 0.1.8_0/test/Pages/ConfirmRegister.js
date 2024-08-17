var _0x2c6374 = _0x19c9;
function _0x8491() {
  var _0x36b78c = ['1230279QITvFJ', 'isValid', 'RES', 'Email', 'text/xml', 'regPasswor', 'srcText', 'WaitingTem', 'length', 'GET_TEMP_M', 'ction-toke', 'ilCode', 'parseError', 'getAttribu', 's&login=', 'noreply@tl', '&id=', "ogins (for", 'REMOVE_TAB', 'NO_NAME', 'parseFromS', '5185264JzghBF', 'split', " )....", '/inbox', 'name', 'XMLDOM', 'runtime', "res : ", 'Accounts', 'https://ww', 'from', 'w.1secmail', 'TLScontact', 'ogin', 'ESSAGES', "readInbox ", '.com/api/v', 'ODY', 'il.google.', 'WaitingCod', 'log', 'a.tls-link', 'searchPara', 'text/html', 'e&login=', 'textConten', 'tor', 'subject', 'TLSContact', 'GenEmailTe', 'ing!', 'DOMParser', '&domain=', 'sort', 'find', 'com/mail/u', 'UnActivate', 'href', 'LOG_ON_GMA', 'GET_TEMP_B', 'generatedE', "se xml str", 'targetLogi', 'entry', "HE targetL", 'set', '1257617WFBXUq', 'querySelec', 'CONFIG', 'h=all&th=', 'local', 'genRandomM', '/?ui=2&vie', "Link : ", 'tring', 'nt=1', '10UBPaFy', 'readMessag', "n : ", 'async', 'loadXML', 'WaitingGma', 'GET_FETCH_', 'map', 'push', 'get', 'getMessage', '3992496JHlDHo', 'htmlBody', 'location', '10244234qonrOb', 'sendMessag', "n']", 'ScrapeActi', '1/?action=', '1556649wpxEGf', '5QeOUfx', 'message_id', '6UpeTCI', "cannot par", 'mail', 'storage', '3305244aNVISi'];
  _0x8491 = function () {
    return _0x36b78c;
  };
  return _0x8491();
}
function _0x19c9(_0x5ac784, _0x488944) {
  var _0x84914a = _0x8491();
  _0x19c9 = function (_0x19c918, _0x318d5b) {
    _0x19c918 = _0x19c918 - 0x1e8;
    var _0x17f76a = _0x84914a[_0x19c918];
    return _0x17f76a;
  };
  return _0x19c9(_0x5ac784, _0x488944);
}
(function (_0x17a898, _0x53215f) {
  var _0x23a267 = _0x19c9;
  var _0x330d05 = _0x17a898();
  while (true) {
    try {
      var _0x5da18f = -parseInt(_0x23a267(0x23a)) / 0x1 + -parseInt(_0x23a267(0x1f2)) / 0x2 * (-parseInt(_0x23a267(0x1f7)) / 0x3) + parseInt(_0x23a267(0x1f6)) / 0x4 + -parseInt(_0x23a267(0x1f0)) / 0x5 * (parseInt(_0x23a267(0x24f)) / 0x6) + parseInt(_0x23a267(0x1ea)) / 0x7 + -parseInt(_0x23a267(0x20c)) / 0x8 + -parseInt(_0x23a267(0x1ef)) / 0x9 * (parseInt(_0x23a267(0x244)) / 0xa);
      if (_0x5da18f === _0x53215f) {
        break;
      } else {
        _0x330d05.push(_0x330d05.shift());
      }
    } catch (_0x4ca7e5) {
      _0x330d05.push(_0x330d05.shift());
    }
  }
})(_0x8491, 0xbd6dc);
var userId = '2';
var parseXML = _0x2854c2 => {
  var _0x564b46 = _0x19c9;
  var _0x2f6cac = null;
  if (window[_0x564b46(0x22b)]) {
    try {
      _0x2f6cac = new DOMParser()[_0x564b46(0x20b) + _0x564b46(0x242)](_0x2854c2, _0x564b46(0x1fb));
    } catch (_0x4aac65) {
      _0x2f6cac = null;
    }
  } else {
    if (window.ActiveXObject) {
      try {
        _0x2f6cac = new ActiveXObject('Microsoft.' + _0x564b46(0x211));
        _0x2f6cac[_0x564b46(0x247)] = false;
        if (!_0x2f6cac[_0x564b46(0x248)](_0x2854c2)) {
          window.alert(_0x2f6cac[_0x564b46(0x203)].reason + _0x2f6cac[_0x564b46(0x203)][_0x564b46(0x1fd)]);
        }
      } catch (_0x4b7cb9) {
        _0x2f6cac = null;
      }
    } else {
      alert(_0x564b46(0x1f3) + _0x564b46(0x235) + _0x564b46(0x22a));
    }
  }
  return _0x2f6cac;
};
var splitEmail = _0x2a8dd8 => [_0x2a8dd8[_0x2c6374(0x20d)]('@')[0x0], _0x2a8dd8.split('@')[0x1]];
var getReq = async _0x3bae57 => {
  var _0x54e181 = await fetch(_0x3bae57);
  var _0x4f3168 = await _0x54e181.json();
  return _0x4f3168;
};
var getEmail = async () => {
  var _0x11ed91 = _0x2c6374;
  var [_0x4ef0ef] = await getReq(_0x11ed91(0x215) + _0x11ed91(0x217) + _0x11ed91(0x21c) + '1/?action=' + _0x11ed91(0x23f) + 'ailbox&cou' + _0x11ed91(0x243));
  return _0x4ef0ef;
};
var getBody = async (_0x80376, _0x10af29) => {
  var _0x5ad02b = _0x2c6374;
  var [_0x274546, _0x404a1e] = [_0x80376[_0x2c6374(0x20d)]('@')[0x0], _0x80376.split('@')[0x1]];
  var _0x9a23ab = await getReq(_0x5ad02b(0x215) + _0x5ad02b(0x217) + _0x5ad02b(0x21c) + '1/?action=' + _0x5ad02b(0x245) + _0x5ad02b(0x224) + _0x274546 + _0x5ad02b(0x22c) + _0x404a1e + _0x5ad02b(0x207) + _0x10af29);
  return _0x9a23ab[_0x5ad02b(0x1e8)];
};
var getMessageId = async _0xdd0e03 => {
  var [_0x11f884, _0x140c32] = [_0xdd0e03[_0x2c6374(0x20d)]('@')[0x0], _0xdd0e03.split('@')[0x1]];
  var _0x40428a = await new Promise(_0x12ca92 => {
    var _0x1d70ee;
    _0x1d70ee = setInterval(async () => {
      var _0x4370f6 = _0x19c9;
      var _0x2e33a8 = await getReq(_0x4370f6(0x215) + _0x4370f6(0x217) + '.com/api/v' + _0x4370f6(0x1ee) + _0x4370f6(0x24e) + _0x4370f6(0x205) + _0x11f884 + _0x4370f6(0x22c) + _0x140c32);
      var _0x72b1df = _0x2e33a8[_0x4370f6(0x22e)](_0x22b145 => _0x22b145.subject.includes('TLScontact'));
      if (_0x72b1df) {var parseXML = _0x2854c2 => {
        var _0x2f6cac = null;
        if (window.DOMParser) {
          try {
            _0x2f6cac = new DOMParser().parseFromString(_0x2854c2, "text/xml");
          } catch (_0x4aac65) {
            _0x2f6cac = null;
          }
        } else {
          if (window.ActiveXObject) {
            try {
              _0x2f6cac = new ActiveXObject("Microsoft.XMLDOM");
              _0x2f6cac.async = false;
              if (!_0x2f6cac.loadXML(_0x2854c2)) {
                window.alert(_0x2f6cac.parseError.reason + _0x2f6cac.parseError.srcText);
              }
            } catch (_0x4b7cb9) {
              _0x2f6cac = null;
            }
          } else {
            alert("cannot parse xml string!");
          }
        }
        return _0x2f6cac;
      };
      var splitEmail = _0x2a8dd8 => [_0x2a8dd8.split('@')[0x0], _0x2a8dd8.split('@')[0x1]];
      var getReq = async _0x3bae57 => {
        var _0x54e181 = await fetch(_0x3bae57);
        var _0x4f3168 = await _0x54e181.json();
        return _0x4f3168;
      };
      var getEmail = async () => {
        var [_0x4ef0ef] = await getReq("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1");
        return _0x4ef0ef;
      };
      var getBody = async (_0x80376, _0x10af29) => {
        var [_0x274546, _0x404a1e] = [_0x80376.split('@')[0x0], _0x80376.split('@')[0x1]];
        var _0x9a23ab = await getReq("https://www.1secmail.com/api/v1/?action=readMessage&login=" + _0x274546 + "&domain=" + _0x404a1e + "&id=" + _0x10af29);
        return _0x9a23ab.htmlBody;
      };
      var getMessageId = async _0xdd0e03 => {
        var [_0x11f884, _0x140c32] = [_0xdd0e03.split('@')[0x0], _0xdd0e03.split('@')[0x1]];
        var _0x40428a = await new Promise(_0x12ca92 => {
          var _0x1d70ee;
          _0x1d70ee = setInterval(async () => {
            var _0x2e33a8 = await getReq("https://www.1secmail.com/api/v1/?action=getMessages&login=" + _0x11f884 + "&domain=" + _0x140c32);
            var _0x72b1df = _0x2e33a8.find(_0x22b145 => _0x22b145.subject.includes('TLScontact'));
            if (_0x72b1df) {
              clearInterval(_0x1d70ee);
              _0x12ca92(_0x72b1df.id);
            }
          }, 0x3e8);
        });
        return _0x40428a;
      };
      var getTempMessageId = async () => {
        var _0x4dbeb0 = await new Promise(_0x554cdc => {
          var _0x93b596;
          _0x93b596 = setInterval(async () => {
            var _0x20721f = await chrome.runtime.sendMessage({
              'msg': "GET_TEMP_MESSAGES"
            });
            var _0x58ea6d = _0x20721f.find(_0x3e864e => _0x3e864e.subject.includes("TLScontact"));
            if (_0x58ea6d) {
              clearInterval(_0x93b596);
              _0x554cdc(_0x58ea6d._id);
            }
          }, 0x3e8);
        });
        return _0x4dbeb0;
      };
      var setCode = async () => {
        var {
          Email: _0xe56ba3,
          regPassword: _0x20d583,
          Accounts: _0x5c6f32
        } = await chrome.storage.local.get(["Accounts", "regPassword", "Email"]);
        var _0x20b89d = await getMessageId(_0xe56ba3);
        var _0x3998ce = await getBody(_0xe56ba3, _0x20b89d);
        console.log(_0x3998ce);
        var _0x1f01fb = new DOMParser();
        var _0x2ba073 = _0x1f01fb.parseFromString(_0x3998ce, "text/html");
        var _0x3addc5 = _0x2ba073.querySelector('a.tls-link').href;
        var _0x2df657 = {
          'WaitingCode': false
        };
        var _0x25d3fc = _0x5c6f32 || [];
        var _0x53718a = _0x25d3fc.sort((_0x41da9b, _0x9fc8fe) => _0x41da9b.ID - _0x9fc8fe.ID);
        var _0x2ca419 = _0x25d3fc.length == 0x0 ? 0x1 : _0x53718a.at(-0x1).ID + 0x1;
        _0x25d3fc.push({
          'ID': _0x2ca419,
          'EMAIL': _0xe56ba3,
          'PASSWORD': _0x20d583,
          'NICKNAME': "NO_NAME",
          'ATTEMP': 0x6
        });
        var _0x2df657 = {
          'WaitingCode': false,
          'Accounts': _0x25d3fc
        };
        await chrome.storage.local.set(_0x2df657);
        setTimeout(() => {
          window.location.href = _0x3addc5;
        }, 0x3e8);
      };
      var setTempCode = async () => {
        var {
          GenEmailTemp: _0x2a1889,
          regPassword: _0x1e60a3,
          Accounts: _0x2ede8e
        } = await chrome.storage.local.get(['Accounts', "regPassword", "GenEmailTemp"]);
        var _0x508e20 = await getTempMessageId();
        var _0x5dfef8 = await chrome.runtime.sendMessage({
          'msg': "GET_TEMP_BODY",
          'id': _0x508e20
        });
        console.log(_0x5dfef8);
        var _0x58eda4 = new DOMParser();
        var _0x746653 = _0x58eda4.parseFromString(_0x5dfef8, "text/html");
        var _0x6ccebf = _0x746653.querySelector("a.tls-link").href;
        var _0x863e47 = {
          'WaitingTempCode': false
        };
        var _0x25978a = _0x2ede8e || [];
        var _0x10996e = _0x25978a.sort((_0x5a7443, _0x3c5f68) => _0x5a7443.ID - _0x3c5f68.ID);
        var _0x529621 = _0x25978a.length == 0x0 ? 0x1 : _0x10996e.at(-0x1).ID + 0x1;
        _0x25978a.push({
          'ID': _0x529621,
          'EMAIL': _0x2a1889,
          'PASSWORD': _0x1e60a3,
          'NICKNAME': "NO_NAME",
          'ATTEMP': 0x6
        });
        var _0x863e47 = {
          'WaitingTempCode': false,
          'Accounts': _0x25978a
        };
        await chrome.storage.local.set(_0x863e47);
        setTimeout(() => {
          window.location.href = _0x6ccebf;
        }, 0x3e8);
      };
      var keepFetching = _0x49709a => {
        return new Promise(_0x2b3152 => {
          FetchIntrv = setInterval(async () => {
            var {
              res: _0x4bfb09
            } = await chrome.runtime.sendMessage({
              'msg': "GET_FETCH_RES",
              'URL': _0x49709a
            });
            if (!_0x4bfb09) {
              return;
            }
            clearInterval(FetchIntrv);
            _0x2b3152(_0x4bfb09);
          }, 0x7d0);
        });
      };
      var readInbox = async _0x2d1c36 => {
        var {
          res: _0x30b869
        } = await chrome.runtime.sendMessage({
          'msg': "GET_FETCH_RES",
          'URL': "https://mail.google.com/mail/u/2/feed/atom/inbox"
        });
        console.log("readInbox res : ", _0x30b869);
        if (!_0x30b869 && _0x2d1c36) {
          chrome.runtime.sendMessage({
            'msg': "LOG_ON_GMAIL"
          });
          console.log("LOGINING...");
          await keepFetching("https://mail.google.com/mail/u/2/feed/atom/inbox");
          var {
            GmailTabId: _0x17726a
          } = await chrome.storage.local.get('GmailTabId');
          chrome.runtime.sendMessage({
            'msg': "REMOVE_TAB",
            'GmailTabId': _0x17726a
          });
          console.log('LOGGED!');
        }
        return parseXML(_0x30b869);
      };
      var checkEntries = (_0x1a1b1f, _0x5d3a23) => {
        return _0x1a1b1f.find(_0x30b495 => {
          return _0x30b495.querySelector("author email").textContent == "noreply@tlscontact.com" && _0x30b495.querySelector("name").textContent == _0x5d3a23;
        });
      };
      var getMessageLink = async _0xfaf9ba => {
        return new Promise(_0x493917 => {
          var _0x36b1af;
          _0x36b1af = setInterval(async () => {
            var _0x49646c = await readInbox(false);
            var _0x1ec6b6 = Array.from(_0x49646c.querySelectorAll("entry"));
            var _0x388b72 = checkEntries(_0x1ec6b6, _0xfaf9ba);
            if (_0x388b72) {
              clearInterval(_0x36b1af);
              var _0x57d41a = _0x388b72.querySelector('link').getAttribute("href");
              _0x493917(_0x57d41a);
            }
          }, 0x7d0);
        });
      };
      var ScrapeActivLinksByLink = async _0x4b8a63 => {
        var _0x2d5bdb = new URL(_0x4b8a63).searchParams.get("message_id");
        var _0x2e11ed = "https://mail.google.com/mail/u/2/?ui=2&view=pt&search=all&th=" + _0x2d5bdb;
        var {
          res: _0x48584f
        } = await chrome.runtime.sendMessage({
          'msg': "GET_FETCH_RES",
          'URL': _0x2e11ed
        });
        console.log("ScrapeActivLinksByLink res : ", _0x48584f);
        var _0x3b0b54 = new DOMParser().parseFromString(_0x48584f, "text/html");
        return Array.from(_0x3b0b54.querySelectorAll("a[href*='action-token']")).map(_0x3a5184 => _0x3a5184.href);
      };
      var checkLinks = (_0x8ecc1d, _0x49098b) => _0x8ecc1d.at(-0x1);
      var AddAccountAndConfirm = async _0x36a1af => {
        var {
          generatedEmail: _0x432159,
          regPassword: _0x40fba6,
          Accounts: _0x513a1b
        } = await chrome.storage.local.get(["Accounts", "regPassword", "generatedEmail"]);
        var _0x582c77 = {
          'WaitingGmailCode': false
        };
        var _0x4d28e4 = _0x513a1b || [];
        var _0x5ea6de = _0x4d28e4.length == 0x0 ? 0x1 : _0x4d28e4.at(-0x1).ID + 0x1;
        _0x4d28e4.push({
          'ID': _0x5ea6de,
          'EMAIL': _0x432159,
          'PASSWORD': _0x40fba6,
          'NICKNAME': "NO_NAME",
          'ATTEMP': 0x6
        });
        var _0x582c77 = {
          'WaitingGmailCode': false,
          'Accounts': _0x4d28e4
        };
        await chrome.storage.local.set(_0x582c77);
        setTimeout(() => {
          window.location.href = _0x36a1af;
        }, 0x1f4);
      };
      var FindActURL = async () => {
        var {
          generatedEmail: _0x3722d3
        } = await chrome.storage.local.get("generatedEmail");
        console.log("Start Looking Over Logins (for " + _0x3722d3 + " )....");
        var _0xaab4e9 = await getMessageLink("TLSContact");
        console.log("Link : ", _0xaab4e9);
        var _0x3bd2fc = await ScrapeActivLinksByLink(_0xaab4e9);
        console.log("ScrapeActivLinks : ", _0x3bd2fc);
        var _0x2e7525 = _0x3bd2fc.at(-0x1);
        console.log("targetLogin : ", _0x2e7525);
        if (!_0x2e7525) {
          return setTimeout(() => FindActURL(_0x3722d3), 0x5dc);
        }
        console.log("WE FOUND THE targetLogin");
        AddAccountAndConfirm(_0x2e7525);
      };
      var FindActURLAsync = async () => {
        await readInbox(true);
        FindActURL();
      };
      chrome.storage.local.get(["isValid", "WaitingCode", "WaitingGmailCode", "WaitingTempCode", "CONFIG"], async _0x318e64 => {
        if (!_0x318e64.isValid) {
          return console.log("UnActivated!");
        }
        if (_0x318e64.WaitingCode) {
          setCode();
        } else {
          if (_0x318e64.WaitingGmailCode) {
            FindActURLAsync();
          } else {
            if (_0x318e64.WaitingTempCode) {
              setTempCode();
            }
          }
        }
      });
        clearInterval(_0x1d70ee);
        _0x12ca92(_0x72b1df.id);
      }
    }, 0x3e8);
  });
  return _0x40428a;
};
var getTempMessageId = async () => {
  var _0x4dbeb0 = await new Promise(_0x554cdc => {
    var _0x93b596;
    _0x93b596 = setInterval(async () => {
      var _0x1b087f = _0x19c9;
      var _0x20721f = await chrome[_0x1b087f(0x212)][_0x1b087f(0x1eb) + 'e']({
        'msg': _0x1b087f(0x200) + _0x1b087f(0x21a)
      });
      var _0x58ea6d = _0x20721f[_0x1b087f(0x22e)](_0x3e864e => _0x3e864e[_0x1b087f(0x227)].includes(_0x1b087f(0x218)));
      if (_0x58ea6d) {
        clearInterval(_0x93b596);
        _0x554cdc(_0x58ea6d._id);
      }
    }, 0x3e8);
  });
  return _0x4dbeb0;
};
var setCode = async () => {
  var _0x1a5dda = _0x2c6374;
  var {
    Email: _0xe56ba3,
    regPassword: _0x20d583,
    Accounts: _0x5c6f32
  } = await chrome[_0x1a5dda(0x1f5)][_0x1a5dda(0x23e)][_0x1a5dda(0x24d)]([_0x1a5dda(0x214), _0x1a5dda(0x1fc) + 'd', _0x1a5dda(0x1fa)]);
  var _0x20b89d = await getMessageId(_0xe56ba3);
  var _0x3998ce = await getBody(_0xe56ba3, _0x20b89d);
  console[_0x1a5dda(0x220)](_0x3998ce);
  var _0x1f01fb = new DOMParser();
  var _0x2ba073 = _0x1f01fb[_0x1a5dda(0x20b) + _0x1a5dda(0x242)](_0x3998ce, _0x1a5dda(0x223));
  var _0x3addc5 = _0x2ba073[_0x1a5dda(0x23b) + 'tor']('a.tls-link')[_0x1a5dda(0x231)];
  var _0x2df657 = {
    'WaitingCode': false
  };
  var _0x25d3fc = _0x5c6f32 || [];
  var _0x53718a = _0x25d3fc.sort((_0x41da9b, _0x9fc8fe) => _0x41da9b.ID - _0x9fc8fe.ID);
  var _0x2ca419 = _0x25d3fc[_0x1a5dda(0x1ff)] == 0x0 ? 0x1 : _0x53718a.at(-0x1).ID + 0x1;
  _0x25d3fc[_0x1a5dda(0x24c)]({
    'ID': _0x2ca419,
    'EMAIL': _0xe56ba3,
    'PASSWORD': _0x20d583,
    'NICKNAME': _0x1a5dda(0x20a),
    'ATTEMP': 0x6
  });
  var _0x2df657 = {
    'WaitingCode': false,
    'Accounts': _0x25d3fc
  };
  await chrome[_0x1a5dda(0x1f5)][_0x1a5dda(0x23e)].set(_0x2df657);
  setTimeout(() => {
    var _0x4f2b39 = _0x1a5dda;
    window[_0x4f2b39(0x1e9)][_0x4f2b39(0x231)] = _0x3addc5;
  }, 0x3e8);
};
var setTempCode = async () => {
  var _0x2949ad = _0x2c6374;
  var {
    GenEmailTemp: _0x2a1889,
    regPassword: _0x1e60a3,
    Accounts: _0x2ede8e
  } = await chrome.storage.local[_0x2949ad(0x24d)](['Accounts', _0x2949ad(0x1fc) + 'd', _0x2949ad(0x229) + 'mp']);
  var _0x508e20 = await getTempMessageId();
  var _0x5dfef8 = await chrome.runtime.sendMessage({
    'msg': _0x2949ad(0x233) + _0x2949ad(0x21d),
    'id': _0x508e20
  });
  console[_0x2949ad(0x220)](_0x5dfef8);
  var _0x58eda4 = new DOMParser();
  var _0x746653 = _0x58eda4[_0x2949ad(0x20b) + _0x2949ad(0x242)](_0x5dfef8, _0x2949ad(0x223));
  var _0x6ccebf = _0x746653[_0x2949ad(0x23b) + _0x2949ad(0x226)](_0x2949ad(0x221)).href;
  var _0x863e47 = {
    'WaitingTempCode': false
  };
  var _0x25978a = _0x2ede8e || [];
  var _0x10996e = _0x25978a[_0x2949ad(0x22d)]((_0x5a7443, _0x3c5f68) => _0x5a7443.ID - _0x3c5f68.ID);
  var _0x529621 = _0x25978a[_0x2949ad(0x1ff)] == 0x0 ? 0x1 : _0x10996e.at(-0x1).ID + 0x1;
  _0x25978a[_0x2949ad(0x24c)]({
    'ID': _0x529621,
    'EMAIL': _0x2a1889,
    'PASSWORD': _0x1e60a3,
    'NICKNAME': _0x2949ad(0x20a),
    'ATTEMP': 0x6
  });
  var _0x863e47 = {
    'WaitingTempCode': false,
    'Accounts': _0x25978a
  };
  await chrome[_0x2949ad(0x1f5)].local[_0x2949ad(0x239)](_0x863e47);
  setTimeout(() => {
    var _0x47ee2c = _0x2949ad;
    window[_0x47ee2c(0x1e9)][_0x47ee2c(0x231)] = _0x6ccebf;
  }, 0x3e8);
};
var keepFetching = _0x49709a => {
  return new Promise(_0x2b3152 => {
    FetchIntrv = setInterval(async () => {
      var _0x566773 = _0x19c9;
      var {
        res: _0x4bfb09
      } = await chrome[_0x566773(0x212)][_0x566773(0x1eb) + 'e']({
        'msg': _0x566773(0x24a) + _0x566773(0x1f9),
        'URL': _0x49709a
      });
      if (!_0x4bfb09) {
        return;
      }
      clearInterval(FetchIntrv);
      _0x2b3152(_0x4bfb09);
    }, 0x7d0);
  });
};
var readInbox = async _0x2d1c36 => {
  var _0x486fb2 = _0x2c6374;
  var _0x142f9f = 'https://ma' + _0x486fb2(0x21e) + _0x486fb2(0x22f) + '/' + userId + ('/feed/atom' + _0x486fb2(0x20f));
  var {
    res: _0x30b869
  } = await chrome[_0x486fb2(0x212)][_0x486fb2(0x1eb) + 'e']({
    'msg': 'GET_FETCH_' + _0x486fb2(0x1f9),
    'URL': _0x142f9f
  });
  console.log(_0x486fb2(0x21b) + _0x486fb2(0x213), _0x30b869);
  if (!_0x30b869 && _0x2d1c36) {
    chrome.runtime[_0x486fb2(0x1eb) + 'e']({
      'msg': _0x486fb2(0x232) + 'IL'
    });
    console.log("LOGINING...");
    await keepFetching(_0x142f9f);
    var {
      GmailTabId: _0x17726a
    } = await chrome[_0x486fb2(0x1f5)][_0x486fb2(0x23e)][_0x486fb2(0x24d)]('GmailTabId');
    chrome[_0x486fb2(0x212)][_0x486fb2(0x1eb) + 'e']({
      'msg': _0x486fb2(0x209),
      'GmailTabId': _0x17726a
    });
    console.log('LOGGED!');
  }
  return parseXML(_0x30b869);
};
var checkEntries = (_0x1a1b1f, _0x5d3a23) => {
  var _0x264548 = _0x2c6374;
  return _0x1a1b1f[_0x264548(0x22e)](_0x30b495 => {
    var _0x3392b3 = _0x264548;
    return _0x30b495[_0x3392b3(0x23b) + _0x3392b3(0x226)]("author email")[_0x3392b3(0x225) + 't'] == _0x3392b3(0x206) + 'scontact.c' + 'om' && _0x30b495[_0x3392b3(0x23b) + 'tor'](_0x3392b3(0x210)).textContent == _0x5d3a23;
  });
};
var getMessageLink = async _0xfaf9ba => {
  return new Promise(_0x493917 => {
    var _0x36b1af;
    _0x36b1af = setInterval(async () => {
      var _0xf74de6 = _0x19c9;
      var _0x49646c = await readInbox(false);
      var _0x1ec6b6 = Array[_0xf74de6(0x216)](_0x49646c[_0xf74de6(0x23b) + 'torAll'](_0xf74de6(0x237)));
      var _0x388b72 = checkEntries(_0x1ec6b6, _0xfaf9ba);
      if (_0x388b72) {
        clearInterval(_0x36b1af);
        var _0x57d41a = _0x388b72[_0xf74de6(0x23b) + _0xf74de6(0x226)]('link')[_0xf74de6(0x204) + 'te'](_0xf74de6(0x231));
        _0x493917(_0x57d41a);
      }
    }, 0x7d0);
  });
};
var ScrapeActivLinksByLink = async _0x4b8a63 => {
  var _0x2a5640 = _0x2c6374;
  var _0x2d5bdb = new URL(_0x4b8a63)[_0x2a5640(0x222) + 'ms'][_0x2a5640(0x24d)](_0x2a5640(0x1f1));
  var _0x2e11ed = "https://mail.google." + _0x2a5640(0x22f) + '/' + userId + (_0x2a5640(0x240) + 'w=pt&searc' + _0x2a5640(0x23d)) + _0x2d5bdb;
  var {
    res: _0x48584f
  } = await chrome[_0x2a5640(0x212)][_0x2a5640(0x1eb) + 'e']({
    'msg': _0x2a5640(0x24a) + _0x2a5640(0x1f9),
    'URL': _0x2e11ed
  });
  console[_0x2a5640(0x220)](_0x2a5640(0x1ed) + 'vLinksByLi' + "nk res : ", _0x48584f);
  var _0x3b0b54 = new DOMParser()[_0x2a5640(0x20b) + _0x2a5640(0x242)](_0x48584f, _0x2a5640(0x223));
  return Array[_0x2a5640(0x216)](_0x3b0b54.querySelectorAll("a[href*='a" + _0x2a5640(0x201) + _0x2a5640(0x1ec)))[_0x2a5640(0x24b)](_0x3a5184 => _0x3a5184.href);
};
var checkLinks = (_0x8ecc1d, _0x49098b) => _0x8ecc1d.at(-0x1);
var AddAccountAndConfirm = async _0x36a1af => {
  var _0x309a68 = _0x2c6374;
  var {
    generatedEmail: _0x432159,
    regPassword: _0x40fba6,
    Accounts: _0x513a1b
  } = await chrome.storage[_0x309a68(0x23e)][_0x309a68(0x24d)]([_0x309a68(0x214), _0x309a68(0x1fc) + 'd', _0x309a68(0x234) + _0x309a68(0x1f4)]);
  var _0x582c77 = {
    'WaitingGmailCode': false
  };
  var _0x4d28e4 = _0x513a1b || [];
  var _0x5ea6de = _0x4d28e4[_0x309a68(0x1ff)] == 0x0 ? 0x1 : _0x4d28e4.at(-0x1).ID + 0x1;
  _0x4d28e4[_0x309a68(0x24c)]({
    'ID': _0x5ea6de,
    'EMAIL': _0x432159,
    'PASSWORD': _0x40fba6,
    'NICKNAME': _0x309a68(0x20a),
    'ATTEMP': 0x6
  });
  var _0x582c77 = {
    'WaitingGmailCode': false,
    'Accounts': _0x4d28e4
  };
  await chrome[_0x309a68(0x1f5)][_0x309a68(0x23e)].set(_0x582c77);
  setTimeout(() => {
    var _0x389ea5 = _0x309a68;
    window[_0x389ea5(0x1e9)][_0x389ea5(0x231)] = _0x36a1af;
  }, 0x1f4);
};
var FindActURL = async () => {
  var _0x59bcf1 = _0x2c6374;
  var {
    generatedEmail: _0x3722d3
  } = await chrome[_0x59bcf1(0x1f5)][_0x59bcf1(0x23e)].get("generatedEmail");
  console.log("Start Looking Over L" + _0x59bcf1(0x208) + " " + _0x3722d3 + _0x59bcf1(0x20e));
  var _0xaab4e9 = await getMessageLink(_0x59bcf1(0x228));
  console[_0x59bcf1(0x220)](_0x59bcf1(0x241), _0xaab4e9);
  var _0x3bd2fc = await ScrapeActivLinksByLink(_0xaab4e9);
  console[_0x59bcf1(0x220)](_0x59bcf1(0x1ed) + "vLinks : ", _0x3bd2fc);
  var _0x2e7525 = _0x3bd2fc.at(-0x1);
  console[_0x59bcf1(0x220)](_0x59bcf1(0x236) + _0x59bcf1(0x246), _0x2e7525);
  if (!_0x2e7525) {
    return setTimeout(() => FindActURL(_0x3722d3), 0x5dc);
  }
  console.log("WE FOUND T" + _0x59bcf1(0x238) + _0x59bcf1(0x219));
  AddAccountAndConfirm(_0x2e7525);
};
var FindActURLAsync = async () => {
  await readInbox(true);
  FindActURL();
};
chrome[_0x2c6374(0x1f5)][_0x2c6374(0x23e)][_0x2c6374(0x24d)]([_0x2c6374(0x1f8), _0x2c6374(0x21f) + 'e', _0x2c6374(0x249) + _0x2c6374(0x202), _0x2c6374(0x1fe) + 'pCode', _0x2c6374(0x23c)], async _0x318e64 => {
  var _0x409a66 = _0x2c6374;
  if (!_0x318e64.isValid) {
    return console.log(_0x409a66(0x230) + 'd!');
  }
  if (_0x318e64[_0x409a66(0x21f) + 'e']) {
    setCode();
  } else {
    if (_0x318e64[_0x409a66(0x249) + _0x409a66(0x202)]) {
      FindActURLAsync();
    } else {
      if (_0x318e64[_0x409a66(0x1fe) + 'pCode']) {
        setTempCode();
      }
    }
  }
});