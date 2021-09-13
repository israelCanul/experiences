import {
  getExperiences,
  getTours,
  getWheater,
  getTourSelected,
  setDataToMC,
} from "../api/index";
import moment from "moment";
import { getAllParamsFromUrl } from "../libs/helpers";
import { useState, useEffect } from "react";
import { getCookieForm } from "../libs/cookieManager";
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
  const [tour, setTour] = useState(null);
  useEffect(() => {
    let cancel = false;
    if (tour === null && id !== null && id !== "") {
      getTourSelected(id).then((res) => {
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
  });
  return tour;
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

// function useWaves() {
//   const [waves, setWaves] = useState(null);
//   useEffect(() => {
//     let cancel = false;
//     if (waves == null) {
//       getWaves("f").then((response) => {
//         let res = response.data;
//         let city = res.city.name + ", " + res.city.country;
//         // setwaves({ city: city, listF: getListFromWeather(res) });

//         getWaves().then((responseC) => {
//           let resC = responseC.data;
//           setWaves({
//             city: city,
//             listF: getListFromWeather(res),
//             listC: getListFromWeather(resC),
//           });
//         });

//         if (cancel) return;
//       });
//       return () => {
//         cancel = true;
//       };
//     }
//   });
//   return waves;
// }
