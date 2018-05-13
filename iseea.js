/*  iseea.js

	Pings a service to find whether user is accessing from an EEA end-point. 
	Access through function isEEA(), return null for unknown, -1 for NO, 1 for Yes

	function createCookie(name,value,days) {
	var expires = "";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		expires = "; expires="+date.toGMTString();
	}
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=", i;
	var ca = document.cookie.split(';');
	for(i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') {
			c = c.substring(1,c.length);
		}

		if (c.indexOf(nameEQ) === 0) {
			return c.substring(nameEQ.length,c.length);
		}
	}
	return null;
}
*/

function iseea() {

	function iseea() 		{ return _eeaStatus; 	}
	function opt(hasOO)		{ _setOptedOut(hasOO);	}

	// internal -------------------------------------------------------------

	function _createCookie(name, value, expiry) 	{}
	function _readCookie(name) 						{}
	function _pingGeoLocator() 						{}

	this._optedOut  = readCookie("isOptedOut");
	this._eeaStatus = readCookie("isEEA")

}

