import {
  getExperiences,
  getTours,
  getWheater,
  getTourSelected,
  setDataToMC,
  getParamsToContinue,
  getInformationFromDEByPeopleID,
} from "../api/index";
import moment from "moment";
import { getAllParamsFromUrl, formatingDateFromMC } from "../libs/helpers";
import { useState, useEffect } from "react";
import { getCookieForm, saveParams } from "../libs/cookieManager";
import { getLanguage } from "../libs/language";
export function setDataMC(
  params = {},
  callback = () => {},
  callbackF = () => {}
) {
  setDataToMC(params)
    .then((res) => {
      if (parseInt(res.data.errorCode) >= 0) {
        callback();
      } else {
        callbackF(res.data.response);
      }
    })
    .catch((err) => {
      callbackF(err);
    });
}
export function useParamsContinue() {
  const [data, setData] = useState(null);
  let getParams = getAllParamsFromUrl();
  useEffect(() => {
    let cancel = false;
    if (data == null && getParams.peopleID) {
      getParamsToContinue(getParams.peopleID).then((res) => {
        if (cancel) return;

        res.data.results.map((result) => {
          if (
            getParams.contactID === result.ContactID &&
            getParams.stayID === result.StayID
          ) {
            let paramsBack = {
              checkInDate: formatingDateFromMC(result.CheckInDate),
              checkOutDate: formatingDateFromMC(result.CheckOutDate),
              resort: result.Resort,
              serviceID: result.ConverterID,
            };
            saveParams(paramsBack);
            setData(paramsBack);
          }
          return true;
        });
      });
      return () => {
        cancel = true;
      };
    }
  }, [data, getParams]);
  return data;
}
export function useExperiences() {
  const [experiences, setExperiences] = useState(null);
  useEffect(() => {
    let cancel = false;
    if (experiences == null) {
      getExperiences().then((res) => {
        if (cancel) return;
        let experiences = [];
        res.data.results.map((exp) => {
          let temp = {
            code: exp.ConverterClassCode,
            id: exp.ConverterClassID,
            name: exp.ConverterClassDescEng
              ? exp.ConverterClassDescEng
              : exp.ConverterClassDescSpa,
            icon: exp.ConverterClassIcon,
            image: exp.ConverterClassImage,
          };
          experiences.push(temp);
          return true;
        });
        setExperiences(experiences);
      });
      return () => {
        cancel = true;
      };
    }
  }, [experiences]);
  return experiences;
}
export function useQuery() {
  const [params, setParams] = useState();
  useEffect(() => {
    const parametros = getAllParamsFromUrl();
    setParams(parametros);
  }, []);
  return params;
}
export function useTours() {
  const [tours, setTours] = useState(null);
  useEffect(() => {
    let cancel = false;
    if (tours == null) {
      getTours().then((res) => {
        if (cancel) return;
        setTours(res.data.results);
      });
      return () => {
        cancel = true;
      };
    }
  });
  return tours;
}

export function useTourSelected(
  id = getCookieForm("serviceID", getLanguage())
) {
  const [tourSelected, setTour] = useState(null);
  const [refresh, setRefresh] = useState(null);
  let idTemp = id;
  const parametros = getAllParamsFromUrl();
  if (
    idTemp !== "" &&
    parametros.contactID &&
    parametros.peopleID &&
    parametros.stayID &&
    refresh === null
  ) {
    idTemp = null;
  }
  useEffect(() => {
    let cancel = false;
    if (tourSelected === null && idTemp !== null && idTemp !== "") {
      getTourSelected(idTemp).then((res) => {
        if (cancel) return;
        if (res.data.results.length > 0) {
          setTour({
            ...res.data.results[0],
            ConverterDesc: res.data.results[0].ConverterDescEng
              ? res.data.results[0].ConverterDescEng
              : res.data.results[0].ConverterDescSpa,
            ConverterIncludes: res.data.results[0].ConverterIncludesEng
              ? res.data.results[0].ConverterIncludesEng
              : res.data.results[0].ConverterIncludesSpa,
          });
        } else {
          setTour(false);
        }
      });
      return () => {
        cancel = true;
      };
    }
  }, [refresh, tourSelected, idTemp]);
  return [tourSelected, setRefresh];
}

export function useWheater() {
  const [wheater, setWheater] = useState(null);
  useEffect(() => {
    let cancel = false;
    if (wheater == null) {
      getWheater("f").then((response) => {
        let res = response.data;
        let city = res.city.name + ", " + res.city.country;
        // setWheater({ city: city, listF: getListFromWeather(res) });

        getWheater().then((responseC) => {
          let resC = responseC.data;
          setWheater({
            city: city,
            listF: getListFromWeather(res),
            listC: getListFromWeather(resC),
          });
        });

        if (cancel) return;
      });
      return () => {
        cancel = true;
      };
    }
  });
  return wheater;
}

function getListFromWeather(res) {
  var weatherDaysList = [];
  let result = "";
  for (let index = 0; index < 5; index++) {
    let dateToCompare = moment().add(index, "d").hours(15);
    if (index === 0) {
      result = res.list.find((o) => {
        let dateFormated = moment.unix(o.dt).utc();
        if (
          dateFormated.format("YYYY-MM-DD") ===
          dateToCompare.format("YYYY-MM-DD")
        ) {
          return o;
        } else {
          return null;
        }
      });
    } else {
      result = res.list.find((o) => {
        let dateFormated = moment.unix(o.dt).utc();
        if (
          dateFormated.format("YYYY-MM-DD, hA") ===
          dateToCompare.format("YYYY-MM-DD, hA")
        ) {
          return o;
        } else {
          return null;
        }
      });
    }
    if (result !== undefined) {
      weatherDaysList.push({ w: result, m: dateToCompare });
    }
  }
  return weatherDaysList;
}

export function useGetInfoAboutPeopleIDFromDT(id = null) {
  const [info, setInfo] = useState(null);
  const [people, setPeopleID] = useState(id);
  useEffect(() => {
    let cancel = false;
    if (info == null && people !== null) {
      getInformationFromDEByPeopleID(people).then((res) => {
        if (cancel) return;
        if (res.data.results.length > 0) {
          setInfo(res.data.results[0]);
        }
      });
      return () => {
        cancel = true;
      };
    }
  }, [people, info]);
  return [info, setPeopleID];
}
