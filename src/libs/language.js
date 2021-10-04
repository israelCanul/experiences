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
  "No charges will be made to your credit card at this time. Your Vacation Package will be charged to your room account to be paid at checkout at the end of your stay.":
    "No charges will be made to your credit card at this time. Your Vacation Package will be charged to your room account to be paid at checkout at the end of your stay.",
  "Tour summary": "Tour summary",
  Cancun: "Cancún",
  "preference center": "preference center",
  "Thank You": "Thank You",
  "Your reservation has been placed": "Your reservation has been placed",
  "Please read the details of your reservation found on your confirmation email":
    "Please read the details of your reservation found on your confirmation email",
  "Email sent: ": "Email sent: ",
  "We look forward to welcoming you soon":
    "We look forward to welcoming you soon",
  "Add even more magic to your upcoming vacation with these packages.":
    "Add even more magic to your upcoming vacation with these packages.",
  "Plan ahead and enjoy an even better vacation!":
    "Plan ahead and enjoy an even better vacation!",
  "Choose your adventures now and use your time when you arrive to get a better tan on the beach":
    "Choose your adventures now and use your time when you arrive to get a better tan on the beach",
  "This is what the weather is like in paradise today":
    "This is what the weather is like in paradise today",
  "You can check here the forecast for the next days":
    "You can check here the forecast for the next days",
  "Please click on the experiences that would best suit you during your stay":
    "Please click on the experiences that would best suit you during your stay",
  "Choose up to three activities from the selection below":
    "Choose up to three activities from the selection below",
  "I do not accept the terms and conditions":
    "I do not accept the terms and conditions",
  "I/WE HAVE READ AND AGREE TO THE ": "I/WE HAVE READ AND AGREE TO THE ",
  "TERMS AND CONDITIONS": "TERMS AND CONDITIONS",
  "WE ACCEPT AND UNDERSTAND THAT IF WE DO NOT ATTEND THE AFOREMENTIONED PRESENTATION, WE WILL BE CHARGED THE NIGHTLY RACK RATE":
    "WE ACCEPT AND UNDERSTAND THAT IF WE DO NOT ATTEND THE AFOREMENTIONED PRESENTATION, WE WILL BE CHARGED THE NIGHTLY RACK RATE",
  "THEY MUST PRESENT A VALID, MAJOR CREDIT CARD (AMEX, VISA OR MASTERCARD) AT THE TIME OF PRESENTATION AND A GOVERNMENT ISSUED ID (PASSPORT CARDS DO NOT APPLY)":
    "THEY MUST PRESENT A VALID, MAJOR CREDIT CARD (AMEX, VISA OR MASTERCARD) AT THE TIME OF PRESENTATION AND A GOVERNMENT ISSUED ID (PASSPORT CARDS DO NOT APPLY)",
  "IF MARRIED, BOTH HUSBAND AND WIFE, MUST ATTEND A 90-MINUTE GUIDED TOUR AND SALES PRESENTATION":
    "IF MARRIED, BOTH HUSBAND AND WIFE, MUST ATTEND A 90-MINUTE GUIDED TOUR AND SALES PRESENTATION",
  "THIS OFFER INCLUDES A.": "THIS OFFER INCLUDES A.",
  "I meet the following requirements to be able to participate in THIS PROMOTION.":
    "I meet the following requirements to be able to participate in THIS PROMOTION.",
  "I have read and agree to the ": "I have read and agree to the ",
  "Terms & Conditions": "Terms & Conditions",
  "By choosing this Special Rate, I commit to attending a 120 minute preview of the new benefits Royal Resorts SIgnature Club has in store.":
    "By choosing this Special Rate, I commit to attending a 120 minute preview of the new benefits Royal Resorts SIgnature Club has in store.",
  Note: "Note",
  Or: "O",
  "Guests at The Royal Cancun, The Royal Sands, The Royal Haciendas and Royal Uno must be over 28 years of age and have an annual income of US$70,000 or more (combined annual income if married). All guests must be currently employed and must be credit worthy and bring a major credit (not debit) card. Both husband and wife must attend a 90-minute guided tour and sales presentation. This material is being used for the purpose of promoting a Travel Club program, although you are under no obligation to purchase in order to receive your discounted vacation package. Ineligibility for this promotional offer should not be interpreted as ineligibility to purchase. Failure to attend the guided tour and sales presentation will lead to The Royal Cancun, The Royal Sands, The Royal Haciendas and Royal Uno charging the corresponding applicable rack rates. This promotion is not valid for groups (two or more affiliated couples scheduled for the same or overlapping dates). Not valid in conjunction with any other offers from Royal Resorts. The recipient is responsible for payment of any government-imposed taxes directly related to the service being provided and any personal expenses incurred when utilizing this offer. THIS MATERIAL IS NOT AN OFFER TO SELL NOR A SOLICITATION OF AN OFFER TO BUY TO RESIDENTS OF ANY STATE IN WHICH REGISTRATION REQUIREMENTS HAVE NOT BEEN FULFILLED.":
    "Guests at The Royal Cancun, The Royal Sands, The Royal Haciendas and Royal Uno must be over 28 years of age and have an annual income of US$70,000 or more (combined annual income if married). All guests must be currently employed and must be credit worthy and bring a major credit (not debit) card. Both husband and wife must attend a 90-minute guided tour and sales presentation. This material is being used for the purpose of promoting a Travel Club program, although you are under no obligation to purchase in order to receive your discounted vacation package. Ineligibility for this promotional offer should not be interpreted as ineligibility to purchase. Failure to attend the guided tour and sales presentation will lead to The Royal Cancun, The Royal Sands, The Royal Haciendas and Royal Uno charging the corresponding applicable rack rates. This promotion is not valid for groups (two or more affiliated couples scheduled for the same or overlapping dates). Not valid in conjunction with any other offers from Royal Resorts. The recipient is responsible for payment of any government-imposed taxes directly related to the service being provided and any personal expenses incurred when utilizing this offer. THIS MATERIAL IS NOT AN OFFER TO SELL NOR A SOLICITATION OF AN OFFER TO BUY TO RESIDENTS OF ANY STATE IN WHICH REGISTRATION REQUIREMENTS HAVE NOT BEEN FULFILLED.",
};
