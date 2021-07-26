export const apiUrl = process.env.NODE_ENV !== "production" ? "" : "";
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
