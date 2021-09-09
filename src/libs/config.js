export const apiUrl = process.env.NODE_ENV !== "production" ? "" : "";
export const apiUrlSF =
  process.env.NODE_ENV !== "production"
    ? "http://desarrollo.apisalesforce.com"
    : "http://desarrollo.apisalesforce.com";
export const apiWheater =
  process.env.NODE_ENV !== "production"
    ? "https://api.openweathermap.org/data/2.5/forecast?id=3531673&APPID=cb2558da57ff93c9bd45f6c9fbd8e6ea&units=imperial"
    : "https://api.openweathermap.org/data/2.5/forecast?id=3531673&APPID=cb2558da57ff93c9bd45f6c9fbd8e6ea&units=imperial";
export const apiWheaterC =
  process.env.NODE_ENV !== "production"
    ? "https://api.openweathermap.org/data/2.5/forecast?id=3531673&APPID=cb2558da57ff93c9bd45f6c9fbd8e6ea&units=metric"
    : "https://api.openweathermap.org/data/2.5/forecast?id=3531673&APPID=cb2558da57ff93c9bd45f6c9fbd8e6ea&units=metric";

export const folderIconsWeather =
  "https://www.royalresorts.com/experiences/img/";

export const dtConverterClass =
  process.env.NODE_ENV !== "production"
    ? "FCE9536B-5642-460C-8DA0-5229762ECF26"
    : "FCE9536B-5642-460C-8DA0-5229762ECF26";

export const dtConverterTransaction =
  process.env.NODE_ENV !== "production"
    ? "1F1DEC7F-4731-40E3-9644-7CAC7EE8FF03"
    : "1F1DEC7F-4731-40E3-9644-7CAC7EE8FF03";

export const dtConverter =
  process.env.NODE_ENV !== "production"
    ? "9B63AB77-2647-4054-BABD-76E631650032"
    : "9B63AB77-2647-4054-BABD-76E631650032";
