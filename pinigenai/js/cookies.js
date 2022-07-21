function getCookie(name){
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
}
getCookie("cookiesOn")
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

(getCookie("cookiesOn") == "yes") ? jQuery("#cookieDisclaimer").hide() : console.log('no cookie')

function acceptCookies(){
	setCookie("cookiesOn","yes",365);
    getCookie("cookiesOn")
    console.log("asdasda")
	jQuery("#cookieDisclaimer").hide();
}
function rejectCookies(){
	setCookie("cookiesOn","no",365);
	jQuery("#cookieDisclaimer").hide();
}