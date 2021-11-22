import axios from "axios";
import {
  apiUrlSF,
  apiWheater,
  apiWheaterC,
  dtConverterClass,
  dtConverterTransaction,
  dtConverter,
  dtAccountSalesforceSync,
  dtSpecialClients,
} from "../libs/config";
import { getExperiencesSelected, getCookieForm } from "../libs/cookieManager";
import { getLanguage } from "../libs/language";

export function getParamsToContinue(peopleID) {
  return axios({
    method: "get",
    url:
      apiUrlSF +
      `/dtExtensions/${dtConverterTransaction}?fields=StayID,ContactID,ConverterID,Resort,CheckInDate,CheckOutDate&q=PeopleID,equals,${peopleID}`,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
  // return axios.get(
  //   apiUrlSF +
  //     `/dtExtensions/${dtConverterTransaction}?fields=StayID,ContactID,ConverterID,Resort,CheckInDate,CheckOutDate&q=PeopleID,equals,${peopleID}`
  // );
}

export function getExperiences() {
  if (getLanguage() === "en-US")
    return axios.get(
      apiUrlSF +
        `/dtExtensions/${dtConverterClass}?fields=ConverterClassCode,ConverterClassID,ConverterClassImage,ConverterClassIcon,ConverterClassSeq,ConverterClassDescEng`
    );
  if (getLanguage() === "es-MX")
    return axios.get(
      apiUrlSF +
        `/dtExtensions/${dtConverterClass}?fields=ConverterClassCode,ConverterClassID,ConverterClassImage,ConverterClassIcon,ConverterClassSeq,ConverterClassDescSpa`
    );
}

export function getTours() {
  if (getLanguage() === "en-US")
    return axios.get(
      apiUrlSF +
        `/dtExtensions/${dtConverter}?fields=ConverterID,ConverterCode,ConverterDescEng,ConverterDescSpa,ConverterProperty,ConverterClassID,ConverterImage,ConverterRegularPrice,ConverterSpecialPrice,ConverterSeq,ConverterCarrouselImage,ConverterIncludesEng,ConverterIncludesSpa,ItemRegularLInk,ItemRegularImage`
    );
  if (getLanguage() === "es-MX")
    return axios.get(
      apiUrlSF +
        `/dtExtensions/${dtConverter}?fields=ConverterID,ConverterCode,ConverterDescEng,ConverterDescSpa,ConverterProperty,ConverterClassID,ConverterImage,ConverterRegularPrice,ConverterSpecialPrice,ConverterSeq,ConverterCarrouselImage,ConverterIncludesEng,ConverterIncludesSpa,ItemRegularLInk,ItemRegularImage`
    );
}

export function setDataToMC(params) {
  return axios({
    method: "POST",
    url: apiUrlSF + `/dtExtensions/${dtConverterTransaction}`,
    data: params,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
}
//CRM/getWaves
///getTokenByServer
export async function getWavesFromCRM(params) {
  const token = await axios
    .post(apiUrlSF + `/CRM/getTokenByServer`)
    .then((responseT) => {
      return axios({
        method: "post",
        url: apiUrlSF + `/CRM/getWaves`,
        data: params,
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: `Bearer ${responseT.data.token.access_token}`,
        },
      });
    });
  return token;
}

export function getTourSelected(id) {
  if (getLanguage() === "en-US")
    return axios.get(
      apiUrlSF +
        `/dtExtensions/${dtConverter}?fields=ConverterCarrouselImage,ConverterCode,ConverterDescEng,ConverterRegularPrice,ConverterSpecialPrice,ConverterIncludesEng,ItemRegularLInk,ItemRegularImage&q=ConverterID,equals,${id}`
    );
  if (getLanguage() === "es-MX")
    return axios.get(
      apiUrlSF +
        `/dtExtensions/${dtConverter}?fields=ConverterCarrouselImage,ConverterCode,ConverterDescSpa,ConverterRegularPrice,ConverterSpecialPrice,ConverterIncludesSpa,ItemRegularLInk,ItemRegularImage&q=ConverterID,equals,${id}`
    );
}

export function getWheater(m) {
  let lang = "";
  if (getLanguage() === "es-MX") {
    lang = "&lang=es";
  }
  return m === "f"
    ? axios.get(apiWheater + lang)
    : axios.get(apiWheaterC + lang);
}

export function getInformationFromDEByPeopleID(id) {
  return axios.get(
    apiUrlSF +
      `/dtExtensions/${dtAccountSalesforceSync}?fields=RRC_PeopleId__c,FirstName,Name,PersonEmail&q=RRC_PeopleId__c,equals,${id}`
  );
}

export function sendEmailMessage(params) {
  let data = {
    ...params,
    SubscriberKey: "icanul@royalresorts.com",
    EmailAddress: "icanul@royalresorts.com",
  };
  return axios.post(apiUrlSF + `/dtExtensions/${dtSpecialClients}`, data);
}

export async function setPreferencesToCRM(
  callback = () => {},
  callbackE = () => {}
) {
  let preferences = getExperiencesSelected();
  if (preferences.length > 0) {
    let dataRequest = {
      PersonContactId: getCookieForm("contactID", getLanguage()),
      RRC_PreferenceType__c: "INTERE",
      records: [],
    };
    preferences.map((p) => {
      dataRequest.records.push({ RRC_Preference__c: p.code });
      return true;
    });

    const token = await axios
      .post(apiUrlSF + `/CRM/getTokenByServer`)
      .then((responseT) => {
        axios({
          method: "post",
          url: apiUrlSF + `/CRM/setPreferences`,
          data: dataRequest,
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            Authorization: `Bearer ${responseT.data.token.access_token}`,
          },
        })
          .then((response) => {
            if (response.data.code >= 0) {
              callback();
            } else {
              callbackE(response.data.Error);
            }
          })
          .catch((Err) => {
            callbackE(Err);
          });
      });
    return token;
  }
}

export async function setTaskToCRM({ stayId, time, date, tour }) {
  let dataRequest = {
    stayId: stayId,
    contactId: getCookieForm("contactID", getLanguage()),
    date: date,
    time: time,
    tour: tour,
  };

  const answer = await axios({
    method: "post",
    url: apiUrlSF + `/CRM/newTask`,
    data: dataRequest,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });

  return answer;
}

//http://desarrollo.apisalesforce.com/dtExtensions/RRC_Stay__c_Salesforce?fields=Id,OwnerId,RRC_LegacyStayId__c&q=RRC_LegacyStayId__c,equals,7407822//obtener datos de DE Sincronizada

//Con los datos obtenidos.
//http://desarrollo.apisalesforce.com/CRM/Task via POST
// {
//   "OwnerId": "005f2000009W63fAAC",// OwnerId peticion anterior
//   "Status" : "Open", // fijo
//   "Description" : "Appoinment Date : 2021-11-27 08:00",// texto proporcionado
//   "Subject": "Tarea creada automaticamente por proceso de journey",//texto proporcionado
//   "TaskSubtype": "Call",// fijo
//   "WhoId": "003f200002oKy2XAAS",// cookie ContactID
//   "WhatId": "a0h5w00000ofhlHAAQ"// id de la peticion anterior
// }
