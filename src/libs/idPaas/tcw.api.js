var twca = {};
twca.cardcpnt = null;
twca.atmcpnt = null;
twca.xmlcardcpnt = null;
const strURLArray = [];
var isOutSideSettingURL = false;

function twcaSign(type, tbs, pin, cn, authUrl) {
	var ret = {};
	ret.signature = "";
	
	if(type != "4" && type != "5") {
		ret.code = "1001";
		ret.msg = "不支援的載具類型";
		return ret;
	}
	
	if(type == "5") {
		if(twca.seccpnt == null) twca.seccpnt = new tcw();
		
		if(twca.seccpnt.isAlive() != 0) {
			ret.code = "2000";
			ret.msg = "偵測不到用戶端服務啟動中";
			return ret;
		}
		
		var certFilter = "//S_CL=3,I_O=TAIWAN-CA.COM Inc.,I_C=TW,S_CN=[@cn]//";
		certFilter = certFilter.replace(/\[@cn]/g, cn);
		
		var oResult = twca.seccpnt.selectSignerEx(certFilter, "", "", "", "", "C", "0");
		
		if (oResult === undefined || oResult !== "0") {
			ret.code = "1002";
			ret.msg = "選擇憑證失敗";
			return ret;
		}

		var sub = twca.seccpnt.GetCertSubject();
		
		var regex = new RegExp("Yuanta", 'i');

		if (regex.test(sub)) {
			ret.code = "1005";
			ret.msg = "元大證券憑證目前暫不支援此項應用";
			return ret;
		}
		
		oResult = twca.seccpnt.twcaSignPkcs7(tbs, "1");
		
		if (oResult === undefined || oResult == "") {
			ret.code = "1004";
			ret.msg = "簽章失敗";
			return ret;
		}
		ret.signature = oResult;
		ret.code = 0;
		ret.msg = "";
		return ret;
		
	}else {
		if(twca.cardcpnt == null) twca.cardcpnt = new moicaCard();
		
		if(twca.cardcpnt.isAlive() != 0) {
			ret.code = "2000";
			ret.msg = "偵測不到用戶端服務啟動中";
			return ret;
		}
		
		var oResult = twca.cardcpnt.icCardSignPkcs7(pin, tbs, '1');
    
    
		if (oResult === undefined) {
			ret.code = "1003";
			ret.msg = "簽章失敗";
			return ret;
		}
		if (oResult.errCode !== "0") {
			ret.code = "1004";
			ret.msg = oResult.errMsg;
			return ret;
		}
		ret.signature = oResult.b64SignValue;
		ret.code = 0;
		ret.msg = "";
		return ret;
	}
}

function hexToAscii(hexString) {
    var ret = "";
    for (var i = 0; i < hexString.length; i += 2) {
        ret = ret + String.fromCharCode(parseInt(hexString.substr(i, 2), 16));
    }
    return ret;
}

function hexToBase64(hexstring) {
    return btoa(hexstring.match(/\w{2}/g).map(function(a) {
        return String.fromCharCode(parseInt(a, 16));
    }).join(""));
}

//javascript Xss Protection filter 
function htmlEncode(str){
  return String(str).replace(/[^\w. ]/gi, function(c){
         return '&#'+c.charCodeAt(0)+';';
  });
}

function cpntAuth() {
    var ret = {};
    var authCode = "";
    try {
        var isOk = twca.cardcpnt.GetServerAuth();
        if (!isOk) {
            ret.code = "118a001";
            ret.msg = "元件產生認證碼失敗";
            return ret;
        }
        var oResult = twca.cardcpnt.GetServerCode();
        if (oResult.errCode !== "0") {
            ret.code = "118a002";
            ret.msg = "元件產生認證碼失敗:" + oResult.errMsg;
            return ret;
        }
        authCode = oResult.ServerCode;
    } catch (e) {
        ret.code = "118a001";
        ret.msg = "元件產生認證碼失敗:" + e;
        return ret;
    }

    ret.code = "0";
    ret.msg = "";
	ret.clientAuthCode = authCode;
    return ret;
}

