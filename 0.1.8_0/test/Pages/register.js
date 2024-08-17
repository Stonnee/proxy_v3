var u_email = document.querySelector('#email');
var u_email_confirm = document.querySelector("#emailConfirm");
var u_password = document.querySelector('#password');
var u_password_confirm = document.querySelector("#passwordConfirm");
var splitEmail = _0x510dc7 => [_0x510dc7.split('@')[0x0], _0x510dc7.split('@')[0x1]];
var getReq = async _0x64342d => {
  var _0x459a48 = await fetch(_0x64342d);
  var _0xa7d50d = await _0x459a48.json();
  return _0xa7d50d;
};
var getEmail = async () => {
  var [_0x1978f9] = await getReq("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1");
  return _0x1978f9;
};
var generatePassword = (_0x407fbc = 0xd, _0x2cc0db = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$") => Array.from(crypto.getRandomValues(new Uint32Array(_0x407fbc))).map(_0x816fb0 => _0x2cc0db[_0x816fb0 % _0x2cc0db.length]).join('');
var AutomateRegister = async () => {
  var {
    DefaultPass: _0x261bf8
  } = await chrome.storage.local.get("DefaultPass");
  if (!_0x261bf8 || _0x261bf8 && _0x261bf8.length == 0x0) {
    var _0x261bf8 = generatePassword();
    await chrome.storage.local.set({
      'DefaultPass': _0x261bf8
    });
  }
  var _0xf6c1d0 = _0x261bf8;
  var _0x548817 = await getEmail();
  console.log(_0x548817);
  u_email.value = _0x548817;
  u_email_confirm.value = _0x548817;
  u_password.value = _0xf6c1d0;
  u_password_confirm.value = _0xf6c1d0;
  setTimeout(() => {
    chrome.storage.local.set({
      'WaitingCode': true,
      'Email': _0x548817,
      'regPassword': _0xf6c1d0
    });
  }, 0x1f4);
};
var AutomateTempRegister = async () => {
  var {
    DefaultPass: _0x379dc0
  } = await chrome.storage.local.get("DefaultPass");
  if (!_0x379dc0 || _0x379dc0 && _0x379dc0.length == 0x0) {
    var _0x379dc0 = generatePassword();
    await chrome.storage.local.set({
      'DefaultPass': _0x379dc0
    });
  }
  var _0xd5655d = _0x379dc0;
  var _0x2a58a0 = await chrome.runtime.sendMessage({
    'msg': "NEW_TEMP_EMAIL"
  });
  console.log(_0x2a58a0);
  u_email.value = _0x2a58a0;
  u_email_confirm.value = _0x2a58a0;
  u_password.value = _0xd5655d;
  u_password_confirm.value = _0xd5655d;
  setTimeout(() => {
    chrome.storage.local.set({
      'WaitingTempCode': true,
      'GenEmailTemp': _0x2a58a0,
      'regPassword': _0xd5655d
    });
  }, 0x1f4);
};
var AutomateGmailRegister = async () => {
  await StockIds();
  var {
    DefaultPass: _0x5794d1
  } = await chrome.storage.local.get("DefaultPass");
  if (!_0x5794d1 || _0x5794d1 && _0x5794d1.length == 0x0) {
    var _0x5794d1 = generatePassword();
    await chrome.storage.local.set({
      'DefaultPass': _0x5794d1
    });
  }
  var _0x20f12a = _0x5794d1;
  var _0x265ff5 = await getGmailEmail();
  console.log(_0x265ff5);
  u_email.value = _0x265ff5;
  u_email_confirm.value = _0x265ff5;
  u_password.value = _0x20f12a;
  u_password_confirm.value = _0x20f12a;
  setTimeout(() => {
    chrome.storage.local.set({
      'WaitingGmailCode': true,
      'generatedEmail': _0x265ff5,
      'regPassword': _0x20f12a
    });
  }, 0x1f4);
};
var initRegister = async () => {
  var {
    CONFIG: _0x4a76a3,
    isValid: _0x166e48
  } = await chrome.storage.local.get(["CONFIG", "isValid"]);
  if (!_0x166e48) {
    return console.log("unActivated!");
  }
  document.body.setAttribute('clearMode', 'true');
  document.querySelector("#acceptCondition")?.['click']();
  var _0x20531d = document.querySelector('.tls-form');
  _0x20531d.insertAdjacentHTML('afterBegin', "<div class=\"EmailProviders\"></div>");
  var _0x4434d0 = document.querySelector(".EmailProviders");
  if (_0x4a76a3.FAKE_EMAIL) {
    var _0x340656 = document.createElement("button");
    _0x340656.innerHTML = "Fake Email";
    _0x340656.classList.add("ISI_Register", "RegisterBTN");
    _0x4434d0.appendChild(_0x340656);
    _0x340656.onclick = _0x38c1bd => {
      _0x38c1bd.preventDefault();
      AutomateRegister();
    };
  }
  if (_0x4a76a3.TEMP_EMAIL) {
    var _0x10cc3c = document.createElement("button");
    _0x10cc3c.innerHTML = 'TempMail';
    _0x10cc3c.classList.add("ISI_Register", 'TempMail');
    _0x4434d0.appendChild(_0x10cc3c);
    _0x10cc3c.onclick = _0x207360 => {
      _0x207360.preventDefault();
      AutomateTempRegister();
    };
  }
  var _0x472049 = setInterval(() => {
    if (document.querySelector("#g-recaptcha-response").value == '') {
      return;
    }
    clearInterval(_0x472049);
    document.querySelector("#submit").click();
  }, 0x1f4);
};
var RegInterval = setInterval(() => {
  if (document.querySelectorAll("#email").length > 0x0) {
    clearInterval(RegInterval);
    initRegister();
  }
}, 0x3e8);