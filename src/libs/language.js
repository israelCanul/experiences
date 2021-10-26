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
  "Select Experience": "Selecciona una Experiencia",
  "No charges will be made to your credit card at this time. Your Vacation Package will be charged to your room account to be paid at checkout at the end of your stay.":
    "No se harán cargos a su tarjeta de crédito en este momento. Su paquete vacacional será cargado a su cuenta de la habitación para ser pagada al salir al final de su estancia.",
  "Tour summary": "Resumen del Tour",
  Cancun: "Cancún",
  "preference center": "centro de preferencia",
  "Thank You": "Gracias",
  "Your appointment has been confirmed": "Su cita ha sido confirmada",
  "You will receive a coupon for your selected experience upon completing the presentation":
    "Al completar la presentación, usted recibirá un cupón para su experiencia seleccionada",
  "Email sent: ": "Correo enviado: ",
  "We look forward to welcoming you soon":
    "Esperamos darle la bienvenida pronto",
  "Add even more magic to your upcoming vacation with these packages.":
    "Agregue aun más magia a sus próximas vacaciones con estos paquetes.",
  "Plan ahead and enjoy an even better vacation!":
    "¡Planee con tiempo y disfrute unas aún mejores vacaciones!",
  "Choose your adventures now and use your time when you arrive to get a better tan on the beach":
    "Elija sus aventuras ahora y use su tiempo cuando llegue para tener un mejor bronceado en la playa",
  "This is what the weather is like in paradise today":
    "Así es el clima hoy en el paraíso",
  "You can check the forecast here for the next few days":
    "Usted puede revisar aquí el pronóstico del clima para los próximos días",
  "Please click on the experiences that would best suit you during your stay":
    "Seleccione las experiencias que mejor le acomodan durante su estancia",
  "Choose up to three activities from the selection below":
    "Escoja hasta tres actividades de las opciones abajo",
  "I do not accept the terms and conditions":
    "No acepto los términos y condiciones",
  "I/WE HAVE READ AND AGREE TO THE ":
    "HE/HEMOS LEÍDO Y ESTAMOS DE ACUERDO CON LOS ",
  "TERMS AND CONDITIONS": "TÉRMINOS Y CONDICIONES",
  "WE ACCEPT AND UNDERSTAND THAT IF WE DO NOT ATTEND THE AFOREMENTIONED PRESENTATION, WE WILL BE CHARGED THE NIGHTLY RACK RATE":
    "ACEPTAMOS Y ENTENDEMOS QUE DE NO ASISTIR A LA PRESENTACIÓN ARRIBA MENCIONADA, NOS SERÁ CARGADA LA TARIFA DE LISTA POR NOCHE",
  "THEY MUST PRESENT A VALID, MAJOR CREDIT CARD (AMEX, VISA OR MASTERCARD) AT THE TIME OF PRESENTATION AND A GOVERNMENT ISSUED ID (PASSPORT CARDS DO NOT APPLY)":
    "DEBEN PRESENTAR UNA DE LAS PRINCIPALES TARJETAS DE CRÉDITO VÁLIDA (AMEX, VISA O MASTERCARD) AL MOMENTO DE LA PRESENTACIÓN Y UNA IDENTIFICACIÓN OFICIAL (NO APLICAN TARJETAS DE PASAPORTE)",
  "IF MARRIED, BOTH HUSBAND AND WIFE, MUST ATTEND A 90-MINUTE GUIDED TOUR AND SALES PRESENTATION":
    "SI ESTÁN CASADOS, AMBOS ESPOSOS DEBEN ASISTIR A UN TOUR GUIADO DE 90 MINUTOS Y A LA PRESENTACIÓN DE VENTAS",
  "THIS OFFER INCLUDES A.": "ESTA OFERTA INCLUYE UN.",
  "I meet the following requirements to be able to participate in THIS PROMOTION.":
    "Cumplo con los siguientes requisitos para poder participar en ESTA PROMOCIÓN.",
  "I have read and agree to the ": "He leído y estoy de acuerdo con los ",
  "Terms & Conditions": "Términos y Condiciones",
  "By choosing this Special Rate, I agree to attend a 120 minute preview of the new benefits Royal Resorts SIgnature Club has in store.":
    "Al elegir esta Tarifa Especial, acepto asistir a una presentación de 120 minutos sobre los nuevos beneficios que ofrece el Royal Resorts Signature Club",
  Note: "Nota",
  Or: "O",
  "Guests at The Royal Cancun, The Royal Sands, The Royal Haciendas and Royal Uno must be over 28 years of age and have an annual income of US$70,000 or more (combined annual income if married). All guests must be currently employed and must be credit worthy and bring a major credit (not debit) card. Both husband and wife must attend a 90-minute guided tour and sales presentation. This material is being used for the purpose of promoting a Travel Club program, although you are under no obligation to purchase in order to receive your discounted vacation package. Ineligibility for this promotional offer should not be interpreted as ineligibility to purchase. Failure to attend the guided tour and sales presentation will lead to The Royal Cancun, The Royal Sands, The Royal Haciendas and Royal Uno charging the corresponding applicable rack rates. This promotion is not valid for groups (two or more affiliated couples scheduled for the same or overlapping dates). Not valid in conjunction with any other offers from Royal Resorts. The recipient is responsible for payment of any government-imposed taxes directly related to the service being provided and any personal expenses incurred when utilizing this offer. THIS MATERIAL IS NOT AN OFFER TO SELL NOR A SOLICITATION OF AN OFFER TO BUY TO RESIDENTS OF ANY STATE IN WHICH REGISTRATION REQUIREMENTS HAVE NOT BEEN FULFILLED.":
    "Los huéspedes en The Royal Cancun, The Royal Sands, The Royal Haciendas y Royal Uno deben tener más de 28 años de edad y contar con un ingreso anual de $70,000 USD o más (ingresos anuales combinados, si están casados). Todos los huéspedes deben estar empleados actualmente y ser sujetos de crédito y tener una de las principales tarjetas de crédito (no débito). Ambos cónyuges deben atender una visita guiada de 90 minutos y una presentación de ventas. Este material es utilizado con el propósito de promover un programa del Club de Viajes, aunque usted no está obligado a comprar para recibir su paquete vacacional. La no elegibilidad para esta oferta promocional no debe interpretarse como no elegible para comprar. No asistir a la visita guiada y la presentación de ventas conducirá a que The Royal Cancun, The Royal Sands, The Royal Haciendas y Royal Uno carguen las correspondientes tarifas de lista aplicables. Esta promoción no es válida para grupos (dos o más parejas afiliadas programadas para las mismas fechas o superpuestas). No es válida junto con otras ofertas de Royal Resorts. El receptor se hace responsable del pago de cualquier impuesto del gobierno directamente relacionado con el servicio brindado y cualquier gasto personal incurrido al utilizar esta oferta. ESTE MATERIAL NO ES UNA OFERTA PARA VENDER NI UNA SOLICITUD DE UNA OFERTA PARA COMPRAR A LOS RESIDENTES DE CUALQUIER ESTADO EN EL QUE NO SE HAYAN CUMPLIDO LOS REQUERIMIENTOS DE REGISTRO.",
  "There are no Appointments": "No hay Citas",
  "No spaces available": "No hay espacios disponibles",
  CONTINUE: "CONTINUAR",
  Loading: "Cargando",
  "Not Found": "No encontrado",
  "Something was wrong": "Algo salió mal",
  "Exclusive Limited Time Discount": "Descuento Exclusivo por Tiempo Limitado",
  "Special Rate": "Tarifa Especial",
  "Special price": "Precio Especial",
  "Regular price": "Precio regular",
  Includes: "Incluye",
  "Are you celebrating something special": "¿Está celebrando algo especial?",
  "Delicious menu for two": "Delicioso menú para dos",
  "Choice of locations": "Opción de locaciones",
  "One bottle of wine, choose from a selection":
    "Una botella de vino, elija de una selección",
  "Service for two hours": "Servicio por dos horas",
  "Romantic décor": "Decoración romántica",
  "Your own waiter": "Su propio mesero",
  "for two people. Tax included": "para dos personas. Impuesto incluido",
  "Rose petal decoration": "Decoración con pétalos de rosas",
  "Bottle of Moët Chandon Brut champagne":
    "Botella de champagne Moët Chandon Brut",
  "Chocolate-dipped strawberries": "Fresas con chocolate",
  "tax included": "impuesto incluido",
  Balloons: "Globos",
  "Small cake": "Pastel pequeño",
  "Happy birthday banner": "Banner de Feliz Cumpleaños",
  "Bottle of sparkling wine": "Botella de vino espumoso",
  "please fill out this form and one of our representatives will contact you":
    "Favor de llenar este formato y uno de nuestros representantes se pondrá en contacto con usted",
  "ABOUT YOUR STAY": "ACERCA DE SU ESTANCIA",
  "Are you celebrating anything special during your stay?":
    "¿Está celebrando algo especial durante su estancia?",
  "Wedding Anniversary": "Aniversario de Boda",
  Graduation: "Graduación",
  Engagement: "Compromiso",
  Other: "Otro",
  Birthday: "Cumpleaños",
  "No or I prefer not to answer": "No o prefiero no contestar",
  "BOOK YOUR APPOINTMENT": "RESERVE SU CITA",
  "As part of your vacation package, you will discover the Royal Resorts world and the amazing lifestyle and leisure benefits it offers you as a member":
    "Como parte de su paquete vacacional, usted descubrirá el mundo de Royal Resorts y los increíbles beneficios de estilo de vida y viaje que le ofrece como miembro",
  "Choose a time": "Elija un horario",
  "Choose a date": "Elija una fecha",
  "Select the experience that would best suit you during your stay":
    "Seleccione la experiencia que más le convenga durante su estancia",
  "<< Back": "<< Atras",
  "Thank you for your reply": "Gracias por su respuesta",
  "Your Concierge will be in contact soon to help you with your vacation plans.":
    "Su Concierge se pondrá en contacto pronto para ayudarlo con sus planes de vacaciones.",
};