function cpntAuthVerify(authCode) {
    var ret = {};
    try {
        var isOk = twca.cardcpnt.VerifyServerResponse(authCode);
        if (!isOk) {
            ret.code = "118a005";
            ret.msg = "元件認證失敗";
            return ret;
        }
    } catch (e) {
        ret.code = "118a005";
        ret.msg = "元件認證失敗:" + e;
        return ret;
    }

    ret.code = "0";
    ret.msg = "";
    return ret;
}

function cpntAuth2() {
    var ret = {};
    var authCode = "";
    try {
        var isOk = twca.atmcpnt.GetServerAuth();
        if (!isOk) {
            ret.code = "118a001";
            ret.msg = "元件產生認證碼失敗";
            return ret;
        }
        var oResult = twca.atmcpnt.GetServerCode();
        if (oResult.errCode !== "0") {
            ret.code = "118a002";
            ret.msg = "元件產生認證碼失敗:" + oResult.errMsg;
            return ret;
        }
        authCode = oResult.ServerCode;
    } catch (e) {
        ret.code = "118a001";
        ret.msg = "元件產生認證碼失敗:" + e;
        return ret;
    }
    ret.code = "0";
    ret.msg = "";
	ret.clientAuthCode = authCode;
    return ret;
}

function cpntAuthVerify2(authCode) {
    var ret = {};
    try {
        var isOk = twca.atmcpnt.VerifyServerResponse(authCode);
        if (!isOk) {
            ret.code = "118a005";
            ret.msg = "元件認證失敗";
            return ret;
        }
    } catch (e) {
        ret.code = "118a005";
        ret.msg = "元件認證失敗:" + e;
        return ret;
    }

    ret.code = "0";
    ret.msg = "";
    return ret;
}

function cpntAuth3() {
    var ret = {};
    var authCode = "";
    try {
        var isOk = twca.xmlcardcpnt.GetServerAuth();
        if (!isOk) {
            ret.code = "118a001";
            ret.msg = "元件產生認證碼失敗";
            return ret;
        }
        var oResult = twca.xmlcardcpnt.GetServerCode();
        if (oResult.errCode !== "0") {
            ret.code = "118a002";
            ret.msg = "元件產生認證碼失敗:" + oResult.errMsg;
            return ret;
        }
        authCode = oResult.ServerCode;
    } catch (e) {
        ret.code = "118a001";
        ret.msg = "元件產生認證碼失敗:" + e;
        return ret;
    }

    ret.code = "0";
    ret.msg = "";
	ret.clientAuthCode = authCode;
    return ret;
}

function cpntAuthVerify3(authCode) {
    var ret = {};
    try {
        var isOk = twca.xmlcardcpnt.VerifyServerResponse(authCode);
        if (!isOk) {
            ret.code = "118a005";
            ret.msg = "元件認證失敗";
            return ret;
        }
    } catch (e) {
        ret.code = "118a005";
        ret.msg = "元件認證失敗:" + e;
        return ret;
    }

    ret.code = "0";
    ret.msg = "";
    return ret;
}

