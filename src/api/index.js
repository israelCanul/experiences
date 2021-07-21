import axios from "axios";
import { apiUrl } from "../libs/config";

export function getExperiences() {
  return axios.get(apiUrl + "/temporal/experiences.json");
}
export function getTours() {
  return axios.get(apiUrl + "/temporal/tours.json");
}
