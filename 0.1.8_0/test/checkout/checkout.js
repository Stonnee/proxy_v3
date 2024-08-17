(function (_0x404982, _0x5731a3) {
    var _0x3ae4a5 = _0x2219;
    var _0x3e9edd = _0x404982();
    while (true) {
      try {
        var _0x248e99 = -parseInt(_0x3ae4a5(0x1d1)) / 0x1 * (-parseInt(_0x3ae4a5(0x1db)) / 0x2) + -parseInt(_0x3ae4a5(0x1d5)) / 0x3 * (-parseInt(_0x3ae4a5(0x1d6)) / 0x4) + -parseInt(_0x3ae4a5(0x1d7)) / 0x5 * (-parseInt(_0x3ae4a5(0x1cb)) / 0x6) + -parseInt(_0x3ae4a5(0x1da)) / 0x7 * (-parseInt(_0x3ae4a5(0x1c7)) / 0x8) + parseInt(_0x3ae4a5(0x1ce)) / 0x9 + -parseInt(_0x3ae4a5(0x1c8)) / 0xa + parseInt(_0x3ae4a5(0x1de)) / 0xb * (-parseInt(_0x3ae4a5(0x1df)) / 0xc);
        if (_0x248e99 === _0x5731a3) {
          break;
        } else {
          _0x3e9edd.push(_0x3e9edd.shift());
        }
      } catch (_0x479199) {
        _0x3e9edd.push(_0x3e9edd.shift());
      }
    }
  })(_0x4cdc, 0xb0676);
  function _0x2219(_0x3decca, _0x52cf57) {
    var _0x4cdc48 = _0x4cdc();
    _0x2219 = function (_0x221930, _0x446824) {
      _0x221930 = _0x221930 - 0x1c7;
      var _0x3ee144 = _0x4cdc48[_0x221930];
      return _0x3ee144;
    };
    return _0x2219(_0x3decca, _0x52cf57);
  }
  var waitElm = async _0x1885db => {
    return new Promise(_0x3f4173 => {
      var _0xc4299f = setInterval(() => {
        var _0x309c1c = _0x2219;
        if (!document[_0x309c1c(0x1e0) + _0x309c1c(0x1dd)](_0x1885db)) {
          return;
        }
        clearInterval(_0xc4299f);
        console.log(_0x1885db, _0x309c1c(0x1d2));
        _0x3f4173(true);
      }, 0xc8);
    });
  };
  var waitConfirmBtn = async () => {
    var _0x17086e = _0x2219;
    var {
      isValid: _0x35d2f5
    } = await chrome.storage[_0x17086e(0x1d9)][_0x17086e(0x1cc)](_0x17086e(0x1dc));
    if (!_0x35d2f5) {
      return console[_0x17086e(0x1d0)](_0x17086e(0x1d4) + 'd!');
    }
    await waitElm(_0x17086e(0x1ca) + _0x17086e(0x1cf) + '-action');
    setTimeout(() => document[_0x17086e(0x1e0) + _0x17086e(0x1dd)](_0x17086e(0x1c9) + _0x17086e(0x1d3) + _0x17086e(0x1d8))[_0x17086e(0x1cd)](), 0x9c4);
  };
  waitConfirmBtn();
  function _0x4cdc() {
    var _0x56ebb6 = ['4xkhkvC', '5uiGxdb', "n button", 'local', '14NKShBq', '53722YpBcEE', 'isValid', 'tor', '21703lYMCKg', '8436BypodN', 'querySelec', '4490216rooaQB', '11719770KUZoNh', '.tls-check', '.tls-optio', '6639546IuFjLM', 'get', 'click', '113643pSkhUj', 'n-dropdown', 'log', '15AVLSgQ', " Displayed", 'out--actio', 'unActivate', '1910577qrgYAE'];
    _0x4cdc = function () {
      return _0x56ebb6;
    };
    return _0x4cdc();
  }