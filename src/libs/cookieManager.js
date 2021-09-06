import { getLanguage } from "./language";

export function getCookieForm(cname, idiom = null) {
  var name = cname + "=";
  if (idiom != null) name = cname + "-" + idiom + "=";
  if (process.browser) {
    var decodedCookie = decodeURIComponent(window.document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
  }
  return "";
}
export function setCookieForm(cname, cvalue, idiom = null) {
  if (process.browser) {
    var d = new Date();
    d.setTime(d.getTime() + 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    if (idiom != null) cname = cname + "-" + idiom;
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
}
export function deleteCookieForm(cname, idiom = null) {
  if (process.browser) {
    var expires = "expires=Thu, 21 Aug 2014 20:00:00 UTC";
    if (idiom != null) cname = cname + "-" + idiom;
    console.log(cname + "=;" + expires + ";path=/");
    document.cookie = cname + "=;" + expires + ";path=/";
  }
}
export function saveExperiencesSelected(params = []) {
  setCookieForm("expS", params.join(), getLanguage());
  return true;
}
export function getExperiencesSelected() {
  let expSelected = getCookieForm("expS", getLanguage());
  expSelected = expSelected.split(",");
  if (expSelected.length > 0 || expSelected) return expSelected;
  else return [];
}
export function saveParams(params = []) {
  Object.keys(params).map((id) => {
    setCookieForm(id, params[id], getLanguage());
    return true;
  });
}
export function checkForCookies(params = []) {
  if (
    getCookieForm("resID", getLanguage()) &&
    getCookieForm("resort", getLanguage()) &&
    getCookieForm("checkInDate", getLanguage()) &&
    getCookieForm("stayID", getLanguage()) &&
    getCookieForm("peopleID", getLanguage())
  ) {
    return true;
  } else {
    return false;
  }
}
