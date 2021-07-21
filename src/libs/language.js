import { setCookieForm, getCookieForm } from "./cookieManager";

//global variables
var textos = {};

export function SetLanguage(idiom = "en-US", callback) {
  setCookieForm("Language", idiom);
  setTimeout(() => {
    callback();
  }, 100);
}
export function getLanguage() {
  return getCookieForm("Language") === "" ? "en-US" : getCookieForm("Language");
}

export function getTexto(textoInput) {
  if (getLanguage() === "en-US") {
    return textoInput;
  } else {
    return textos[textoInput] !== undefined ? textos[textoInput] : textoInput;
  }
}

export function setTextToTraslateTool(textResp) {
  textos = {};
  textos = textResp;
}

textos = {
  Continue: "Continuar",
  "Select Experience": "Select Experience",
  "No charge will be made to your credit card at this time. Your Vacation Package will be charged to your room account until you check out of your stay.":
    "No charge will be made to your credit card at this time. Your Vacation Package will be charged to your room account until you check out of your stay.",
  "Tour summary": "Tour summary",
};
