import axios from "axios";
import {
  apiUrlSF,
  apiWheater,
  apiWheaterC,
  dtConverterClass,
  dtConverterTransaction,
  dtConverter,
} from "../libs/config";
import { getLanguage } from "../libs/language";

export function getParamsToContinue(peopleID) {
  return axios.get(
    apiUrlSF +
      `/dtExtensions/${dtConverterTransaction}?fields=StayID,ContactID,ConverterID,Resort,CheckInDate,CheckOutDate&q=PeopleID,equals,${peopleID}`
  );
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
  if (getLanguage() === "en-US")
    return axios({
      method: "post",
      url: apiUrlSF + `/dtExtensions/${dtConverterTransaction}`,
      data: params,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    });

  if (getLanguage() === "es-MX")
    return axios({
      method: "post",
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
  return m === "f" ? axios.get(apiWheater) : axios.get(apiWheaterC);
}
