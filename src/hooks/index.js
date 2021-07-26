import { getExperiences, getTours, getWheater } from "../api/index";
import moment from "moment";
import { getAllParamsFromUrl } from "../libs/helpers";
import { useState, useEffect } from "react";
export function useExperiences() {
  const [experiences, setExperiences] = useState(null);
  useEffect(() => {
    let cancel = false;
    if (experiences == null) {
      getExperiences().then((res) => {
        if (cancel) return;
        setExperiences(res.data);
      });
      return () => {
        cancel = true;
      };
    }
  });
  return experiences;
}
export function useQuery() {
  const [params, setParams] = useState(null);
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
        setTours(res.data);
      });
      return () => {
        cancel = true;
      };
    }
  });
  return tours;
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
        }
      });
    }
    if (result !== undefined) {
      weatherDaysList.push({ w: result, m: dateToCompare });
    }
    // console.log(weatherDaysList);
  }
  return weatherDaysList;
}