function moicaCard() {
	var tcwClientUrl = "https://localhost:4700/TCW";
	
	var tcwDllInitKey = "vKHC9kjAK2DfpsTG1aaBMBDGxG4wRoFuFrEnSN6Cf6vSgyTrTepevK8DNJlXowMjXYinjBXDx3EH9oOAGWcQywlpT/6/3MMavfgGTfr0iv2C7ULdiDIC5G6kwAC2ij+/6MP+cCRu6sqbQoaVvK31vWfFUXkOqk9Q8+XLWEB+JFI5IeWIf+YKE/xFPX/Y9n/AttFNM+OOA2azO44SlWKzd8L4cfMPa2VPxZIhJVqyv4a/mv6nCFKvlvzYYPuKef273oFdKKYmxEFlpfBJ1Eck2j80UUcGHxKklsk7zJwz3kYaDO1R2BEgE+MFZ6SaQlEI5l7hNbWCfuY9yva08BHPIQ==";
	var tcwMacFwInitKey = "VpL7oBg9nJwsWO+KCFK9pgCoPyhZoKFspNBmZ2f0q7Bc9D58rZHRFHqeJR/E7ajmCkRKdc2APW9UowXTz48UppaqXQs1eYN9vxymMcHvrMFKCh14KBa3VVFOhZoTcIrXlPgMOyUkxr/Q5KhnvWz09Vxm3t2us5vX+ID3ST9AO5g0DeDzDw6LoFdDgpXjNAkUXUSv8SfHjPxFjLxc+62RIHJaTVJTmGKWIu+gP8bCdBSyWYe788yHm5AMy7QIFRzF5JWGss+X6OU4+UChuqca9U5pSDYHjuIxz9mzvmuTfbEELxI3GjYPQypcUZMg8JigyBkeB+Mqio4M5w7jiExWxw==";

	var oMoica = this;

	this.tcwSessionID = "";
	
	this.twcaSelectSignerCertInfo = null;	// 相容舊版 selectSigner 暫存憑證資訊
    
    // 取得 TCW 版號
	this.getVersion = function() {
		var oResult = jsonPost(getServiceUrl("getVersion"), null, 2000);
		var rtnResult = "";
		
		if(oResult.errCode == 0) rtnResult = oResult.version;
		
		return rtnResult;
	};
	
	// 測試 TCW 是否已啟動
	this.isAlive = function() {

		var oResult = jsonPost(getServiceUrl("isAlive"), null, 2000);
		var rtnResult = "";
		try {
			rtnResult = oResult.errCode;
		} catch (err) {
			rtnResult = "100";
		}
		return rtnResult;
	};
	
	this.icCardSignPkcs7 = function(pwd, plainText, signType) {
		var oResult = null;
		
		do {
			oParam = {};
			oParam.pwd = pwd;
			oParam.plainText = plainText;
			//oParam.encodeType = signType;
			
			oResult = tcwPost(getServiceUrl("icCardSignPkcs7"), oParam);
		} while ( false );
		return oResult;
	};
	
	this.icCardSignPkcs1 = function(pwd, plainText) {
		var oResult = null;
		
		do {
			oParam = {};
			oParam.pwd = pwd;
			oParam.plainText = plainText;
			
			oResult = tcwPost(getServiceUrl("icCardSignPkcs1"), oParam);
		} while ( false );
		return oResult;
	};
	
	
	function postDataToStr(postData) {
		var postStr = "";
		if ( postData !== null && postData !=="") {
			for ( var paramKey in postData ) {
				if ( postStr !== "" ) {
					postStr += "&";
				}
				postStr += paramKey + "=" + encodeURIComponent(postData[paramKey]);
			}
		}
		if ( oMoica.tcwSessionID === "" ) { 
			if ( postStr !== "" ) {
				postStr += "&";
			}
			if ( isWindows() ) {
				postStr += "TCW-INIT-KEY=" + encodeURIComponent(tcwDllInitKey);
			} else {
				postStr += "TCW-INIT-KEY=" + encodeURIComponent(tcwMacFwInitKey);
			}
		}
		
		return postStr;
	};
	
	function tcwPost(targetUrl, postData, iTimeOut) {
		return jsonPost(targetUrl, postData, iTimeOut);
	};
	
	function jsonPost(targetUrl, postData, iTimeOut) {
		return toJson(post(targetUrl, postData, iTimeOut));
	};
        
	this.SelectCert = function(pwd) {

		var oResult = null;
		
		do {
			oParam = {};
			oParam.pwd = pwd;
			
			oResult = tcwPost(getServiceUrl("SelectCert"), oParam);
		} while ( false );
		return oResult;
	};
        
	this.SignPkcs1 = function(plainText, signType) {

		var oResult = null;
		
		do {
			oParam = {};
			oParam.plainText = plainText;
			oParam.signType = signType;
			
			oResult = tcwPost(getServiceUrl("SignPkcs1"), oParam);
		} while ( false );
		return oResult;
	};
        
	this.SignPkcs7 = function(plainText, signType) {

		var oResult = null;
		
		do {
			oParam = {};
			oParam.plainText = plainText;
                        oParam.signType = signType;
			
			oResult = tcwPost(getServiceUrl("SignPkcs7"), oParam);
		} while ( false );
		return oResult;
	};
        
    this.DisConnectCard = function() {

		var oResult = null;
		
		do {
			oParam = {};
			
			oResult = tcwPost(getServiceUrl("DisConnectCard"), oParam);
		} while ( false );
		return oResult;
	};
		
	this.GetServerAuth = function() {
		var oResult = null;
		var blResult = false;
		
		do {
			oResult = tcwPost(getServiceUrl("GetServerAuth"), "");
			if (oResult.errCode != "0") {
                break;
            }
			blResult = true;
		} while ( false );
		return blResult;
	};
	
	this.GetServerCode = function() {
		var oResult = null;
		
		do {
			oResult = tcwPost(getServiceUrl("GetServerCode"),"");
		} while ( false );
		return oResult;
	};
	
	this.VerifyServerResponse = function(strServerResponse) {
		var oResult = null;
		var blResult = false;
		do {
			oResult = tcwPost(getServiceUrl("VerifyServerResponse"), {'strServerResponse':strServerResponse});
			if (oResult.errCode != "0") {
                break;
            }
			blResult = true;
		} while ( false );
		return blResult;
	};
	
	function post(targetUrl, postData, iTimeOut) {
		var xhr = null;		
		var postResult = "";
		var postStr = postDataToStr(postData);
		var sessionSeparator = "@@";
		var sessionSeparatorPos = 0;
		
		xhr = getXhr();

		if ( xhr === null ) {			
			return "";
		}
		
		try {
			xhr.open("POST", targetUrl, false);
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8");
			xhr.send(postStr);
			postResult = xhr.responseText;
			sessionSeparatorPos = postResult.lastIndexOf(sessionSeparator);
			if ( sessionSeparatorPos >= 0 ) {
				oMoica.tcwSessionID = postResult.substring(sessionSeparatorPos + sessionSeparator.length, postResult.length);
				postResult = postResult.substring(0, sessionSeparatorPos);
			}
		} catch (err) {
			postResult = "";
		}
			
		return postResult;
	};


	function getXhr() {

		var xhr = null;
                
		do {
			// 20170421 若未使用 native http object 則 cross domain 支援性可能會有問題
			if ( typeof(XMLHttpRequest) != "undefined" ) {
				xhr = new XMLHttpRequest();
				break;
			}
			
		} while ( false );
		
		return xhr;
	};
	
	function getServiceUrl(serviceName, sessionID) {
		var serviceUrl = tcwClientUrl;

		if ( oMoica.tcwSessionID !== "" ) {
			serviceUrl += "/" + oMoica.tcwSessionID;
		} 
		serviceUrl += "/" + serviceName;
		
		return serviceUrl;
	};
	
	function isWindows() {
		return /.*win.*/.test(navigator.platform.toLowerCase());
	};
	
	function toJson(strJson) {	
		var oRtn = null;
		try { oRtn = JSON.parse(strJson); } catch (e) { oRtn = null; }
		return oRtn;
	};	
}

