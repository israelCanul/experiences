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
  "Select Experience": "Seleccionar Experiencia",
  "No charges will be made to your credit card at this time. Your Vacation Package will be charged to your room account to be paid at checkout at the end of your stay.":
    "No charges will be made to your credit card at this time. Your Vacation Package will be charged to your room account to be paid at checkout at the end of your stay.",
  "Tour summary": "Tour summary",
  Cancun: "Cancún",
  "preference center": "preference center",
  "Thank You": "Thank You",
  "Your appointment has been confirmed": "Your appointment has been confirmed",
  "You will receive a coupon for your selected experience upon completing the presentation":
    "You will receive a coupon for your selected experience upon completing the presentation",
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
  "I/WE HAVE READ AND AGREE TO THE ":
    "HE/HEMOS LEÍDO Y ESTAMOS DE ACUERDO CON LOS ",
  "TERMS AND CONDITIONS": "TÉRMINOS Y CONDICIONES",
  "WE ACCEPT AND UNDERSTAND THAT IF WE DO NOT ATTEND THE AFOREMENTIONED PRESENTATION, WE WILL BE CHARGED THE NIGHTLY RACK RATE":
    "ACEPTAMOS Y ENTENDEMOS QUE DE NO ASISTIR A LA PRESENTACIÓN ARRIBA MENCIONADA, NOS SERÁ CARGADA LA TARIFA DE LISTA POR NOCHE",
  "THEY MUST PRESENT A VALID, MAJOR CREDIT CARD (AMEX, VISA OR MASTERCARD) AT THE TIME OF PRESENTATION AND A GOVERNMENT ISSUED ID (PASSPORT CARDS DO NOT APPLY)":
    "DEBEN PRESENTAR UNA DE LAS PRINCIPALES TARJETAS DE CRÉDITO VÁLIDA (AMEX, VISA O MASTERCARD) AL MOMENTO DE LA PRESENTACIÓN Y UNA IDENTIFICACIÓN OFICIAL (NO APLICAN TARJETAS DE PASAPORTE)",
  "IF MARRIED, BOTH HUSBAND AND WIFE, MUST ATTEND A 90-MINUTE GUIDED TOUR AND SALES PRESENTATION":
    "SI ESTÁN CASADOS, AMBOS ESPOSOS DEBEN ASISTIR A UN TOUR GUIADO DE 90 MINUTOS Y A LA PRESENTACIÓN DE VENTAS",
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
    "Los huéspedes en The Royal Cancun, The Royal Sands, The Royal Haciendas y Royal Uno deben tener más de 28 años de edad y contar con un ingreso anual de $70,000 USD o más (ingresos anuales combinados, si están casados). Todos los huéspedes deben estar empleados actualmente y ser sujetos de crédito y tener una de las principales tarjetas de crédito (no débito). Ambos cónyuges deben atender una visita guiada de 90 minutos y una presentación de ventas. Este material es utilizado con el propósito de promover un programa del Club de Viajes, aunque usted no está obligado a comprar para recibir su paquete vacacional. La no elegibilidad para esta oferta promocional no debe interpretarse como no elegible para comprar. No asistir a la visita guiada y la presentación de ventas conducirá a que The Royal Cancun, The Royal Sands, The Royal Haciendas y Royal Uno carguen las correspondientes tarifas de lista aplicables. Esta promoción no es válida para grupos (dos o más parejas afiliadas programadas para las mismas fechas o superpuestas). No es válida junto con otras ofertas de Royal Resorts. El receptor se hace responsable del pago de cualquier impuesto del gobierno directamente relacionado con el servicio brindado y cualquier gasto personal incurrido al utilizar esta oferta. ESTE MATERIAL NO ES UNA OFERTA PARA VENDER NI UNA SOLICITUD DE UNA OFERTA PARA COMPRAR A LOS RESIDENTES DE CUALQUIER ESTADO EN EL QUE NO SE HAYAN CUMPLIDO LOS REQUERIMIENTOS DE REGISTRO.",
  "There are no Appointments": "There are no Appointments",
  CONTINUE: "CONTINUE",
  Loading: "Loading",
  "Not Found": "No encontrado",
  "Something was wrong": "Algo salió mal",
  "Exclusive Limited Time Discount": "Exclusive Limited Time Descuento",
  "Special Rate": "Tarifa Especial",
  Includes: "Incluye",
  "Are you celebrating something special":
    "Are you celebrating something special",
  "Delicious menu for two": "Delicious menu for dos",
  "Choice of locations": "Choice of locations",
  "One bottle of wine, choose from a selection":
    "One bottle of wine, choose from a selection",
  "Service for two hours": "Service for two hours",
  "Romantic décor": "Romantic décor",
  "Your own waiter": "Your own waiter",
  "for two people. Tax include": "for two people. Tax include",
  "Rose petal decoration": "Rose petal decoration",
  "Bottle of Moët Chandon Brut champagne":
    "Bottle of Moët Chandon Brut champagne",
  "Chocolate-dipped strawberries": "Chocolate-dipped strawberries",
  "tax include": "tax include",
  Balloons: "Balloons",
  "Small cake": "Small cake",
  "Happy birthday banner": "Happy birthday banner",
  "Bottle of sparkling wine": "Bottle of sparkling wine",
  "please fill out this form and one of our representatives will contact you":
    "please fill out this form and one of our representatives will contact you",
};
