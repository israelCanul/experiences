import { folderIconsWeather } from "../libs/config";
import { getLanguage } from "../libs/language";
import { Fragment, useState } from "react";
const Weather = ({ daysF = [], daysC = [], city = "" }) => {
  const [selected, setSelected] = useState(0);
  let img = null;
  if (daysF.length > 0 && daysC.length > 0) {
    console.log(daysF[selected]);
    img = (
      <div className="temperatura">
        <img
          width="70"
          height="70"
          src={
            folderIconsWeather +
            "ICON_WEATHER/" +
            daysF[selected].w.weather[0].icon +
            ".png"
          }
          alt="icon"
        />
        <p>{`${daysF[selected].w.main.temp}°F / ${daysC[selected].w.main.temp}°C`}</p>
      </div>
    );
  }
  const thereAreInfo = daysF.length > 0 && daysC.length > 0;

  let renderDays = [];
  if (thereAreInfo) {
    renderDays = daysF.map((day, id) => {
      return (
        <div
          key={id}
          onClick={() => setSelected(id)}
          className={`day ${selected === id ? "selected" : ""}`}
        >
          <img
            width="35"
            height="35"
            src={
              folderIconsWeather +
              "ICON_WEATHER/" +
              day.w.weather[0].icon +
              ".png"
            }
            alt="icon day"
          />
          <span>
            {day.m
              .locale(getLanguage() === "en-US" ? "en" : "es")
              .format("ddd")}
          </span>
        </div>
      );
    });
  }

  return (
    <Fragment>
      <div className="weatherSelected">
        {img}
        <div className="city">
          {city}
          <span> | </span>
          {thereAreInfo
            ? daysF[selected].m
                .locale(getLanguage() === "en-US" ? "en" : "es")
                .format("dddd, MMM DD, YYYY")
            : ""}
        </div>
      </div>
      <div className="info">
        <div className="wind">
          <img
            width="43"
            height="23"
            src={folderIconsWeather + "wind-icon.png"}
            alt="wind icon"
          />
          {thereAreInfo ? daysF[selected].w.wind.speed + " km/h" : ""}
        </div>
        <div className="humidity">
          <img
            width="19"
            height="30"
            src={folderIconsWeather + "humedity-icon.png"}
            alt="wind icon"
          />
          {thereAreInfo ? daysF[selected].w.main.humidity + " %" : ""}
        </div>
      </div>
      <div className="list">{renderDays}</div>
    </Fragment>
  );
};
export default Weather;
