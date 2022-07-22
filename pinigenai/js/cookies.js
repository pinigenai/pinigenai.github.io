function checkCookie() {
    if (document.cookie.split(';').some((item) => item.includes('cookiesOn'))) {
        return true;
    }
  }
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}



if(checkCookie()) {
    jQuery("#cookieDisclaimer").hide();
}

function acceptCookies(){
    document.cookie = "cookiesOn=yes; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=None; Secure";
    console.log("asdasda")
	jQuery("#cookieDisclaimer").hide();
}
function rejectCookies(){
    document.cookie = "cookiesOn=no; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=None; Secure";
	jQuery("#cookieDisclaimer").hide();
}
