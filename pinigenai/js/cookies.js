function checkCookieHasASpecificValue() {
    if (document.cookie.split(';').some((item) => item.includes('cookiesOn=yes'))) {
        return true;
    }
  }
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}



if(checkCookieHasASpecificValue()) {
    jQuery("#cookieDisclaimer").hide();
}

function acceptCookies(){
    document.cookie = "cookiesOn=yes; SameSite=None; Secure";
    console.log("asdasda")
	jQuery("#cookieDisclaimer").hide();
}
function rejectCookies(){
    document.cookie = "cookiesOn=no; SameSite=None; Secure";
	jQuery("#cookieDisclaimer").hide();
}
