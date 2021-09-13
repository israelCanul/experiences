import { useEffect, useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import { setMinutes, setHours, add, subDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import arrowdown from "../animations/arrow-down-thin.svg";
import { Fragment } from "react";
import { getCookieForm } from "../libs/cookieManager";
import { getLanguage } from "../libs/language";
import {
  formatingDateFromCRM,
  getTimeInString,
  getDateInString,
} from "../libs/helpers";

const Book = ({ setBook = () => {}, waves = null }) => {
  const [bookdate, setBookDate] = useState(null);
  const [booktime, setBooktime] = useState(null);
  const [filterTime, setFilter] = useState(null);

  useEffect(() => {
    if (waves !== null && bookdate !== null) {
      let newTimesForDate = [];
      waves.map((wave) => {
        let waveDate = new Date(formatingDateFromCRM(wave.RRC_Date__c));
        let controlDate = bookdate;
        // console.log(waveDate.toISOString());
        // console.log(controlDate, controlDate.getTime());
        // console.log(wave);
        // console.log(waveDate, waveDate.getTime());
        if (
          waveDate.getDate() === controlDate.getDate() &&
          waveDate.getMonth() === controlDate.getMonth() &&
          waveDate.getFullYear() === controlDate.getFullYear()
        ) {
          // console.log("aqui");
          let temWave = new Date(
            Date.parse(wave.RRC_Date__c + "T" + wave.RRC_Time__c)
          );
          waveDate.setHours(temWave.getUTCHours());
          waveDate.setMinutes(temWave.getUTCMinutes());
          //waveDate.setSeconds(temWave.getUTCSeconds());
          newTimesForDate.push(waveDate);
        }
      });
      setFilter(newTimesForDate);
      //console.log("olas", newTimesForDate);
    }
  }, [bookdate, waves]);
  var checkInDate = getCookieForm("checkInDate", getLanguage());
  var checkOutDate = getCookieForm("checkOutDate", getLanguage());

  const filterPassedTime = (time) => {
    if (filterTime !== null) {
      const selectedDate = new Date(time);
      var resultFilter = filterTime.filter((filter) => {
        return (
          filter.getUTCHours() === selectedDate.getUTCHours() &&
          filter.getUTCMinutes() === selectedDate.getUTCMinutes()
        );
      });
      return resultFilter.length > 0;
    }
  };

  useEffect(() => {
    if (bookdate !== null && booktime !== null) {
      //console.log(bookdate);
      // console.log(bookdate.getUTC);
      // console.log(booktime);
      setBook({
        d: getTimeInString(bookdate)[0],
        t: getTimeInString(booktime)[1],
      });
    }
  }, [bookdate, booktime, setBook]);

  return (
    <div className="booksection">
      <h3>Book your appointment</h3>
      <div className="booksection_wrapper">
        <p>
          As part of your vacation package, you will know our incredible Royal
          Resorts world product.
        </p>
        <div className="datepickersection">
          {waves ? (
            <Fragment>
              <div className="date picker">
                <DatePicker
                  placeholderText="Choose a date"
                  selected={bookdate}
                  dateFormat="MM-dd-yyyy"
                  minDate={add(new Date(checkInDate), { days: 1 })}
                  maxDate={subDays(new Date(checkOutDate), 1)}
                  onChange={(date) => {
                    //console.log("aqui en date");
                    setBooktime(null);
                    setBookDate(date);
                    setBook(null);
                  }}
                  customInput={<MyInput />}
                />
              </div>
              <div className="time picker">
                {booktime ? (
                  <DatePicker
                    placeholderText="Choose a Time"
                    selected={booktime}
                    onChange={(date) => setBooktime(date)}
                    showTimeSelect={true}
                    showTimeSelectOnly
                    timeIntervals={30}
                    // minTime={setHours(setMinutes(new Date(), 0), 17)}
                    // maxTime={setHours(setMinutes(new Date(), 30), 20)}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    filterTime={filterPassedTime}
                    customInput={<MyInput />}
                  />
                ) : (
                  <DatePicker
                    placeholderText="Choose a Time"
                    selected={booktime}
                    onChange={(date) => setBooktime(date)}
                    showTimeSelect={true}
                    showTimeSelectOnly
                    timeIntervals={30}
                    // minTime={setHours(setMinutes(new Date(), 0), 17)}
                    // maxTime={setHours(setMinutes(new Date(), 30), 20)}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    filterTime={filterPassedTime}
                    customInput={<MyInput />}
                  />
                )}
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div className="date picker">
                <DatePicker
                  placeholderText="Choose a date"
                  dateFormat="MM-dd-yyyy"
                  disabled
                  customInput={<MyInput />}
                />
              </div>
              <div className="time picker">
                <DatePicker
                  disabled
                  placeholderText="Choose a Time"
                  showTimeSelectOnly
                  timeIntervals={30}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  customInput={<MyInput />}
                />
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

const MyInput = forwardRef(({ value, onClick, placeholder }, ref) => (
  <button className="custom-input" onClick={onClick} ref={ref}>
    <span>{value ? value : placeholder}</span>
    <img width="16" height="16" src={arrowdown} alt="arrow down" />
  </button>
));

export default Book;
