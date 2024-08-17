var init = () => {
  chrome.storage.local.get(["isValid", "CONFIG"], async _0x1f3d8a => {
    if (!_0x1f3d8a.isValid) {
      return console.log("UnActivated!");
    }
    var _0xe86513 = () => {
      document.body.setAttribute("clearMode", "true");
    };
    AMContent = document.createElement("div");
    AMContent.innerHTML = "\n\t\t\t<div class='AContainer' id='AContainer'>\n\n\n\t\t\t\t<div class=\"ACHome\" id='ACHome'>\n\n\t\t\t\t\t<div class='ACRow JS_Center MoveSection' id='MoveSection'>\n\t\t\t\t\t\t<button class='BAdd' id=\"BAdd\">Add</button>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class='TAccounts'>\n\n\t\t\t\t\t\t<div class='ACRow THead'>\n\t\t\t\t\t\t\t<div class='Col flex4'>Nickname</div>\n\t\t\t\t\t\t\t<div class='Col flex4' id=\"CopyAllEmails\" >Email</div>\n\t\t\t\t\t\t\t<div class='Col flex4'>Password</div>\n\t\t\t\t\t\t\t<div class='Col flex3'>Options</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class='Tbody' id='Tbody' >\n\t\t\t\t\t\t\t<div class='TRow NoRecords'>\n\t\t\t\t\t\t\t\t<div class=\"Col flex1\"><div class=\"\">No Records!</div></div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t" + (_0x1f3d8a.CONFIG.TABLE_RELOAD ? "<div class='Settings'>\n\t\t\t\t\t\t<div class=\"SR1\" >Login attempts  </div>\n\t\t\t\t\t\t<input class='Bltimes' id=\"Bltimes\" value=\"0\">\n\t\t\t\t\t\t<button id='ApplyAttemp' class='Bbutton applyAttemp'>Apply</button>\n\t\t\t\t\t</div>" : '') + "\n\n\t\t\t\t\t" + (_0x1f3d8a.CONFIG.BOOK_BY_DATE && _0x1f3d8a.CONFIG.TABLE_RELOAD ? "<div class='Settings'>\n\t\t\t\t\t\t\t<div class='SR1' >Book By DATE</div>\n\t\t\t\t\t\t\t<input id='FilterDate' class='switchDate Bltimes' type='checkbox'></input>\n\t\t\t\t\t\t\t<button id='SetDate' class='Bbutton applyAttemp'>Set Date</button>\n\t\t\t\t\t\t</div>" : '') + "\n\t\t\t\t\t\n\n\t\t\t\t\t" + (_0x1f3d8a.CONFIG.TABLE_RELOAD ? "<div class='Settings'>\n\t\t\t\t\t\t<div class=\"SR1\" >Book By POS</div>\n\t\t\t\t\t\t<input id=\"FilterPos\" class='switchDate Bltimes' type='checkbox'></input>\n\t\t\t\t\t\t<button id='SetPos' class='Bbutton applyAttemp'>Set Pos</button>\n\t\t\t\t\t</div>" : '') + "\n\n\t\t\t\t\t" + (_0x1f3d8a.CONFIG.BOOK_BY_HOUR && _0x1f3d8a.CONFIG.TABLE_RELOAD ? "<div class='Settings'>\n\t\t\t\t\t\t\t<div class=\"SR1\" >Book By HOUR</div>\n\t\t\t\t\t\t\t<input id=\"FilterHour\" class='switchDate Bltimes' type='checkbox'></input>\n\t\t\t\t\t\t\t<button id='SetHour' class='Bbutton applyAttemp'>Set Hour</button>\n\t\t\t\t\t\t</div>" : '') + "\n\n\t\t\t\t\t\n\n\t\t\t\t\t<div class='ACRow JS_Center'>\n\t\t\t\t\t\t<button class='Bbutton ImEx' id=\"Import\">Import</button>\n\t\t\t\t\t\t<button class='Bbutton ImEx' id=\"Export\">Export</button>\n\t\t\t\t\t\t<button class='Bbutton BStart BStartStop' id=\"Bbutton\">start</button>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"ACNew Hidden\" id='ACNew'>\n\n\n\t\t\t\t\t<div class='ACRow'>\n\t\t\t\t\t\t<div class='flex1' >Nickname : </div>\n\t\t\t\t\t\t<div class='flex2' ><input class='loginWidth' id=\"BNick\"></div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class='ACRow'>\n\t\t\t\t\t\t<div class='flex1' >Email : </div>\n\t\t\t\t\t\t<div class='flex2' ><input class='loginWidth' id=\"Bmail\"></div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class='ACRow'>\n\t\t\t\t\t\t<div class='flex1' >Password : </div>\n\t\t\t\t\t\t<div class='flex2' ><input class='loginWidth' id=\"Bpass\" ></div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class='ACRow'>\n\t\t\t\t\t\t<button class='BStart Bbutton'  id='AddAcc'>Add Account</button>\n\t\t\t\t\t\t<button class='BAddAcc Bbutton' id='BBack'>Back</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\t\t\t\t<div class=\"ACNew Hidden\" id='DateRange'>\n\n\t\t\t\t\t<div class='ACRow'>\n\t\t\t\t\t\t<div class='flex1' >Min Date : </div>\n\t\t\t\t\t\t<div class='flex2 center' >\n\t\t\t\t\t\t\t<input class='' id=\"minDate\" type='date'>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class='flex2 center' >\n\t\t\t\t\t\t\t<input class='' id=\"minTime\" type='time'>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class='ACRow'>\n\t\t\t\t\t\t<div class='flex1' >Max Date : </div>\n\t\t\t\t\t\t<div class='flex2 center' >\n\t\t\t\t\t\t\t<input class='' id=\"maxDate\" type='date'>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class='flex2 center' >\n\t\t\t\t\t\t\t<input class='' id=\"maxTime\" type='time'>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class='ACRow'>\n\t\t\t\t\t\t<button class='BStart Bbutton'  id='saveDates'>Save Dates</button>\n\t\t\t\t\t\t<button class='BAddAcc Bbutton' id='DBack'>Back</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\t\t\t\t<div class=\"ACNew Hidden\" id='BookByPosition'>\n\n\t\t\t\t\t<div class='ACRow JS_Center'>\n\t\t\t\t\t\t<select id=\"PositionsOpts\" class='PositionsOpts'>\n\t\t\t\t\t\t\t<option value=\"First\" selected=\"selected\">First</option>\n\t\t\t\t\t\t\t<option value=\"Last\" >Last</option>\n\t\t\t\t\t\t\t<option value=\"Middle\" >Middle</option>\n\t\t\t\t\t\t\t<option value=\"Random\" >Random</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class='ACRow'>\n\t\t\t\t\t\t<button class='BStart Bbutton' id='savePosition'>Save Position</button>\n\t\t\t\t\t\t<button class='BAddAcc Bbutton' id='PBack'>Back</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"ACNew Hidden\" id='BookByHour'>\n\n\t\t\t\t\t<div class='HourRow'>\n\t\t\t\t\t\t<button data-time='08:30' >08:30</button>\n\t\t\t\t\t\t<button data-time='09:00' >09:00</button>\n\t\t\t\t\t\t<button data-time='09:30' >09:30</button>\n\t\t\t\t\t\t<button data-time='10:00' >10:00</button>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class='HourRow'>\n\t\t\t\t\t\t<button data-time='10:30' >10:30</button>\n\t\t\t\t\t\t<button data-time='11:00' >11:00</button>\n\t\t\t\t\t\t<button data-time='11:30' >11:30</button>\n\t\t\t\t\t\t<button data-time='12:00' >12:00</button>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class='HourRow'>\n\t\t\t\t\t\t<button data-time='12:30' >12:30</button>\n\t\t\t\t\t\t<button data-time='13:00' >13:00</button>\n\t\t\t\t\t\t<button data-time='13:30' >13:30</button>\n\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t<div class='ACRow'>\n\t\t\t\t\t\t<button class='BAddAcc Bbutton' id='HBack'>Back</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\n\t\t\t\t<div class=\"ACNew Hidden\" id='ACEdit'>\n\n\t\t\t\t\t\n\n\t\t\t\t\t<div class='ACRow'>\n\t\t\t\t\t\t<div class='flex1' >Nickname : </div>\n\t\t\t\t\t\t<div class='flex2' ><input class='loginWidth' id=\"BNick_Edit\"></div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class='ACRow'>\n\t\t\t\t\t\t<div class='flex1' >Email : </div>\n\t\t\t\t\t\t<div class='flex2' ><input class='loginWidth' id=\"Bmail_Edit\"></div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class='ACRow'>\n\t\t\t\t\t\t<div class='flex1' >Password : </div>\n\t\t\t\t\t\t<div class='flex2' ><input class='loginWidth' id=\"Bpass_Edit\" ></div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class='ACRow'>\n\t\t\t\t\t\t<button class='BStart Bbutton'  id='EditAcc'>Edit Account</button>\n\t\t\t\t\t\t<button class='BAddAcc Bbutton' id='EBack'>Back</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\t\t\t</div>\n\n\n\t\t";
    document.body.appendChild(AMContent);
    var _0x9d89d4;
    var _0x1929f6 = document.querySelector('#Bltimes');
    var _0x5e7402 = document.querySelector("#Bbutton");
    var _0x255a61 = document.querySelector('#BAdd');
    var _0x405273 = document.querySelector('#AddAcc');
    var _0x4656e6 = document.querySelector('#Bmail');
    var _0x57962f = document.querySelector("#BNick");
    var _0x44aa6d = document.querySelector("#Bpass");
    var _0x2c5934 = document.querySelector("#Tbody");
    var _0x362b56 = document.querySelector("#BBack");
    var _0x1522f2 = document.querySelector("#EBack");
    var _0x2fd45e = document.querySelector("#PBack");
    var _0x4c5b2f = document.querySelector("#HBack");
    var _0x37d56b = document.querySelector('#DBack');
    var _0x56c008 = document.querySelector('#ACHome');
    var _0x4d4199 = document.querySelector("#ACNew");
    var _0x14fa05 = document.querySelector('#saveDates');
    var _0x492db8 = document.querySelector("#savePosition");
    var _0x3374fc = document.querySelector("#CopyAllEmails");
    var _0x21f2b9 = document.querySelector("#DateRange");
    var _0x43a7da = document.querySelector("#BookByPosition");
    var _0x10a752 = document.querySelector("#BookByHour");
    var _0x162004 = document.querySelector("#FilterDate");
    var _0x44e8a9 = document.querySelector("#FilterPos");
    var _0x54edea = document.querySelector("#FilterHour");
    var _0x545537 = document.querySelector('#ACEdit');
    var _0x1cec8c = document.querySelector("#AContainer");
    var _0x24e604 = document.querySelector("#MoveSection");
    var _0x209d8c = document.querySelector("#ApplyAttemp");
    var _0x2445e1 = document.querySelector("#EditAcc");
    var _0x3cc49c = document.querySelector("#Bmail_Edit");
    var _0x38df5b = document.querySelector("#BNick_Edit");
    var _0x533375 = document.querySelector("#Bpass_Edit");
    var _0x36f6ef = document.querySelector('.navbar') || {
      'clientHeight': 0x0
    };
    var _0x382240;
    var _0x18f8cc = [0x0, 0x0];
    var _0x16619d = false;
    _0x24e604.addEventListener("mousedown", function (_0x4d5cc1) {
      _0x16619d = true;
      _0x18f8cc = [_0x1cec8c.offsetLeft - _0x4d5cc1.clientX, _0x1cec8c.offsetTop - _0x4d5cc1.clientY];
    }, true);
    document.addEventListener('mouseup', function () {
      _0x16619d = false;
    }, true);
    document.addEventListener("mousemove", function (_0x3afbde) {
      _0x3afbde.preventDefault();
      if (_0x16619d) {
        _0x382240 = {
          'x': _0x3afbde.clientX,
          'y': _0x3afbde.clientY
        };
        _0x1cec8c.style.left = _0x382240.x + _0x18f8cc[0x0] < 0x0 ? "0px" : _0x382240.x + _0x18f8cc[0x0] + _0x1cec8c.offsetWidth > window.innerWidth ? window.innerWidth - _0x1cec8c.offsetWidth + 'px' : _0x382240.x + _0x18f8cc[0x0] + 'px';
        _0x1cec8c.style.top = _0x382240.y + _0x18f8cc[0x1] - _0x36f6ef.clientHeight < 0x0 ? _0x36f6ef.clientHeight + 'px' : _0x382240.y + _0x18f8cc[0x1] + _0x1cec8c.offsetHeight > window.innerHeight ? window.innerHeight - _0x1cec8c.offsetHeight + 'px' : _0x382240.y + _0x18f8cc[0x1] + 'px';
      }
    }, true);
    var _0x450e16 = _0x4a9bfa => {
      _0x2445e1.setAttribute("data-editId", _0x4a9bfa.ID);
      _0x38df5b.value = _0x4a9bfa.NICKNAME;
      _0x3cc49c.value = _0x4a9bfa.EMAIL;
      _0x533375.value = _0x4a9bfa.PASSWORD;
      _0x545537.classList.remove('Hidden');
      _0x56c008.classList.add("Hidden");
      _0x4d4199.classList.add('Hidden');
      _0x21f2b9.classList.add('Hidden');
      _0x43a7da.classList.add("Hidden");
      _0x10a752.classList.add('Hidden');
    };
    var _0x4b939b = async _0x2a923e => {
      var {
        Accounts: _0x4c6f0e
      } = await chrome.storage.local.get(["Accounts"]);
      var _0x4cd368 = _0x4c6f0e.filter(_0x5d9cd1 => _0x5d9cd1.ID != _0x2a923e);
      await chrome.storage.local.set({
        'Accounts': _0x4cd368
      });
      _0x45738a(_0x4cd368);
    };
    var _0x106c2e = _0xb87538 => {
      chrome.storage.local.get("Accounts", _0x37beb4 => {
        var _0x191c75 = _0x37beb4.Accounts.find(_0x7dd874 => _0x7dd874.ID == _0xb87538);
        _0x450e16(_0x191c75);
        console.log("Acc2Modify : ", _0x191c75);
      });
    };
    var _0x1c7ef5 = (_0x4521c6, _0x41a21d) => {
      chrome.storage.local.get("Accounts", _0x2689f9 => {
        var _0x104a2c = _0x2689f9.Accounts.map(_0x3b0e96 => {
          if (_0x3b0e96.ID != _0x4521c6) {
            return _0x3b0e96;
          }
          _0x3b0e96.ATTEMP = _0x41a21d;
          return _0x3b0e96;
        });
        chrome.storage.local.set({
          'Accounts': _0x104a2c
        });
        _0x45738a(_0x104a2c);
        console.log("ATTEMP MODIFIED TO ", _0x41a21d);
      });
    };
    var _0x1010d3 = async _0x307f64 => {
      var _0x4a1a05 = await new Promise((_0x22b803, _0x2afb75) => {
        chrome.storage.local.get('Accounts', _0x141e0d => {
          var _0x49e930 = _0x141e0d.Accounts.find(_0x2f0557 => _0x2f0557.ID == _0x307f64).ATTEMP;
          _0x22b803(_0x49e930);
        });
      });
      console.log("ERROR: COULD NOT CHANGE THE ATTEMP NUMBER, WE KEEP IT ON : ", _0x4a1a05);
      return _0x4a1a05;
    };
    var _0x30133f = _0xb789b9 => {
      if (_0xb789b9.value == 0x0) {
        _0xb789b9.classList.add("attempRed");
        _0xb789b9.classList.remove("attempGreen");
      } else {
        _0xb789b9.classList.remove("attempRed");
        _0xb789b9.classList.add("attempGreen");
      }
    };
    var _0x2a48a0 = _0x53a120 => {
      var _0x628d3b = [_0x53a120.querySelector(".EmailField"), _0x53a120.querySelector(".PassField"), _0x53a120.querySelector(".NicknameField")];
      _0x628d3b.forEach(_0xd83b18 => {
        _0xd83b18.onclick = () => {
          document.querySelector("#username").value = _0x53a120.querySelector(".EmailField").textContent;
          document.querySelector("#password").value = _0x53a120.querySelector(".PassField").textContent;
        };
      });
    };
    var _0x158bf8 = async () => {
      Array.from(document.querySelectorAll("[data-id]")).forEach(_0x3fcf52 => {
        _0x2a48a0(_0x3fcf52);
        _0x30133f(_0x3fcf52.querySelector(".attemp"));
        _0x3fcf52.querySelector('.Rremove').onclick = () => {
          _0x4b939b(_0x3fcf52.getAttribute("data-id"));
        };
        _0x3fcf52.querySelector(".REdit").onclick = () => {
          _0x106c2e(_0x3fcf52.getAttribute("data-id"));
        };
        _0x3fcf52.querySelector(".attemp").onchange = async _0x4f5b2f => {
          if (!(_0x4f5b2f.target.value / 0x1 >= 0x0)) {
            console.log("ERROR: ATTEMP Number Invalid : ", _0x4f5b2f.target.value);
            var _0x780d87 = await _0x1010d3(_0x3fcf52.getAttribute('data-id'));
            _0x4f5b2f.target.value = _0x780d87;
            return false;
          }
          _0x1c7ef5(_0x3fcf52.getAttribute("data-id"), _0x4f5b2f.target.value / 0x1);
          _0x30133f(_0x4f5b2f.target);
        };
      });
    };
    var _0x45738a = _0x197280 => {
      if (_0x197280.length == 0x0) {
        return _0x11c341();
      }
      var _0x349ed3 = _0x197280.map(_0x2ce70d => {
        return "\n\t\t\t\t\t<div class='TRow' data-id='" + _0x2ce70d.ID + "'>\n\n\t\t\t\t\t\t<div class='Col flex4 clickable NicknameField'>" + _0x2ce70d.NICKNAME + "</div>\n\t\t\t\t\t\t<div class='Col flex4 clickable EmailField'>" + _0x2ce70d.EMAIL + "</div>\n\t\t\t\t\t\t<div class='Col flex4 clickable PassField'>" + _0x2ce70d.PASSWORD + "</div>\n\t\t\t\t\t\t<div class='Col flex3 gap6'>\n\t\t\t\t\t\t\t<button class='OptionBtn REdit'>✎</button>  \n\t\t\t\t\t\t\t<button class='OptionBtn Rremove'>X</button>  \n\t\t\t\t\t\t\t<input type=\"text\" value=\"" + _0x2ce70d.ATTEMP + "\" class='attemp'> \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
      }).join('');
      _0x2c5934.innerHTML = _0x349ed3;
      _0x255a61.innerHTML = "Add (" + _0x197280.length + ')';
      _0x158bf8();
    };
    var _0x11c341 = () => {
      _0x2c5934.innerHTML = "\n\t\t\t\t<div class='TRow NoRecords'>\n\t\t\t\t\t<div class=\"Col flex1\"><div>No Records!</div></div>\n\t\t\t\t</div>\n\t\t\t";
      _0x255a61.innerHTML = "Add (0)";
    };
    var _0x9ce86f = () => {
      _0x56c008.classList.remove("Hidden");
      _0x4d4199.classList.add("Hidden");
      _0x545537.classList.add("Hidden");
      _0x21f2b9.classList.add("Hidden");
      _0x43a7da.classList.add("Hidden");
      _0x10a752.classList.add("Hidden");
    };
    var _0x3e6913 = async () => {
      var {
        DateRanges: _0x31b57d
      } = await chrome.storage.local.get('DateRanges');
      if (!_0x31b57d) {
        return;
      }
      document.querySelector("#minDate").value = _0x31b57d.minDate;
      document.querySelector("#minTime").value = _0x31b57d.minTime;
      document.querySelector("#maxDate").value = _0x31b57d.maxDate;
      document.querySelector("#maxTime").value = _0x31b57d.maxTime;
    };
    var _0x2b0592 = async () => {
      var {
        BookByPosition: _0x307b4f
      } = await chrome.storage.local.get("BookByPosition");
      if (!_0x307b4f) {
        return;
      }
      document.querySelector("#PositionsOpts").value = _0x307b4f;
    };
    var _0x48467c = async () => {
      var {
        TimeRange: _0xcd9275
      } = await chrome.storage.local.get('TimeRange');
      var _0x37b5be = _0xcd9275 ? Object.keys(_0xcd9275).filter(_0x2a82ac => _0xcd9275[_0x2a82ac]) : [];
      if (_0x37b5be.length == 0x0) {
        return;
      }
      _0x37b5be.forEach(_0x53299f => document.querySelector("[data-time=\"" + _0x53299f + "\"]").classList.add("Active"));
    };
    var _0x263635 = _0x4c31a3 => {
      let _0x40e920 = new FileReader();
      _0x40e920.onload = async _0x17a00b => {
        try {
          var _0x1fbcd6 = JSON.parse(_0x17a00b.target.result);
          await chrome.storage.local.set({
            'Accounts': _0x1fbcd6
          });
          _0x45738a(_0x1fbcd6);
        } catch {
          alert("invalid Json File!");
        }
      };
      _0x40e920.readAsText(_0x4c31a3);
    };
    var _0x2dfa0c = () => {
      var _0x2dbecb = document.createElement('input');
      _0x2dbecb.type = 'file';
      _0x2dbecb.accept = '.json';
      _0x2dbecb.onchange = _0x3aa2d9 => {
        var _0x1e53ec = _0x3aa2d9.target.files[0x0];
        _0x263635(_0x1e53ec);
      };
      _0x2dbecb.click();
    };
    var _0x5b70f4 = async () => {
      var {
        Accounts: _0x5bc003
      } = await chrome.storage.local.get('Accounts');
      var _0x3b5337 = JSON.stringify(_0x5bc003);
      var _0x315c8b = document.createElement('a');
      var _0x143f88 = new Blob([_0x3b5337], {
        'type': "text/plain"
      });
      _0x315c8b.href = URL.createObjectURL(_0x143f88);
      _0x315c8b.download = "Accounts_DATA_TLS.json";
      _0x315c8b.click();
    };
    chrome.storage.local.get(['Accounts', "FilterDate", "FilterPos", 'FilterHour', "CONFIG"], _0x311fda => {
      var _0x46bb11 = _0x311fda.Accounts || [];
      console.log("[INIT] currentAccs : ", _0x46bb11);
      if (_0x46bb11.length == 0x0) {
        _0x11c341();
      } else {
        _0x45738a(_0x46bb11);
      }
      if (_0x311fda.CONFIG.BOOK_BY_DATE && _0x311fda.CONFIG.TABLE_RELOAD) {
        _0x162004.checked = _0x311fda.FilterDate || false;
      }
      if (_0x311fda.CONFIG.BOOK_BY_HOUR && _0x311fda.CONFIG.TABLE_RELOAD) {
        _0x54edea.checked = _0x311fda.FilterHour || false;
      }
      if (_0x311fda.CONFIG.TABLE_RELOAD) {
        _0x44e8a9.checked = _0x311fda.FilterPos || false;
      }
    });
    Import.onclick = () => _0x2dfa0c();
    Export.onclick = () => _0x5b70f4();
    _0x3e6913();
    _0x2b0592();
    _0x48467c();
    _0x362b56.onclick = () => _0x9ce86f();
    _0x1522f2.onclick = () => _0x9ce86f();
    _0x2fd45e.onclick = () => _0x9ce86f();
    _0x37d56b.onclick = () => _0x9ce86f();
    _0x4c5b2f.onclick = () => _0x9ce86f();
    var _0x56edf4 = [_0x162004, _0x44e8a9, _0x54edea];
    var _0x29db02 = _0x2822c6 => {
      _0x56edf4.forEach(_0x24a812 => {
        if (_0x24a812.id == _0x2822c6.id) {
          return;
        }
        _0x24a812.checked = false;
      });
      if (_0x1f3d8a.CONFIG.BOOK_BY_DATE && _0x1f3d8a.CONFIG.TABLE_RELOAD) {
        chrome.storage.local.set({
          'FilterDate': _0x162004.checked
        });
      }
      if (_0x1f3d8a.CONFIG.BOOK_BY_HOUR && _0x1f3d8a.CONFIG.TABLE_RELOAD) {
        chrome.storage.local.set({
          'FilterHour': _0x54edea.checked
        });
      }
      if (_0x1f3d8a.CONFIG.TABLE_RELOAD) {
        chrome.storage.local.set({
          'FilterPos': _0x44e8a9.checked
        });
      }
    };
    if (_0x1f3d8a.CONFIG.BOOK_BY_DATE && _0x1f3d8a.CONFIG.TABLE_RELOAD) {
      _0x162004.onchange = () => _0x29db02(_0x162004);
    }
    if (_0x1f3d8a.CONFIG.BOOK_BY_HOUR && _0x1f3d8a.CONFIG.TABLE_RELOAD) {
      _0x54edea.onchange = () => _0x29db02(_0x54edea);
    }
    if (_0x1f3d8a.CONFIG.TABLE_RELOAD) {
      _0x44e8a9.onchange = () => _0x29db02(_0x44e8a9);
    }
    _0x255a61.onclick = () => {
      _0x56c008.classList.add("Hidden");
      _0x545537.classList.add('Hidden');
      _0x4d4199.classList.remove("Hidden");
      _0x21f2b9.classList.add("Hidden");
      _0x43a7da.classList.add('Hidden');
      _0x10a752.classList.add('Hidden');
    };
    _0x2445e1.onclick = _0x24d984 => {
      var _0xc39d66 = _0x24d984.target.getAttribute("data-editId");
      console.log("ID TO BE MODIFED : ", _0xc39d66);
      chrome.storage.local.get("Accounts", _0x2526aa => {
        var _0x25f6b4 = _0x2526aa.Accounts;
        _0x25f6b4 = _0x25f6b4.map(_0x33a21d => {
          if (_0x33a21d.ID == _0xc39d66) {
            _0x33a21d.NICKNAME = _0x38df5b.value;
            _0x33a21d.EMAIL = _0x3cc49c.value;
            _0x33a21d.PASSWORD = _0x533375.value;
            return _0x33a21d;
          }
          return _0x33a21d;
        });
        chrome.storage.local.set({
          'Accounts': _0x25f6b4
        });
        _0x45738a(_0x25f6b4);
        _0x9ce86f();
      });
    };
    if (_0x1f3d8a.CONFIG.BOOK_BY_DATE && _0x1f3d8a.CONFIG.TABLE_RELOAD) {
      SetDate.onclick = () => {
        _0x545537.classList.add("Hidden");
        _0x56c008.classList.add("Hidden");
        _0x4d4199.classList.add("Hidden");
        _0x21f2b9.classList.remove("Hidden");
        _0x43a7da.classList.add('Hidden');
        _0x10a752.classList.add("Hidden");
      };
    }
    if (_0x1f3d8a.CONFIG.BOOK_BY_HOUR && _0x1f3d8a.CONFIG.TABLE_RELOAD) {
      SetHour.onclick = () => {
        _0x545537.classList.add("Hidden");
        _0x56c008.classList.add("Hidden");
        _0x4d4199.classList.add('Hidden');
        _0x21f2b9.classList.add("Hidden");
        _0x43a7da.classList.add("Hidden");
        _0x10a752.classList.remove('Hidden');
      };
    }
    if (_0x1f3d8a.CONFIG.TABLE_RELOAD) {
      SetPos.onclick = () => {
        _0x545537.classList.add('Hidden');
        _0x56c008.classList.add("Hidden");
        _0x4d4199.classList.add('Hidden');
        _0x21f2b9.classList.add('Hidden');
        _0x10a752.classList.add("Hidden");
        _0x43a7da.classList.remove("Hidden");
      };
    }
    if (_0x1f3d8a.CONFIG.TABLE_RELOAD) {
      _0x209d8c.onclick = () => {
        var _0x2ddd31 = _0x1929f6.value / 0x1;
        if (_0x2ddd31 >= 0x0) {
          chrome.storage.local.get(['Accounts'], _0x1e1227 => {
            var _0x31acc8 = _0x1e1227.Accounts.map(_0x798b46 => {
              _0x798b46.ATTEMP = _0x2ddd31;
              return _0x798b46;
            });
            chrome.storage.local.set({
              'Accounts': _0x31acc8
            });
            Array.from(document.querySelectorAll("[data-id] .attemp")).forEach(_0x22ae06 => {
              _0x22ae06.value = _0x2ddd31;
              _0x22ae06.classList.remove('attempRed');
              _0x22ae06.classList.add("attempGreen");
            });
          });
        } else {
          console.log("ERROR: Attemps Entered is Invalid : ", _0x1929f6.value);
        }
      };
    }
    _0x405273.onclick = () => {
      if (_0x4656e6.value == '' || _0x44aa6d.value == '') {
        return;
      }
      chrome.storage.local.get("Accounts", _0x5575cd => {
        var _0x34c269 = _0x5575cd.Accounts || [];
        var _0x36a603 = _0x34c269.length == 0x0 ? 0x1 : _0x34c269.at(-0x1).ID + 0x1;
        _0x34c269.push({
          'ID': _0x36a603,
          'NICKNAME': _0x57962f.value,
          'EMAIL': _0x4656e6.value,
          'PASSWORD': _0x44aa6d.value,
          'ATTEMP': 0x6
        });
        chrome.storage.local.set({
          'Accounts': _0x34c269
        });
        _0x45738a(_0x34c269);
        _0x9ce86f();
        _0x4656e6.value = '';
        _0x44aa6d.value = '';
        _0x57962f.value = '';
      });
    };
    _0x3374fc.ondblclick = async () => {
      var {
        Accounts: _0x5d9469
      } = await chrome.storage.local.get("Accounts");
      var _0x1e3fa7 = _0x5d9469.map(_0x44af9c => _0x44af9c.EMAIL).join("\n");
      navigator.clipboard.writeText(_0x1e3fa7);
      _0x3374fc.innerHTML = _0x5d9469.length + " Emails";
      setTimeout(() => {
        _0x3374fc.innerHTML = 'Email';
      }, 0x7d0);
    };
    _0x14fa05.onclick = async () => {
      var _0x52473e = document.querySelector('#minDate').value;
      var _0x511512 = document.querySelector("#minTime").value;
      var _0x121ada = document.querySelector('#maxDate').value;
      var _0x1b3245 = document.querySelector("#maxTime").value;
      var _0x290bea = {
        'minDate': _0x52473e,
        'minTime': _0x511512,
        'maxDate': _0x121ada,
        'maxTime': _0x1b3245
      };
      await chrome.storage.local.set({
        'DateRanges': _0x290bea
      });
      _0x3e6913();
      _0x9ce86f();
    };
    _0x492db8.onclick = async () => {
      var _0x2e7165 = document.querySelector("#PositionsOpts").value;
      await chrome.storage.local.set({
        'BookByPosition': _0x2e7165
      });
      _0x2b0592();
      _0x9ce86f();
    };
    Array.from(document.querySelectorAll("button[data-time]")).forEach(_0x24f712 => {
      _0x24f712.onclick = async () => {
        var _0xf64c0d = _0x24f712.getAttribute('data-time');
        var {
          TimeRange: _0x2a0b19
        } = await chrome.storage.local.get("TimeRange");
        console.log("TimeRange : ", _0x2a0b19);
        if (!_0x2a0b19) {
          await chrome.storage.local.set({
            'TimeRange': {}
          });
          var _0x2a0b19 = {};
        }
        if (!_0x2a0b19[_0xf64c0d]) {
          console.log("TimeRange New");
          _0x2a0b19[_0xf64c0d] = true;
          _0x24f712.classList.add('Active');
        } else {
          console.log("TimeRange Old");
          _0x2a0b19[_0xf64c0d] = !_0x2a0b19[_0xf64c0d];
          if (_0x2a0b19[_0xf64c0d]) {
            _0x24f712.classList.add("Active");
          } else {
            _0x24f712.classList.remove("Active");
          }
        }
        await chrome.storage.local.set({
          'TimeRange': _0x2a0b19
        });
      };
    });
    var _0x3c5953 = () => {
      chrome.storage.local.get(['Accounts'], _0x1c424f => {
        var _0xab3f7c = _0x1c424f.Accounts;
        var _0x5715de = _0xab3f7c.findIndex(_0x2987c2 => _0x2987c2.ATTEMP > 0x0);
        _0xab3f7c[_0x5715de].ATTEMP -= 0x1;
        chrome.storage.local.set({
          'Accounts': _0xab3f7c
        });
      });
    };
    var _0x53f300 = _0x6cded6 => {
      _0x3c5953();
      document.querySelector('#username').value = _0x6cded6.EMAIL;
      document.querySelector('#password').value = _0x6cded6.PASSWORD;
      setTimeout(() => document.querySelector("[name=\"login\"]").click(), 0x3e8);
      setTimeout(() => {
        console.log("NO ACTION: RELOADING....");
        chrome.runtime.sendMessage({
          'msg': "OPEN_NEW_URL"
        });
      }, 0x2710);
    };
    var _0x4a1c84 = _0x36295c => {
      var _0x8b4cb1 = "0 ACCOUNT";
      if (!_0x36295c || _0x36295c.length == 0x0) {
        return {
          'status': false,
          'Reason': _0x8b4cb1
        };
      }
      var _0x8b4cb1 = "0 ATTEMPS";
      var _0x3872b3 = _0x36295c.find(_0x1d41fe => _0x1d41fe.ATTEMP > 0x0);
      if (!_0x3872b3) {
        return {
          'status': false,
          'Reason': _0x8b4cb1
        };
      }
      chrome.storage.local.set({
        'ActiveAcc': _0x3872b3
      });
      return {
        'status': true,
        'ACC': _0x3872b3
      };
    };
    var _0x35681b = () => {
      _0x5e7402.innerHTML = "Start";
      chrome.storage.local.set({
        'Bbutton': "Start"
      });
      console.log("[CURRENT STATUS : Start]");
    };
    var _0xbb1832 = _0xe2abe3 => {
      chrome.storage.local.get(["Accounts"], _0x15740d => {
        chrome.storage.local.set({
          'Bbutton': "Stop"
        });
        console.log("[CURRENT STATUS : Stop]");
        _0x5e7402.innerHTML = "Stop";
        var _0x5f3f52 = _0x15740d.Accounts;
        console.log("Accounts : ", _0x5f3f52);
        var _0x47d55c = _0x4a1c84(_0x5f3f52);
        console.log("CurrentAccount : ", _0x47d55c);
        chrome.storage.local.set({
          'CurrentAccount': _0x47d55c
        });
        if (_0x47d55c.status) {
          _0x53f300(_0x47d55c.ACC);
        } else {
          console.log("ERROR: ", _0x47d55c.Reason);
        }
      });
    };
    _0x5e7402.onclick = () => {
      clearTimeout(_0x9d89d4);
      chrome.storage.local.get(['Bbutton'], _0x3d94c1 => {
        if (_0x3d94c1.Bbutton == 'Stop') {
          _0x35681b();
        } else {
          _0xbb1832(false);
        }
      });
    };
    chrome.storage.local.get(["Bbutton", "CONFIG"], async _0x407235 => {
      _0xe86513();
      chrome.storage.local.set({
        'ActiveAcc': false
      });
      console.log("RETREIVE DATA : ", _0x407235);
      _0x5e7402.innerHTML = _0x407235.Bbutton || "start";
      console.log("SUCCESS: NO CAPTCHA NO BLOCKED MESSAGE");
      if (_0x407235.Bbutton == "Stop") {
        _0xbb1832(true);
      }
    });
  });
};
var loginInterval = setInterval(() => {
  if (document.querySelector("#username")) {
    clearInterval(loginInterval);
    init();
  }
}, 0x64);