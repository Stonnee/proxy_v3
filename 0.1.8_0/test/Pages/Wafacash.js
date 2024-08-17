function _0x539a(_0x5aa17f, _0x2a2bfb) {
    var _0x27aa8d = _0x27aa();
    _0x539a = function (_0x539aec, _0x1df178) {
      _0x539aec = _0x539aec - 0x1e7;
      var _0x595a13 = _0x27aa8d[_0x539aec];
      return _0x595a13;
    };
    return _0x539a(_0x5aa17f, _0x2a2bfb);
  }
  (function (_0x151bfa, _0x390b44) {
    var _0x1576fe = _0x539a;
    var _0x2ba093 = _0x151bfa();
    while (true) {
      try {
        var _0x8aca90 = parseInt(_0x1576fe(0x1e8)) / 0x1 + -parseInt(_0x1576fe(0x1eb)) / 0x2 + parseInt(_0x1576fe(0x1f6)) / 0x3 + parseInt(_0x1576fe(0x1f0)) / 0x4 + -parseInt(_0x1576fe(0x1ef)) / 0x5 + -parseInt(_0x1576fe(0x1ee)) / 0x6 + parseInt(_0x1576fe(0x1f3)) / 0x7;
        if (_0x8aca90 === _0x390b44) {
          break;
        } else {
          _0x2ba093.push(_0x2ba093.shift());
        }
      } catch (_0xff6f01) {
        _0x2ba093.push(_0x2ba093.shift());
      }
    }
  })(_0x27aa, 0x39baf);
  var waitElmClick = _0xd39783 => {
    var _0xe07cf3 = setInterval(() => {
      var _0x3f3d35 = _0x539a;
      var _0x8399db = document[_0x3f3d35(0x1ed) + _0x3f3d35(0x1ea)](_0xd39783);
      if (!_0x8399db) {
        return;
      }
      clearInterval(_0xe07cf3);
      _0x8399db[_0x3f3d35(0x1f2)]();
    }, 0xc8);
  };
  var init = async () => {
    var _0x5ece5f = _0x539a;
    var {
      isValid: _0x116055
    } = await chrome[_0x5ece5f(0x1f1)][_0x5ece5f(0x1ec)].get('isValid');
    if (!_0x116055) {
      return console[_0x5ece5f(0x1e7)](_0x5ece5f(0x1f4) + 'd!');
    }
    document[_0x5ece5f(0x1ed) + _0x5ece5f(0x1ea)](_0x5ece5f(0x1e9) + 'yment-meth' + 'od')[_0x5ece5f(0x1f2)]();
    waitElmClick(_0x5ece5f(0x1f5) + 'ubmit:not(' + '.disabled)');
  };
  function _0x27aa() {
    var _0xe600b3 = ['952236bQnPBg', '1618800LDHjtV', '309476ctxWMp', 'storage', 'click', '2754542mXMPrG', 'unActivate', '#confirm_s', '160254AlmSzx', 'log', '387205rngnFz', '.online-pa', 'tor', '385138hoDfaZ', 'local', 'querySelec'];
    _0x27aa = function () {
      return _0xe600b3;
    };
    return _0x27aa();
  }
  init();