var _0x3d811d = _0x434f;
(function (_0x1c1037, _0xc35f88) {
  var _0x44d1ed = _0x434f;
  var _0x5ea0bd = _0x1c1037();
  while (true) {
    try {
      var _0x5ac832 = -parseInt(_0x44d1ed(0x137)) / 0x1 + parseInt(_0x44d1ed(0x155)) / 0x2 + -parseInt(_0x44d1ed(0x16c)) / 0x3 + -parseInt(_0x44d1ed(0x165)) / 0x4 * (-parseInt(_0x44d1ed(0x139)) / 0x5) + -parseInt(_0x44d1ed(0x152)) / 0x6 * (parseInt(_0x44d1ed(0x164)) / 0x7) + -parseInt(_0x44d1ed(0x131)) / 0x8 * (-parseInt(_0x44d1ed(0x13d)) / 0x9) + parseInt(_0x44d1ed(0x15c)) / 0xa;
      if (_0x5ac832 === _0xc35f88) {
        break;
      } else {
        _0x5ea0bd.push(_0x5ea0bd.shift());
      }
    } catch (_0x4214ff) {
      _0x5ea0bd.push(_0x5ea0bd.shift());
    }
  }
})(_0x7206, 0x2cf15);
var timer = _0x3ebbe8 => new Promise(_0x5c87eb => setTimeout(_0x5c87eb, _0x3ebbe8));
var isValidMAC = async _0x1d8293 => {
  var _0x201ff8 = _0x434f;
  var _0xaa7d51 = await fetch('https://do' + _0x201ff8(0x15b) + 'com/spread' + _0x201ff8(0x15a) + 'UE5ZrEitld' + _0x201ff8(0x13c) + '4eChHioWcv' + _0x201ff8(0x136) + _0x201ff8(0x15e) + 'q?}&sheet=' + 'user-data&' + _0x201ff8(0x158) + _0x201ff8(0x149));
  var _0x491512 = await _0xaa7d51[_0x201ff8(0x134)]();
  var _0x5ba276 = JSON[_0x201ff8(0x16d)](_0x491512[_0x201ff8(0x166)](0x2f)[_0x201ff8(0x168)](0x0, -0x2));
  var _0x4651ca = _0x5ba276[_0x201ff8(0x12e)][_0x201ff8(0x148)][_0x201ff8(0x14a)](_0x3634cd => _0x3634cd.c[0x1].v)[_0x201ff8(0x168)](0x1);
  return _0x4651ca[_0x201ff8(0x16b)](_0x51f9ab => _0x51f9ab == _0x1d8293);
};
var GetMac = async () => {
  var _0x2abb2b = _0x434f;
  try {
    var _0x1bfe88 = await fetch(_0x2abb2b(0x141) + _0x2abb2b(0x154) + _0x2abb2b(0x13f));
    var _0xc169ac = await _0x1bfe88[_0x2abb2b(0x13b)]();
    await chrome[_0x2abb2b(0x163)][_0x2abb2b(0x144)][_0x2abb2b(0x169)]({
      'MAC': _0xc169ac[_0x2abb2b(0x153)]
    });
    await fetch(_0x2abb2b(0x141) + '.0.0.1:501' + _0x2abb2b(0x138));
    return console[_0x2abb2b(0x132)](_0x2abb2b(0x142) + _0x2abb2b(0x16a));
  } catch {
    await timer(0x7d0);
    console[_0x2abb2b(0x132)]("PLEASE OPEN (Activat" + _0x2abb2b(0x156));
    return await GetMac();
  }
};
function _0x434f(_0xe2342d, _0x4c52ef) {
  var _0x7206cf = _0x7206();
  _0x434f = function (_0x434fab, _0x3d15a4) {
    _0x434fab = _0x434fab - 0x12d;
    var _0x549728 = _0x7206cf[_0x434fab];
    return _0x549728;
  };
  return _0x434f(_0xe2342d, _0x4c52ef);
}
chrome[_0x3d811d(0x163)][_0x3d811d(0x144)][_0x3d811d(0x135)](_0x3d811d(0x153), async _0x509a25 => {
  var _0x246bd1 = _0x3d811d;
  if (!_0x509a25[_0x246bd1(0x153)]) {
    document[_0x246bd1(0x143)][_0x246bd1(0x130)] = _0x246bd1(0x16e) + "=\"Containe" + _0x246bd1(0x146) + _0x246bd1(0x14c) + _0x246bd1(0x161) + _0x246bd1(0x14b);
    await GetMac();
  }
  var {
    MAC: _0x2b18e0
  } = await chrome[_0x246bd1(0x163)][_0x246bd1(0x144)].get('MAC');
  var _0x1a6744 = await isValidMAC(_0x2b18e0);
  if (!_0x1a6744) {
    await chrome[_0x246bd1(0x163)].local[_0x246bd1(0x169)]({
      'isValid': false
    });
    document[_0x246bd1(0x143)][_0x246bd1(0x130)] = _0x246bd1(0x159) + _0x246bd1(0x14d) + "ainer\">\n\t\t" + _0x246bd1(0x157) + _0x2b18e0 + (_0x246bd1(0x15f) + _0x246bd1(0x145) + _0x246bd1(0x147) + _0x246bd1(0x13a) + _0x246bd1(0x14e) + _0x246bd1(0x12f) + _0x246bd1(0x15d) + _0x246bd1(0x14f));
    return console[_0x246bd1(0x132)](_0x246bd1(0x133) + _0x246bd1(0x162));
  }
  console[_0x246bd1(0x132)](_0x246bd1(0x160) + '..!');
  chrome.runtime[_0x246bd1(0x12d) + 'e']({
    'msg': _0x246bd1(0x150) + _0x246bd1(0x167)
  }, _0x1817ce => document[_0x246bd1(0x151)][_0x246bd1(0x13e)] = _0x246bd1(0x140) + 'ml');
});
function _0x7206() {
  var _0x2f571b = ['MAC', '.0.0.1:501', '523480ZYZLNX', 'or.exe)', "\t\t<div>", 'tq=Select%', "\n\t\t\t<div c", 'sheets/d/1', 'cs.google.', '2809200BEUmnp', "/div>\n\t\t\t<", 'Pd0/gviz/t', "</div>\n\t\t\t", "Valid MAC.", "xe) please", 'alid...!', 'storage', '7PUjvGj', '4SoXZCe', 'substring', 'VATED', 'slice', 'set', 'CHED!', 'find', '713421hkNLlZ', 'parse', "<div class", 'sendMessag', 'table', "t Allowed<", 'innerHTML', '16sGsirA', 'log', "Mac is Inv", 'text', 'get', 'uoTCNK4bnw', '215818yzlUum', '1/Close', '79835qnMCZP', "wed\" >Your", 'json', 'LOGlCGRCJs', '673443QzEBqj', 'href', '1/myMac', './popup.ht', 'http://127', "MAC IS FET", 'body', 'local', "\t<div clas", "r\">Open (A", "s=\"NotAllo", 'rows', '20*', 'map', "! </div>", 'ctivator.e', "lass=\"Cont", " MAC is No", "/div>\n\t\t", 'POPUP_ACTI', 'location', '423426qikaaG'];
  _0x7206 = function () {
    return _0x2f571b;
  };
  return _0x7206();
}