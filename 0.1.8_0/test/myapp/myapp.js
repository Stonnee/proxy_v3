var CityObj = {
    dzORN2fr: 'Oran',
    dzANA2fr: 'Annaba'
};

var { NewProxySystem } = await chrome.storage.local.get('NewProxySystem');
var waitElm = async selector => {
    return new Promise(resolve => {
        var intervalId = setInterval(() => {
            if (!document.querySelector(selector)) {
                return;
            }
            clearInterval(intervalId);
            console.log(selector, ' Displayed');
            resolve(true);
        }, 200);
    });
};

var ClickConfirm = async () => {
    await waitElm('.tls-time-unit');
    if (document.querySelector('.-available')) {
        return;
    }
    await waitElm('.tls-popup-action button');
    console.log('im heree 1');
    document.querySelector('.tls-popup-action button').click();
    console.log('Im here 2');
};

var addRightOptions = async () => {
    await waitElm('.tls-navbar--slot:has(.tls-navbar-slot--myapplication)');
    document.querySelector('.TLSContainer').appendChild(document.querySelector('.tls-navbar--slot:has(.tls-navbar-slot--myapplication)'));
};

var rand = array => array[~~(array.length * Math.random())];

var hideCookiesBox = () => {
    var intervalId = setInterval(() => {
        var cookieBox = document.querySelector('.osano-cm-window');
        if (!cookieBox) {
            return;
        }
        clearInterval(intervalId);
        cookieBox.style.display = 'none';
    });
};

var blackList = [
    'You have been over-freshening the web page',
    'Our appointment system is currently experiencing high demand',
    'You have tried to log in too many times. For security reasons',
    'Website is under high demand',
    'Vous avez été temporairement bloqué pour'
];


var axio = async (url) => {
    var { NewProxySystem } = await chrome.storage.local.get('NewProxySystem');

    
    axios.get(url, {
        proxy: {
            protocol: "http",
            host: NewProxySystem.host,
            port: NewProxySystem.port,
            auth: {
                username: NewProxySystem.username,
                password: NewProxySystem.password
            }
        },
        rejectUnauthorized: false
    }).then(response => {
        return response
    })
    .catch(error => {
        return error
    });
}

var GoToAppoLink = async () => {
    var { CurrentAccountCity } = await chrome.storage.local.get('CurrentAccountCity');


    CurrentAccountCity = CurrentAccountCity || 'maRAK2fr';
    if(NewProxySystem)
        var response = await axio('https://visas-fr.tlscontact.com/services/customerservice/api/tls/formgroup?client=fr&issuer=' + CurrentAccountCity);
    else
        var response = await fetch('https://visas-fr.tlscontact.com/services/customerservice/api/tls/formgroup?client=fr&issuer=' + CurrentAccountCity);

    if (!response.ok) {
        window.location.href = 'https://visas-fr.tlscontact.com/';
    }
    var formGroup = await response.json();
    if (formGroup.length == 0) {
        window.location.href = 'https://visas-fr.tlscontact.com/';
    }
    var formGroupId = formGroup[0].fg_id;
    console.log('fg_id : ', formGroupId);
    window.location.href = 'https://visas-fr.tlscontact.com/appointment/dz/' + CurrentAccountCity + '/' + formGroupId;
};

var checkIframe = async () => {

    if(NewProxySystem)
        var response = await axio(document.querySelector('iframe').src);
    else
        var response = await fetch(document.querySelector('iframe').src);

    var htmlText = await response.text();
    var parsedDocument = new DOMParser().parseFromString(htmlText, 'text/html');
    var isHumanCheck = parsedDocument.querySelector('.captcha__human__title').innerText.includes('We want to make sure it is actually');
    if (isHumanCheck) {
        return console.log('Normal');
    }
    console.log('BLOCKED: Proxy + Reload');
    await chrome.runtime.sendMessage({ msg: 'REMOVE_COOKIES' });
    document.querySelector('.ChangeIp').click();
    setTimeout(() => {
        GoToAppoLink();
    }, 2500);
};

