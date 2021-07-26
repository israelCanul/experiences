import axios from "axios";
import { apiUrl, apiWheater, apiWheaterC } from "../libs/config";

export function getExperiences() {
  return axios.get(apiUrl + "/temporal/experiences.json");
}
export function getTours() {
  return axios.get(apiUrl + "/temporal/tours.json");
}
export function getWheater(m) {
  return m === "f" ? axios.get(apiWheater) : axios.get(apiWheaterC);
}
