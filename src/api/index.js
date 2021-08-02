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
  // return axios.get(apiUrl + "/temporal/experiences.json");
}
export function getTours() {
  return axios.get(apiUrl + "/temporal/tours.json");
}
export function getWheater(m) {
  return m === "f" ? axios.get(apiWheater) : axios.get(apiWheaterC);
}