var sendTelegramUpdates = async (appointmentsCount, appointmentTime, city, email) => {
    var {
        NM_OPTION_ApposCount,
        NM_OPTION_ApposTime,
        NM_OPTION_City,
        NM_OPTION_Email,
        TME_TOKEN,
        FromId
    } = await chrome.storage.local.get([
        'NM_OPTION_ApposCount',
        'NM_OPTION_ApposTime',
        'NM_OPTION_City',
        'NM_OPTION_Email',
        'TME_TOKEN',
        'FromId'
    ]);
    if (!TME_TOKEN || !FromId) {
        return console.log('You have to link the extension with your Telegram...!');
    }
    NM_OPTION_ApposCount = NM_OPTION_ApposCount === undefined ? true : NM_OPTION_ApposCount;
    NM_OPTION_City = NM_OPTION_City === undefined ? true : NM_OPTION_City;
    NM_OPTION_Email = NM_OPTION_Email === undefined ? true : NM_OPTION_Email;
    NM_OPTION_ApposTime = NM_OPTION_ApposTime === undefined ? true : NM_OPTION_ApposTime;
    var telegramUrl = 'https://api.telegram.org/bot' + TME_TOKEN + '/sendMessage?chat_id=' + FromId + "&text=\uD83D\uDD25[TLS FRANCE] Disponible \uD83D\uDD25 %0A %0A\t";
    if (NM_OPTION_ApposCount) {
        telegramUrl += "\u2705 Available Appointments : " + appointmentsCount + '%0A';
    }
    if (NM_OPTION_ApposTime) {
        telegramUrl += "\u2705 Appointment Time : " + appointmentTime + '%0A';
    }
    if (NM_OPTION_City) {
        telegramUrl += "\u2705 City : " + city + '%0A';
    }
    if (NM_OPTION_Email) {
        telegramUrl += "\u2705 Email : " + email + '%0A%0A';
    }
    telegramUrl += "\u27A1 SENT USING OKHTOBOT (KM) \uD83E\uDD91";
    chrome.runtime.sendMessage({ msg: 'FETCH_URL', URL: telegramUrl });
};

var sendTelegramSS = async () => await chrome.runtime.sendMessage({ msg: 'SEND_SS' });