function xmlCard() {
	var tcwClientUrl = "https://localhost:4700/TCW";
	
	var tcwDllInitKey = "hXlwBnCeI1TvHzzMo9BGVw7l924sfnogqL9zt2E9vteQLqjRBnVEDwi50tBTjY6vTlVnfaLz4gQKFwnuCfFOZhK61KBgD0HGOmJ/X53DtEEpAUYvuZx1izqA9511f7ix4+ZtZn697gHDcxzv2Ot3Ga1tEYn3ehHRDdYA+KP9RZOQVt+9IyoXaqI5V76/CBf31gdfU06xhs/23Et1x3Qs8b95sQnoncWBSB1YlLOUNakv1RZeVH283CgoSjpIj9sH4gp+dPSp5TKKdd2f2UCK8ZZqql6eOJVuWdCl6xQSN47+ihUXgsDTucD1+Nn8/CkQhD3A14aipWGJu/hqD7lYbg==";
	var tcwMacFwInitKey = "tQSUhbQfiUOLx/DDnWU6AZln/6vsyM5avGlTAfsnxTU8ntvl+q57R6M1ts2qlSP0oAG57mgc4pBAJVRHAoxBducYApF7iCoPYFfiRE1sJUDtjs0Wp+LbDWVHjJppsmPjK6uRWkP30Yasyh30svZaGw5o0SFi5nDOVgKoslfzshz7Rnd1e+PdwdHOoksKU5Mb672Sbs5d9tscO6ynmub3pr2pM5htwSf76WkiV+eDns1iYlKA0if/jQQi7oIMh/Cy1vLKf+r57FvVvEFfx01a5PZ+L8RdrSOfFpnPSAS1N/KDY6xvD6xBbam36BQ4gG53nplVdE4jBO3stJUtjTOSZw==";

	var oMoica = this;

	this.tcwSessionID = "";
	
	this.twcaSelectSignerCertInfo = null;	// 相容舊版 selectSigner 暫存憑證資訊
    
    // 取得 TCW 版號
	this.getVersion = function() {
		var oResult = jsonPost(getServiceUrl("getVersion"), null, 2000);
		var rtnResult = "";
		
		if(oResult.errCode == 0) rtnResult = oResult.version;
		
		return rtnResult;
	};
	
	// 測試 TCW 是否已啟動
	this.isAlive = function() {

		var oResult = jsonPost(getServiceUrl("isAlive"), null, 2000);
		var rtnResult = "";
		try {
			rtnResult = oResult.errCode;
		} catch (err) {
			rtnResult = "100";
		}
		return rtnResult;
	};
	
	this.icCardSignPkcs7 = function(pwd, plainText, signType) {
		var oResult = null;
		
		do {
			oParam = {};
			oParam.pwd = pwd;
			oParam.plainText = plainText;
			//oParam.encodeType = signType;
			
			oResult = tcwPost(getServiceUrl("icCardSignPkcs7"), oParam);
		} while ( false );
		return oResult;
	};
	
	this.icCardSignPkcs1 = function(pwd, plainText) {
		var oResult = null;
		
		do {
			oParam = {};
			oParam.pwd = pwd;
			oParam.plainText = plainText;
			
			oResult = tcwPost(getServiceUrl("icCardSignPkcs1"), oParam);
		} while ( false );
		return oResult;
	};
	
	
	function postDataToStr(postData) {
		var postStr = "";
		if ( postData !== null && postData !=="") {
			for ( var paramKey in postData ) {
				if ( postStr !== "" ) {
					postStr += "&";
				}
				postStr += paramKey + "=" + encodeURIComponent(postData[paramKey]);
			}
		}
		if ( oMoica.tcwSessionID === "" ) { 
			if ( postStr !== "" ) {
				postStr += "&";
			}
			if ( isWindows() ) {
				postStr += "TCW-INIT-KEY=" + encodeURIComponent(tcwDllInitKey);
			} else {
				postStr += "TCW-INIT-KEY=" + encodeURIComponent(tcwMacFwInitKey);
			}
		}
		
		return postStr;
	};
	
	function tcwPost(targetUrl, postData, iTimeOut) {
		return jsonPost(targetUrl, postData, iTimeOut);
	};
	
	function jsonPost(targetUrl, postData, iTimeOut) {
		return toJson(post(targetUrl, postData, iTimeOut));
	};
        
	this.SelectCert = function(pwd) {

		var oResult = null;
		
		do {
			oParam = {};
			oParam.pwd = pwd;
			
			oResult = tcwPost(getServiceUrl("SelectCert"), oParam);
		} while ( false );
		return oResult;
	};
        
	this.SignPkcs1 = function(plainText, signType) {

		var oResult = null;
		
		do {
			oParam = {};
			oParam.plainText = plainText;
			oParam.signType = signType;
			
			oResult = tcwPost(getServiceUrl("SignPkcs1"), oParam);
		} while ( false );
		return oResult;
	};
        
	this.SignPkcs7 = function(plainText, signType) {

		var oResult = null;
		
		do {
			oParam = {};
			oParam.plainText = plainText;
                        oParam.signType = signType;
			
			oResult = tcwPost(getServiceUrl("SignPkcs7"), oParam);
		} while ( false );
		return oResult;
	};
        
    this.DisConnectCard = function() {

		var oResult = null;
		
		do {
			oParam = {};
			
			oResult = tcwPost(getServiceUrl("DisConnectCard"), oParam);
		} while ( false );
		return oResult;
	};
		
	this.GetServerAuth = function() {
		var oResult = null;
		var blResult = false;
		
		do {
			oResult = tcwPost(getServiceUrl("GetServerAuth"), "");
			if (oResult.errCode != "0") {
                break;
            }
			blResult = true;
		} while ( false );
		return blResult;
	};
	
	this.GetServerCode = function() {
		var oResult = null;
		
		do {
			oResult = tcwPost(getServiceUrl("GetServerCode"),"");
		} while ( false );
		return oResult;
	};
	
	this.VerifyServerResponse = function(strServerResponse) {
		var oResult = null;
		var blResult = false;
		do {
			oResult = tcwPost(getServiceUrl("VerifyServerResponse"), {'strServerResponse':strServerResponse});
			if (oResult.errCode != "0") {
                break;
            }
			blResult = true;
		} while ( false );
		return blResult;
	};
	
	function post(targetUrl, postData, iTimeOut) {
		var xhr = null;		
		var postResult = "";
		var postStr = postDataToStr(postData);
		var sessionSeparator = "@@";
		var sessionSeparatorPos = 0;
		
		xhr = getXhr();

		if ( xhr === null ) {			
			return "";
		}
		
		try {
			xhr.open("POST", targetUrl, false);
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8");
			xhr.send(postStr);
			postResult = xhr.responseText;
			sessionSeparatorPos = postResult.lastIndexOf(sessionSeparator);
			if ( sessionSeparatorPos >= 0 ) {
				oMoica.tcwSessionID = postResult.substring(sessionSeparatorPos + sessionSeparator.length, postResult.length);
				postResult = postResult.substring(0, sessionSeparatorPos);
			}
		} catch (err) {
			postResult = "";
		}
			
		return postResult;
	};


	function getXhr() {

		var xhr = null;
                
		do {
			// 20170421 若未使用 native http object 則 cross domain 支援性可能會有問題
			if ( typeof(XMLHttpRequest) != "undefined" ) {
				xhr = new XMLHttpRequest();
				break;
			}
			
		} while ( false );
		
		return xhr;
	};
	
	function getServiceUrl(serviceName, sessionID) {
		var serviceUrl = tcwClientUrl;

		if ( oMoica.tcwSessionID !== "" ) {
			serviceUrl += "/" + oMoica.tcwSessionID;
		} 
		serviceUrl += "/" + serviceName;
		
		return serviceUrl;
	};
	
	function isWindows() {
		return /.*win.*/.test(navigator.platform.toLowerCase());
	};
	
	function toJson(strJson) {	
		var oRtn = null;
		try { oRtn = JSON.parse(strJson); } catch (e) { oRtn = null; }
		return oRtn;
	};	
}

