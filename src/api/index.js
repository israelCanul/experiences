import axios from "axios";
import { apiUrl, apiUrlSF, apiWheater, apiWheaterC } from "../libs/config";
import { getLanguage } from "../libs/language";

export function getExperiences() {
  if (getLanguage() === "en-US")
    return axios.get(
      apiUrlSF +
        "/dtExtensions/FCE9536B-5642-460C-8DA0-5229762ECF26?fields=ConverterClassCode,ConverterClassID,ConverterClassImage,ConverterClassIcon,ConverterClassSeq,ConverterClassDescEng"
    );
  if (getLanguage() === "es-MX")
    return axios.get(
      apiUrlSF +
        "/dtExtensions/FCE9536B-5642-460C-8DA0-5229762ECF26?fields=ConverterClassCode,ConverterClassID,ConverterClassImage,ConverterClassIcon,ConverterClassSeq,ConverterClassDescSpa"
    );
}
export function getConverters() {
  if (getLanguage() === "en-US")
    return axios.get(
      apiUrlSF +
        "/dtExtensions/9B63AB77-2647-4054-BABD-76E631650032?fields=ConverterID,ConverterCode,ConverterDescEng,ConverterDescSpa,ConverterProperty,ConverterClassID,ConverterImage,ConverterRegularPrice,ConverterSpecialPrice,ConverterSeq,ConverterCarrouselImage,ConverterIncludesEng,ConverterIncludesSpa,ItemRegularLInk,ItemRegularImage"
    );
  if (getLanguage() === "es-MX")
    return axios.get(
      apiUrlSF +
        "/dtExtensions/9B63AB77-2647-4054-BABD-76E631650032?fields=ConverterID,ConverterCode,ConverterDescEng,ConverterDescSpa,ConverterProperty,ConverterClassID,ConverterImage,ConverterRegularPrice,ConverterSpecialPrice,ConverterSeq,ConverterCarrouselImage,ConverterIncludesEng,ConverterIncludesSpa,ItemRegularLInk,ItemRegularImage"
    );
}
export function getTours() {
  if (getLanguage() === "en-US")
    return axios.get(
      apiUrlSF +
        "/dtExtensions/9B63AB77-2647-4054-BABD-76E631650032?fields=ConverterID,ConverterCode,ConverterDescEng,ConverterDescSpa,ConverterProperty,ConverterClassID,ConverterImage,ConverterRegularPrice,ConverterSpecialPrice,ConverterSeq,ConverterCarrouselImage,ConverterIncludesEng,ConverterIncludesSpa,ItemRegularLInk,ItemRegularImage"
    );
  if (getLanguage() === "es-MX")
    return axios.get(
      apiUrlSF +
        "/dtExtensions/9B63AB77-2647-4054-BABD-76E631650032?fields=ConverterID,ConverterCode,ConverterDescEng,ConverterDescSpa,ConverterProperty,ConverterClassID,ConverterImage,ConverterRegularPrice,ConverterSpecialPrice,ConverterSeq,ConverterCarrouselImage,ConverterIncludesEng,ConverterIncludesSpa,ItemRegularLInk,ItemRegularImage"
    );
}
export function getTourSelected(id) {
  if (getLanguage() === "en-US")
    return axios.get(
      apiUrlSF +
        "/dtExtensions/9B63AB77-2647-4054-BABD-76E631650032?fields=ConverterCarrouselImage,ConverterCode,ConverterDescEng,ConverterRegularPrice,ConverterSpecialPrice,ConverterIncludesEng,ItemRegularLInk,ItemRegularImage&q=ConverterID,equals," +
        id
    );
  if (getLanguage() === "es-MX")
    return axios.get(
      apiUrlSF +
        "/dtExtensions/9B63AB77-2647-4054-BABD-76E631650032?fields=ConverterCarrouselImage,ConverterCode,ConverterDescSpa,ConverterRegularPrice,ConverterSpecialPrice,ConverterIncludesSpa,ItemRegularLInk,ItemRegularImage&q=ConverterID,equals," +
        id
    );
}

export function getWheater(m) {
  return m === "f" ? axios.get(apiWheater) : axios.get(apiWheaterC);
}