var init = async () => {
    var {
        isValid,
        BbuttonApp,
        Btimer,
        CONFIG,
        TableErrorDelay,
        Alarm
    } = await chrome.storage.local.get(['BbuttonApp', 'Btimer', 'isValid', 'CONFIG', 'TableErrorDelay', 'Alarm']);
    if (!isValid) {
        return console.log('unActivated!');
    }
    if (!CONFIG.TABLE_RELOAD) {
        return console.log('NOTF');
    }
    document.body.setAttribute('clearMode', 'true');
    hideCookiesBox();
    TableErrorDelay = Boolean(TableErrorDelay) ? +TableErrorDelay : 20;
    Alarm = Alarm || '';
    if (blackList.find(message => document.body.textContent.includes(message))) {
        document.querySelector('.ChangeIp').click();
        setTimeout(() => window.location.reload(), 2500);
        console.log('Proxy + Reload');
    } else {
        if (document.title.includes('tlscontact.com')) {
            checkIframe();
        } else {
            if (!document.querySelector('#Bbutton')) {
                console.log('INJECTED myapp');
                ClickConfirm();
                console.log('Im here 3');
                var container = document.createElement('div');
                container.innerHTML = "<div class='AppContainer'><button id=\"Bbutton\" class='START'></button></div>";
                document.body.appendChild(container);
                console.log('Im here 4');
                var appoContainer = document.createElement('div');
                console.log('Im here 5');
                appoContainer.classList.add('AppoContainer');
                appoContainer.innerHTML = "<input value=\"-\" type='button' id=\"TMins\" class='MinsPlus'></input><div id=\"TCurrent\" class='TCurrent'>5</div><input value=\"+\" type='button' id=\"TPlus\" class='MinsPlus'></input>";
                console.log('PICKER : ', document.querySelector('.tls-appointment-time-picker'));
                document.body.insertAdjacentElement('afterBegin', appoContainer);
                console.log('Im here 66');
                var TMins = document.querySelector('#TMins');
                var TCurrent = document.querySelector('#TCurrent');
                var TPlus = document.querySelector('#TPlus');
                var TLSContainer = document.createElement('div');
                TLSContainer.innerHTML = "<div class='TLSContainer'></div>";
                document.body.appendChild(TLSContainer);
                addRightOptions();
                var getElement = (elements, position) => {
                    if (position == 'First') {
                        return elements[0];
                    }
                    if (position == 'Last') {
                        return elements.at(-1);
                    }
                    if (position == 'Middle') {
                        return elements[Math.floor(elements.length / 2)];
                    }
                    if (position == 'Random') {
                        return rand(elements);
                    }
                };
                var Bbutton = document.querySelector('#Bbutton');
                var timeoutId;
                var refreshTable = async () => {
                    var host = new URL(window.location.href).host;
                    var client = host.split('-')[1].split('.')[0];
                    var pathParts = document.location.href.split('/dz/')[1].split('/');
                    if(NewProxySystem)
                        var formsResponse = await axio('https://' + host + '/services/customerservice/api/tls/forms/list/' + client + '/' + pathParts[0] + '?fg_id=' + pathParts[1]);
                    else
                        var formsResponse = await fetch('https://' + host + '/services/customerservice/api/tls/forms/list/' + client + '/' + pathParts[0] + '?fg_id=' + pathParts[1]);
                    
                    var forms = formsResponse.ok ? await formsResponse.json() : [{ fi_appointment_type: 'Grand Public PRIMO' }];
                    console.log('AccountInfo : ', forms);

                    if(NewProxySystem)
                        var appointmentResponse = await axio('https://' + host + '/services/customerservice/api/tls/appointment/dz/' + pathParts[0] + '/table?client=' + client + '&formGroupId=' + pathParts[1] + '&appointmentType=' + forms[0].fi_appointment_type + '&appointmentStage=appointment');
                    else
                        var appointmentResponse = await fetch('https://' + host + '/services/customerservice/api/tls/appointment/dz/' + pathParts[0] + '/table?client=' + client + '&formGroupId=' + pathParts[1] + '&appointmentType=' + forms[0].fi_appointment_type + '&appointmentStage=appointment');

                    var appointments = await appointmentResponse.json();
                    if (appointments.status) {
                        return false;
                    }
                    var availableAppointments = Object.keys(appointments).slice(0, 14).map(key => Object.values(appointments[key]).filter(value => value != 0).length).reduce((acc, count) => acc + count);
                    console.log('appoList : ', appointments);
                    console.log('DispoAppos : ', availableAppointments);
                    return availableAppointments > 0;
                };
                var checkAppointments = async () => {
                    var {
                        BbuttonApp,
                        BulkMode,
                        Btimer
                    } = await chrome.storage.local.get(['BbuttonApp', 'BulkMode', 'Btimer']);
                    if (BbuttonApp == 'Start') {
                        return;
                    }
                    Btimer = Btimer || 5;
                    BulkMode = BulkMode || 'BulkDisable';
                    try {
                        var isAvailable = await refreshTable();
                        console.log('isDispoAvailable : ', isAvailable);
                        if (isAvailable) {
                            if (BulkMode == 'Checker') {
                                await chrome.runtime.sendMessage({ msg: 'SEND_SIGNAL' });
                            }
                            console.log('Appointment Table Reloaded!');
                            Notiflix.Notify.info('Dispo Appointments!');
                            location.reload();
                        } else {
                            console.log('NO DISCONNECT YET: KEEP RELOADING...');
                            Notiflix.Notify.success('Appointment Table Reloaded');
                            setTimeout(() => checkAppointments(), Btimer * 1000);
                        }
                    } catch {
                        console.log('IDK ERROR');
                        document.querySelector('.ChangeIp').click();
                        setTimeout(() => checkAppointments(), Btimer * 1000);
                    }
                };
                var waitForTextChange = (initialText, selector) => {
                    return new Promise(resolve => {
                        var intervalId = setInterval(() => {
                            if (initialText == document.querySelector(selector).textContent) {
                                return;
                            }
                            clearInterval(intervalId);
                            resolve(true);
                        }, 100);
                    });
                };
                var delay = ms => new Promise(resolve => setTimeout(resolve, ms));
                var bookAppointment = async isLastPage => {
                    var {
                        BbuttonApp,
                        BookByPosition,
                        Alarm,
                        Btimer,
                        AppointmentTable,
                        FullPage,
                        ProxyRotation,
                        DISPO_PROXY_CHANGE,
                        BulkMode,
                        TelegramOption,
                        PageScreenshot
                    } = await chrome.storage.local.get(['BbuttonApp', 'BookByPosition', 'Alarm', 'Btimer', 'AppointmentTable', 'FullPage', 'ProxyRotation', 'DISPO_PROXY_CHANGE', 'BulkMode', 'TelegramOption', 'PageScreenshot']);
                    BookByPosition = BookByPosition || 'First';
                    AppointmentTable = AppointmentTable || false;
                    FullPage = FullPage || false;
                    ProxyRotation = ProxyRotation || false;
                    DISPO_PROXY_CHANGE = DISPO_PROXY_CHANGE || false;
                    BulkMode = BulkMode || 'BulkDisable';
                    TelegramOption = TelegramOption || false;
                    PageScreenshot = PageScreenshot || false;
                    console.log('BookByPosition : ', BookByPosition);
                    console.log('AppointmentTable : ', AppointmentTable);
                    console.log('FullPage : ', FullPage);
                    console.log('ProxyRotation : ', ProxyRotation);
                    var timer = Btimer || 5;
                    if (BbuttonApp == 'Start') {
                        return;
                    }
                    var availableElements = document.getElementsByClassName('-available');
                    if (availableElements.length > 0) {
                        if (BulkMode == 'Checker') {
                            await chrome.runtime.sendMessage({ msg: 'SEND_SIGNAL' });
                        }
                        var targetElement = getElement(Array.from(availableElements), BookByPosition);
                        if (!targetElement) {
                            return console.log('date wrong!');
                        }
                        console.log('targetElement : ', targetElement);
                        if (DISPO_PROXY_CHANGE) {
                            document.querySelector('.ChangeIp').click();
                            await delay(2000);
                        }
                        if (PageScreenshot) {
                            await sendTelegramSS();
                        }
                        targetElement.click();
                        await waitElm("[data-tls-value=\"confirm\"]");
                        document.querySelector("[data-tls-value=\"confirm\"]").click();
                        try {
                            if(NewProxySystem)
                                var accountResponse = await axio('https://visas-fr.tlscontact.com/api/account');
                            else
                                var accountResponse = await axio('https://visas-fr.tlscontact.com/api/account');
                            var accountResponse = await axio('https://visas-fr.tlscontact.com/api/account');
                            var accountInfo = await accountResponse.json();
                            var email = accountInfo.email;
                        } catch {
                            var email = 'None';
                        }
                        var cityCode = document.location.href.split('/dz/')[1].split('/')[0];
                        var telegramMessage = "https://api.telegram.org/bot" + TME_TOKEN + "/sendMessage?chat_id=" + FromId + "&text=\uD83D\uDD25 [TLS FRANCE] Disponible \uD83D\uDD25 %0A %0A\t\u2705 Available Appointments : " + availableElements.length + "%0A\u2705 Appointment Time : " + targetElement.innerText + " %0A\u2705 City : " + CityObj[cityCode] + "%0A\u2705 Email : " + email;
                        chrome.runtime.sendMessage({ msg: 'FETCH_URL', URL: telegramMessage });
                        if (TelegramOption) {
                            sendTelegramUpdates(availableElements.length, targetElement.innerText, CityObj[cityCode], email);
                        }
                        if (!Alarm) {
                            return console.log('No Alarm');
                        }
                        open('https://soundcloud.com/sepehr-dark/soundhelix-song-1');
                    } else {
                        if (!isLastPage) {
                            var headerTitle = document.querySelector('.tls-time-group--header-title').textContent;
                            document.querySelector('.tls-time-picker button.tls-time-picker--arrow').click();
                            await waitForTextChange(headerTitle, '.tls-time-group--header-title');
                            bookAppointment(isLastPage = true);
                        } else {
                            console.log('NO DISPOS: RELOADING THE TABLE ONLY...');
                            await delay(timer * 1000);
                            if (ProxyRotation) {
                                document.querySelector('.ChangeIp').click();
                                await delay(2000);
                            }
                            if (FullPage) {
                                window.location.href = window.location.href;
                            } else {
                                if (AppointmentTable) {
                                    checkAppointments();
                                } else {
                                    console.log('No Mode Activated...!');
                                }
                            }
                        }
                    }
                };
                var startButtonHandler = () => {
                    Bbutton.innerHTML = 'Start';
                    chrome.storage.local.set({ BbuttonApp: 'Start' });
                    console.log('[CURRENT STATUS APP : Start]');
                    chrome.storage.local.set({ Bbutton: 'Start' });
                    console.log('switch2Stop [Bbutton | CURRENT STATUS : Start]');
                    autosubmit = true;
                };
                var stopButtonHandler = () => {
                    chrome.storage.local.set({ BbuttonApp: 'Stop' });
                    console.log('switch2Stop [BbuttonApp | CURRENT STATUS APP : Stop]');
                    Bbutton.innerHTML = 'Stop';
                    bookAppointment(isLastPage = true);
                };
                Bbutton.onclick = () => {
                    clearTimeout(timeoutId);
                    chrome.storage.local.get('BbuttonApp', storedData => {
                        if (storedData.BbuttonApp == 'Stop') {
                            startButtonHandler();
                        } else {
                            stopButtonHandler();
                        }
                    });
                };
                TMins.onclick = () => {
                    var timerValue = parseInt(TCurrent.innerHTML.replace('s', '')) - 1;
                    timerValue = timerValue >= 1 ? timerValue : 0.01;
                    chrome.storage.local.set({ Btimer: timerValue });
                    TCurrent.innerHTML = timerValue + 's';
                };
                TPlus.onclick = () => {
                    var timerValue = parseInt(TCurrent.innerHTML.replace('s', '')) + 1;
                    timerValue = timerValue == 1.01 ? 1 : timerValue;
                    chrome.storage.local.set({ Btimer: timerValue });
                    TCurrent.innerHTML = timerValue + 's';
                };
                await waitElm('.tls-appointment');
                await waitElm('#tls-navbar');
                document.querySelector('.tls-appointment').appendChild(document.querySelector('#tls-navbar'));
                Btimer = Btimer || 5;
                TCurrent.innerHTML = Btimer + 's';
                Bbutton.innerHTML = BbuttonApp || 'Start';
                console.log('Error Refresh Delay : ', TableErrorDelay);
                var tableLoaded = false;
                setTimeout(() => {
                    if (tableLoaded) {
                        return console.log('Table[Yes]');
                    }
                    console.log('No Table = Reload');
                    document.querySelector('.ChangeIp').click();
                    setTimeout(() => {
                        window.location.href = window.location.href;
                    }, 2500);
                }, TableErrorDelay * 1000);
                await waitElm('.tls-time-picker--time-group');
                tableLoaded = true;
                if (BbuttonApp == 'Stop') {
                    stopButtonHandler();
                }
            } else {
                alert('CONTACT DEV PLEASE...!');
            }
        }
    }
};
init();
