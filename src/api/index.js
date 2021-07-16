import axios from "axios";
import { apiUrl } from "../libs/config";

export function getExperiences() {
  return axios.get(apiUrl + "/temporal/experiences.json");
}