function atm() {
	var tcwClientUrl = "https://localhost:4700/TCW";
	var tcwDllInitKey = "seshEo2/6Q08GDa0+EjrkzAfEiE/OmrzQ4ZJ5XLXupCQ9gOyo9FxKvIWSx+loscIBwyXqqnU3ZB4cnGH4+XMuhkm+rO6juE0ZE0400qwAzybpbc6elxmW9KckolDhNNzFfZGSUxMQ6tH3MfEpknGUVifSHcdR5IhOsj3J+S1Ah1LVdu5/5Ckm4U2eg0nDJT/4J3rYzsCF4hRxOUnPPinJ8DuVOhu8LEVoEGlbeAld09t1PBdHi+2HCR9bj/ycm1jyUhmGWHM4TV1KKm1NIcG9xCCWEGLi4aTnTgCmwdYXyOSnCK54Gnm39fQzrWxHNhq7ngEW5wycNA2ed2aglAROA==";
	var tcwMacFwInitKey = "NVOvGKO3qPBFwjQ4ZnICr+bVNAZMQG20VnLRPvLatRG+rdc8OcfU/5775iyc/hTF9DiJ7H+Od0ZPKLSet+j1wOr8QRWQH/s6QTVcO9lRE/fB42TCqeaaKKE/dfutoCxUGoc1Up4IJZd7ID0hVHCgGNGfPEohfQVADHo5ja/vVbPTaZnxHhiyZ/8vf6kFhf2u8S04KlCRFOFDteuZApLdYNd/WlnMIkw6gkAlk1CRSNA7B73E9cqTtIOI0in3XN3aT5WaA+9+Mee36Qo4KVEvDH+Gq6PARd7rs/qQyThs37MtHjsRiu9mEYNZLjk7Cj2J4OHPjSqXr6uAFviWgMXs6g==";
	var oATM = this;
	
	this.tcwSessionID = "";
	
	// 取得 TCW 版號
	this.getVersion = function() {
		var oResult = jsonPost(getServiceUrl("getVersion"), null, 2000);
		var rtnResult = "";
		
		if(oResult.errCode == 0) rtnResult = oResult.version;
		
		return rtnResult;
	};
	
	// 測試 TCW 是否已啟動
	this.isAlive = function() {
		var oResult = jsonPost(getServiceUrl("isAlive"), null, 2000);
		var rtnResult = "";
		try {
			rtnResult = oResult.errCode;
		} catch (err) {
			rtnResult = "100";
		}
		return rtnResult;
	};
	
	this.GetServerAuth = function() {
		var oResult = null;
		var blResult = false;
		
		do {
			oResult = tcwPost(getServiceUrl("GetServerAuth"), "");
			if ( oResult.errCode != "0" ) {
				break;
			}
			blResult = true;
		} while ( false );
		return blResult;
	};
	
	this.GetServerCode = function() {
		var oResult = null;
		
		do {
			oResult = tcwPost(getServiceUrl("GetServerCode"),"");
			if ( oResult.errCode != "0" ) {
				break;
			}
		} while ( false );
		return oResult;
	};
	
	this.VerifyServerResponse = function(strServerResponse) {
		var oResult = null;
		var blResult = false;
		do {
			oResult = tcwPost(getServiceUrl("VerifyServerResponse"), {'strServerResponse':strServerResponse});
			if ( oResult.errCode != "0" ) {
				break;
			}
			blResult = true;
		} while ( false );
		return blResult;
	};
        
	this.ConnectCard = function() {
		var oResult = null;
		var blResult = false;
		
		do {
			oResult = tcwPost(getServiceUrl("ConnectCard"), "");
                        if ( oResult.errCode != "0" ) {
				break;
			}
			blResult = true;
		} while ( false );
		return blResult;
	};
	
	this.DisConnectCard = function() {
		var oResult = null;
		var blResult = false;
		
		do {
			oResult = tcwPost(getServiceUrl("DisConnectCard"), "");
                        if ( oResult.errCode != "0" ) {
				break;
			}
			blResult = true;
		} while ( false );
		return blResult;
	};
        
	this.Read1001 = function() {
		var oResult = null;
		var blResult = false;
		
		do {
			oResult = tcwPost(getServiceUrl("Read1001"), "");
                        if ( oResult.errCode != "0" ) {
				break;
			}
			blResult = true;
		} while ( false );
		return blResult;
	};
	
	this.Get1001 = function() {
		var oResult = null;
		
		do {
			oResult = tcwPost(getServiceUrl("Get1001"), "");
                        if ( oResult.errCode != "0" ) {
				break;
			}

		} while ( false );
		return oResult;
	};
	
	this.VerifyPin = function (pin) {
        var oResult = null;
        var blResult = false;

        do {
            oResult = tcwPost(getServiceUrl("VerifyPin"), {'pin': pin});
            if (oResult.errCode != "0") {
                break;
            }
            blResult = true;
        } while (false);
        return blResult;
    };
	
    this.TWNCH1 = function (idno, datetime) {
        var oResult = null;
        var blResult = false;

        do {
            var oParam = {};
            oParam.idno = idno;
            oParam.datetime = datetime;

            oResult = tcwPost(getServiceUrl("TWNCH1"), oParam);
            if (oResult.errCode != "0") {
                break;
            }
            blResult = true;
        } while (false);
        return blResult;
    };
	
    this.GetTAC = function () {
        var oResult = null;

        do {
            oResult = tcwPost(getServiceUrl("GetTAC"), "");
            if (oResult.errCode != "0") {
                break;
            }
        } while (false);
        return oResult;
    };

	function postDataToStr(postData) {
		var postStr = "";
		if ( postData != null ) {
			for ( var paramKey in postData ) {
				if ( postStr != "" ) {
					postStr += "&";
				}
				postStr += paramKey + "=" + encodeURIComponent(postData[paramKey]);
			}
		}
		if ( oATM.tcwSessionID == "" ) { 
			if ( postStr != "" ) {
				postStr += "&";
			}
			if ( isWindows() ) {
				postStr += "TCW-INIT-KEY=" + encodeURIComponent(tcwDllInitKey);
			} else {
				postStr += "TCW-INIT-KEY=" + encodeURIComponent(tcwMacFwInitKey);
			}
		}
		
		return postStr;
	};
	
	function tcwPost(targetUrl, postData, iTimeOut) {
		return jsonPost(targetUrl, postData, iTimeOut);
	};
	
	function jsonPost(targetUrl, postData, iTimeOut) {
		return toJson(post(targetUrl, postData, iTimeOut));
	};
	
	function post(targetUrl, postData, iTimeOut) {
		var xhr = null;		
		var postResult = "";
		var postStr = postDataToStr(postData);
		var sessionSeparator = "@@";
		var sessionSeparatorPos = 0;
		
		xhr = getXhr(iTimeOut);

		if ( xhr == null ) {			
			return "";
		}

		try {
			xhr.open("POST", targetUrl, false);
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8");

			xhr.send(postStr);
			postResult = xhr.responseText;
			sessionSeparatorPos = postResult.lastIndexOf(sessionSeparator);
			if ( sessionSeparatorPos >= 0 ) {
				oATM.tcwSessionID = postResult.substring(sessionSeparatorPos + sessionSeparator.length, postResult.length);
				postResult = postResult.substring(0, sessionSeparatorPos);
			}	
		} catch (err) {
			postResult = "";
		}
			
		return postResult;
	};
       

	function getXhr(iTimeout) {
		var xhr = null;
		
		do {
			// 20170421 若未使用 native http object 則 cross domain 支援性可能會有問題
			if ( typeof(XMLHttpRequest) != "undefined" ) {
				xhr = new XMLHttpRequest();
				break;
			}
			
		} while ( false );
		
		return xhr;
	};
	
	function getServiceUrl(serviceName, sessionID) {
		var serviceUrl = tcwClientUrl;

		if ( oATM.tcwSessionID != "" ) {
			serviceUrl += "/" + oATM.tcwSessionID;
		} 
		serviceUrl += "/" + serviceName;
		
		return serviceUrl;
	}
	
	function isIE() {	
		return /.*MSIE.*/.test(navigator.userAgent) || /.*Trident.*/.test(navigator.userAgent);  
	};
	
	function isWindows() {
		return /.*win.*/.test(navigator.platform.toLowerCase());
	};
	
	function isMacOS() {
		return /.*mac.*/.test(navigator.platform.toLowerCase());
	};
	
	function isChrome() {
		return /.*Chrome.*/.test(navigator.userAgent);
	};
	
	function strRight(strInput, specLen) {
		return strInput.substring(strInput.length - specLen, strInput.length);
	};
	
	function toJson(strJson) {		
		var oRtn = null;
		try { oRtn = JSON.parse(strJson); } catch (e) { oRtn = null; }
		return oRtn;
	};	
	
	function $f(tagId) {
		return document.getElementById(tagId);
	};
}
