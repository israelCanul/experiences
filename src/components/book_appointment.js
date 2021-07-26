import { useEffect, useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import { setMinutes, setHours, add } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import arrowdown from "../animations/arrow-down-thin.svg";

const Book = ({ setBook }) => {
  const [bookdate, setBookDate] = useState(null);
  const [booktime, setBooktime] = useState(null);
  useEffect(() => {
    if (bookdate !== null && booktime !== null) {
      setBook({ d: bookdate, t: booktime });
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
          <div className="date picker">
            <DatePicker
              placeholderText="Choose a date"
              selected={bookdate}
              dateFormat="MM/dd/yyyy"
              minDate={add(new Date(), { days: 2 })}
              onChange={(date) => setBookDate(date)}
              customInput={<MyInput />}
            />
          </div>
          <div className="time picker">
            <DatePicker
              placeholderText="Choose a Time"
              selected={booktime}
              onChange={(date) => setBooktime(date)}
              showTimeSelect={true}
              showTimeSelectOnly
              timeIntervals={30}
              minTime={setHours(setMinutes(new Date(), 0), 17)}
              maxTime={setHours(setMinutes(new Date(), 30), 20)}
              timeCaption="Time"
              dateFormat="h:mm aa"
              customInput={<MyInput />}
            />
          </div>
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
