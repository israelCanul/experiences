import DatePicker from "react-datepicker";
import { forwardRef, useState } from "react";
import Select from "react-select";
import { add } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import "../../scss/formularioevents.scss";
import arrowdown from "../../animations/arrow-down-thin-white.svg";
import { sendEmailMessage } from "../../api";

const options = [
  { value: "ROMANTIC DINNER", label: "ROMANTIC DINNER" },
  { value: "ROMANTIC ROOM DECOR", label: "ROMANTIC ROOM DECOR" },
  { value: "BIRTHDAY DECORATION", label: "BIRTHDAY DECORATION" },
];

const FormularioEvents = ({ data }) => {
  const [selectedP, setSelectedP] = useState();
  const [bookdate, setBookdate] = useState(null);
  const [error, setError] = useState(null);

  const onClick = (e) => {
    e.preventDefault();
    if (data !== null) {
      let object = {
        package: selectedP.value,
        name: data.Name,
        email: data.PersonEmail,
        date: bookdate,
        peopleID: data.RRC_PeopleId__c,
      };
      sendEmailMessage(object)
        .then((response) => {
          console.log(response);
          setError(false);
        })
        .catch((err) => {
          console.log(err);
          setError(true);
        });
    }
  };
  return (
    <div className="formulario">
      <div className="title">
        <h4>
          %%Username%%, please fill out this form and one of our representatives
          will contact you
        </h4>
      </div>
      <div className="form">
        <div className="dataform">
          <Select
            onChange={(selectedOptions) => setSelectedP(selectedOptions)}
            placeholder="Choose a package"
            options={options}
          />
        </div>
        <div className="dataform date">
          <DatePicker
            placeholderText="Choose a date"
            selected={bookdate}
            dateFormat="MM-dd-yyyy"
            minDate={add(new Date(), { days: 1 })}
            onChange={(date) => {
              setBookdate(date);
            }}
            customInput={<MyInput />}
          />
        </div>
      </div>
      <div className="actions active">
        <a onClick={onClick} href="/">
          Send
        </a>
      </div>
      {error !== null && error === false ? (
        <div className="message operation">
          <p>
            <strong>Your information has been sent.</strong>
            <br />
            One of our representatives will contact you soon
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
const MyInput = forwardRef(({ value, onClick, placeholder }, ref) => (
  <button className="custom-input" onClick={onClick} ref={ref}>
    <span>{value ? value : placeholder}</span>
    <img width="16" height="16" src={arrowdown} alt="arrow down" />
  </button>
));

export default FormularioEvents;
