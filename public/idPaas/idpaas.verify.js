//==============================================================================
// Verify Lib
//==============================================================================

var twcaVerifyLibSS = twcaVerifyLibSSImpl();

function twcaVerifyLibSSImpl() {
  // Cpnt
  var mac_version = '2.0.0.20220425';
  var windows_version = '2.0.0.20220425';

  // AtlAgent
  var capiAgent = null;

  // Public function
  this.IDPaaSCpntCheck = function (type, cbf) {
    var code = '0';
    var msg = '成功';
    var data = {};

    if (!type) {
      code = '1185005';
      msg = '參數錯誤';
      cbf(code, msg, null, data);
      return;
    }

    if (twca.cardcpnt === null) twca.cardcpnt = new moicaCard();
    if (twca.atmcpnt === null) twca.atmcpnt = new atm();
    if (twca.xmlcardcpnt === null) twca.xmlcardcpnt = new xmlCard();
    if (twca.cardcpnt.isAlive() != 0) {
      code = '1182000';
      msg = '偵測不到用戶端服務啟動中或版本不符';
    } else {
      if (isMacOS()) {
        if (twca.cardcpnt.getVersion() != mac_version) {
          code = '1182000';
          msg = '偵測不到用戶端服務啟動中或版本不符';
        }
      } else {
        if (twca.cardcpnt.getVersion() != windows_version) {
          code = '1182000';
          msg = '偵測不到用戶端服務啟動中或版本不符';
        }
      }
    }

    if (code === '0') {
      switch (type) {
        case '1':
        case '2':
          var result = cpntAuth();
          if (result.code === '0') data.clientAuthCode = result.clientAuthCode;
          else {
            code = result.code;
            msg = result.msg;
          }
          break;
        case '4':
          var result = cpntAuth3();
          if (result.code === '0') data.clientAuthCode = result.clientAuthCode;
          else {
            code = result.code;
            msg = result.msg;
          }
          break;
        case '6':
          var result = cpntAuth2();
          if (result.code === '0') data.clientAuthCode = result.clientAuthCode;
          else {
            code = result.code;
            msg = result.msg;
          }
          break;
        default:
          code = '1185005';
          msg = '參數錯誤';
          break;
      }
    }

    cbf(code, msg, null, data);
  };

  this.IDPaaSCpntServerAuth = function (type, serverAuthCode, cbf) {
    var code = '0';
    var msg = '成功';
    var data = {};

    if (!type || !serverAuthCode) {
      code = '1185005';
      msg = '參數錯誤';
      cbf(code, msg, null, data);
      return;
    }

    switch (type) {
      case '1':
      case '2':
        var result = cpntAuthVerify(serverAuthCode);
        code = result.code;
        msg = result.msg;
        break;
      case '4':
        var result = cpntAuthVerify3(serverAuthCode);
        code = result.code;
        msg = result.msg;
        break;
      case '6':
        var result = cpntAuthVerify2(serverAuthCode);
        code = result.code;
        msg = result.msg;
        break;
      default:
        code = '1185005';
        msg = '參數錯誤';
        break;
    }

    cbf(code, msg, null, data);
  };

  this.IDPaaSMoicaSign = function (pwd, cts, cbf) {
    var code = '0';
    var msg = '成功';
    var data = {};

    if (!pwd || !cts) {
      code = '1185005';
      msg = '參數錯誤';
      cbf(code, msg, null, data);
      return;
    }

    var oResult = twca.cardcpnt.icCardSignPkcs7(pwd, cts, '0');

    if (oResult === undefined) {
      code = '118c001';
      msg = '簽章失敗';
      cbf(code, msg, null, data);
      return;
    }

    if (oResult.errCode !== '0') {
      code = '118c002';
      msg = '簽章失敗:' + oResult.errMsg;
      cbf(code, msg, null, data);
      return;
    }

    data.signature = oResult.b64SignValue;
    code = 0;
    msg = '';

    cbf(code, msg, null, data);
  };

  this.IDPaaSMoicaSignPKCS7 = function (pwd, cts, cbf) {
    var code = '0';
    var msg = '成功';
    var data = {};

    if (!pwd || !cts) {
      code = '1185005';
      msg = '參數錯誤';
      cbf(code, msg, null, data);
      return;
    }

    var oResult = twca.cardcpnt.icCardSignPkcs7(pwd, cts, '0');

    if (oResult === undefined) {
      code = '118c001';
      msg = '簽章失敗';
      cbf(code, msg, null, data);
      return;
    }

    if (oResult.errCode !== '0') {
      code = '118c002';
      msg = '簽章失敗:' + oResult.errMsg;
      cbf(code, msg, null, data);
      return;
    }

    data.signature = oResult.b64SignValue;
    code = 0;
    msg = '';

    cbf(code, msg, null, data);
  };

  this.IDPaaSMoicaSignPKCS1 = function (pwd, hash, cbf) {
    var code = '0';
    var msg = '成功';
    var data = {};

    if (!pwd || !hash) {
      code = '1185005';
      msg = '參數錯誤';
      cbf(code, msg, null, data);
      return;
    }

    var oResult = twca.cardcpnt.SelectCert(pwd);

    if (oResult === undefined) {
      code = '118d001';
      msg = '挑選憑證失敗';
      twca.cardcpnt.DisConnectCard();
      cbf(code, msg, null, data);
      return;
    }

    if (oResult.errCode !== '0') {
      code = '118d002';
      msg = '挑選憑證失敗:' + oResult.errMsg;
      twca.cardcpnt.DisConnectCard();
      cbf(code, msg, null, data);
      return;
    }

    data.b64Cert = oResult.b64Cert;

    var tbs = hexToBase64(hash);

    oResult = twca.cardcpnt.SignPkcs1(tbs, '1');

    if (oResult === undefined) {
      code = 'd003';
      msg = '簽章失敗';
      twca.cardcpnt.DisConnectCard();
      cbf(code, msg, null, data);
      return;
    }
    if (oResult.errCode !== '0') {
      code = 'd004';
      msg = '簽章失敗:' + oResult.errMsg;
      twca.cardcpnt.DisConnectCard();
      cbf(code, msg, null, data);
      return;
    }

    data.signature = oResult.b64SignValue;

    cbf(code, msg, null, data);
  };

  this.IDPaaSXmlSign = function (pwd, cts, cbf) {
    var code = '0';
    var msg = '成功';
    var data = {};

    if (!pwd || !cts) {
      code = '1185005';
      msg = '參數錯誤';
      cbf(code, msg, null, data);
      return;
    }

    var oResult = twca.xmlcardcpnt.icCardSignPkcs7(pwd, cts, '0');

    if (oResult === undefined) {
      code = '118c001';
      msg = '簽章失敗';
      cbf(code, msg, null, data);
      return;
    }

    if (oResult.errCode !== '0') {
      code = '118c002';
      msg = '簽章失敗:' + oResult.errMsg;
      cbf(code, msg, null, data);
      return;
    }

    data.signature = oResult.b64SignValue;
    code = 0;
    msg = '';

    cbf(code, msg, null, data);
  };

  this.IDPaaSXmlSignPKCS7 = function (pwd, cts, cbf) {
    var code = '0';
    var msg = '成功';
    var data = {};

    if (!pwd || !cts) {
      code = '1185005';
      msg = '參數錯誤';
      cbf(code, msg, null, data);
      return;
    }

    var oResult = twca.xmlcardcpnt.icCardSignPkcs7(pwd, cts, '0');

    if (oResult === undefined) {
      code = '118c001';
      msg = '簽章失敗';
      cbf(code, msg, null, data);
      return;
    }

    if (oResult.errCode !== '0') {
      code = '118c002';
      msg = '簽章失敗:' + oResult.errMsg;
      cbf(code, msg, null, data);
      return;
    }

    data.signature = oResult.b64SignValue;
    code = 0;
    msg = '';

    cbf(code, msg, null, data);
  };

  this.IDPaaSXmlSignPKCS1 = function (pwd, hash, cbf) {
    var code = '0';
    var msg = '成功';
    var data = {};

    if (!pwd || !hash) {
      code = '1185005';
      msg = '參數錯誤';
      cbf(code, msg, null, data);
      return;
    }

    var oResult = twca.xmlcardcpnt.SelectCert(pwd);

    if (oResult === undefined) {
      code = '118d001';
      msg = '挑選憑證失敗';
      twca.xmlcardcpnt.DisConnectCard();
      cbf(code, msg, null, data);
      return;
    }

    if (oResult.errCode !== '0') {
      code = '118d002';
      msg = '挑選憑證失敗:' + oResult.errMsg;
      twca.xmlcardcpnt.DisConnectCard();
      cbf(code, msg, null, data);
      return;
    }

    data.b64Cert = oResult.b64Cert;

    var tbs = hexToBase64(hash);

    oResult = twca.xmlcardcpnt.SignPkcs1(tbs, '1');

    if (oResult === undefined) {
      code = 'd003';
      msg = '簽章失敗';
      twca.xmlcardcpnt.DisConnectCard();
      cbf(code, msg, null, data);
      return;
    }
    if (oResult.errCode !== '0') {
      code = 'd004';
      msg = '簽章失敗:' + oResult.errMsg;
      twca.xmlcardcpnt.DisConnectCard();
      cbf(code, msg, null, data);
      return;
    }

    data.signature = oResult.b64SignValue;

    cbf(code, msg, null, data);
  };

  this.IDPaaSAtmTac = function (pwd, memberNo, tacDateStr, un, cbf) {
    var code = '0';
    var msg = '成功';
    var data = {};

    if (!pwd || !memberNo || !tacDateStr || !un) {
      code = '1185005';
      msg = '參數錯誤';
      cbf(code, msg, null, data);
      return;
    }

    var oResult = twca.atmcpnt.ConnectCard();

    if (!oResult) {
      code = '118t001';
      msg = '請將ATM金融卡插入您的讀卡機';
      cbf(code, msg, null, data);
      return;
    }

    oResult = twca.atmcpnt.Read1001();

    if (!oResult) {
      code = '118t002';
      msg = '讀取卡片資料錯誤';
      twca.atmcpnt.DisConnectCard();
      cbf(code, msg, null, data);
      return;
    }

    var data1001 = twca.atmcpnt.Get1001().read1001;

    if (data1001.length < 372) {
      code = '118t003';
      msg = '讀取此金融卡資料有誤，建議使用其他金融卡進行驗證';
      twca.atmcpnt.DisConnectCard();
      cbf(code, msg, null, data);
      return;
    }

    var bankNo = data1001.substring(4, 10);
    bankNo = hexToAscii(bankNo);
    var iccAppendix = data1001.substring(24, 84);

    if (bankNo === '012') {
      if (iccAppendix === '003030303030303030303030303030303030303030303030303030303030') {
        code = '118t004';
        msg = '此卡別無法使用此服務，建議你可使用其他金融卡進行驗證';
        cbf(code, msg, null, data);
        return;
      }
    }

    oResult = twca.atmcpnt.VerifyPin(pwd);
    if (!oResult) {
      code = '118t007';
      msg = '密碼錯誤';
      twca.atmcpnt.DisConnectCard();
      cbf(code, msg, null, data);
      return;
    }

    var tbt = un + tacDateStr.substr(8, 6);

    oResult = twca.atmcpnt.TWNCH1(memberNo, tbt);

    if (!code) {
      code = '118t008';
      msg = '押碼失敗';
      twca.atmcpnt.DisConnectCard();
      cbf(code, msg, null, data);
      return;
    }

    var dataTac = twca.atmcpnt.GetTAC().TAC;

    twca.atmcpnt.DisConnectCard();

    data.twnch1Tac = dataTac;
    data.ef1001 = data1001;
    code = 0;
    msg = '';

    cbf(code, msg, null, data);
  };

  this.IDPaaSCapiAgentCheck = function (cbf) {
    var code = '0';
    var msg = '成功';
    var data = {};

    if (this.capiAgent == null) this.capiAgent = initCapiAgentForChrome();
    try {
      this.capiAgent.initChrome();
    } catch {
      code = '1182000';
      msg = '偵測不到用戶端服務啟動中或版本不符';
      cbf(code, msg, null, data);
      return;
    }

    try {
      data.clientAuthCode = this.capiAgent.GetServerAuth();
      cbf(code, msg, null, data);
      return;
    } catch {
      code = '118b001';
      msg = '中介產生認證碼失敗';
      cbf(code, msg, null, data);
      return;
    }
  };

  this.IDPaaSCapiAgentServerAuth = function (serverAuthCode, cbf) {
    var code = '0';
    var msg = '成功';
    var data = {};

    if (this.capiAgent.VerifyServerResponse(serverAuthCode) == 0) {
      cbf(code, msg, null, data);
    } else {
      code = '118b005';
      msg = '中介認證失敗';
      cbf(code, msg, null, data);
    }
  };

  this.IDPaaSPostAlsUrl = function (url, eddarbank, rbanktoken) {
    var newWindowForm = document.createElement('form');
    newWindowForm.target = 'newWindowForBankAccountLogin';
    newWindowForm.method = 'post';
    newWindowForm.action = url;
    newWindowForm.appendChild(this.createInputElement('hidden', 'eddarbank', eddarbank));
    newWindowForm.appendChild(this.createInputElement('hidden', 'rbanktoken', rbanktoken));
    document.body.appendChild(newWindowForm);

    var w = 1000;
    var h = 600;
    var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    var dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;
    var width = window.innerWidth
      ? window.innerWidth
      : document.documentElement.clientWidth
      ? document.documentElement.clientWidth
      : screen.width;
    var height = window.innerHeight
      ? window.innerHeight
      : document.documentElement.clientHeight
      ? document.documentElement.clientHeight
      : screen.height;
    var left = width / 2 - w / 2 + dualScreenLeft;
    var top = height / 2 - h / 2 + dualScreenTop;

    newWindowForBankAccountLogin = window.open(
      '',
      'newWindowForBankAccountLogin',
      'width=' + w + ',height=' + h + ',left=' + left + ',top=' + top
    );
    if (newWindowForBankAccountLogin) {
      newWindowForm.submit();
      newWindowForBankAccountLogin.focus();
    } else {
    }
  };

  this.IDPaaSCapiSignPKCS7 = function (certFilter, pwd, cts, cbf) {
    var code = '0';
    var msg = '成功';
    var data = {};

    if (!certFilter || !pwd || !cts) {
      code = '1185005';
      msg = '參數錯誤';
      cbf(code, msg, null, data);
      return;
    }

    try {
      let selectRes = this.capiAgent.SelectSignerEx(certFilter, '', '', pwd, '', 0x0808, 0);
      if (selectRes != 0) {
        console.log(this.capiAgent.GetErrorMsg());
        throw selectRes;
      }
    } catch (e) {
      code = '1185112';
      msg = '讀取憑證失敗';
      cbf(code, msg, null, data);
      return;
    }

    try {
      let signature = this.capiAgent.SignPkcs7(cts, 0);
      data.signature = signature;
    } catch (e) {
      code = '1185061';
      msg = '簽章失敗';
      cbf(code, msg, null, data);
      return;
    }

    cbf(code, msg, null, data);
  };

  // 保留舊的小寫 function
  this.idPaaSCpntCheck = this.IDPaaSCpntCheck;
  this.idPaaSCpntServerAuth = this.IDPaaSCpntServerAuth;
  this.idPaaSMoicaSign = this.IDPaaSMoicaSign;
  this.idPaaSMoicaSignPKCS7 = this.IDPaaSMoicaSignPKCS7;
  this.idPaaSMoicaSignPKCS1 = this.IDPaaSMoicaSignPKCS1;
  this.idPaaSAtmTac = this.IDPaaSAtmTac;

  // Support function
  this.isMacOS = function () {
    return /.*mac.*/.test(navigator.platform.toLowerCase());
  };

  this.createInputElement = function (type, name, value) {
    var inputElement = document.createElement('input');
    inputElement.type = type;
    inputElement.name = name;
    inputElement.value = value;
    return inputElement;
  };

  return this;
}
