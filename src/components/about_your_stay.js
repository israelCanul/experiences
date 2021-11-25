import { getTexto } from "../libs/language";
import RadioButton from "./radio_button";
const AboutStay = ({
  celebration = "",
  setCelebration = (cel) => {},
  isNotAplicable = null,
  continueHandler = () => {},
}) => {
  return (
    <div className="celebrationsSection">
      <h3>{getTexto("ABOUT YOUR STAY")}</h3>
      <div className="celebrationsSection_wrapper">
        <h4>
          {getTexto("Are you celebrating anything special during your stay?")}
        </h4>
        <div className="celebrations">
          <RadioButton
            active={celebration === "WEDDING"}
            callback={() => setCelebration("WEDDING")}
          >
            {getTexto("Wedding Anniversary")}
          </RadioButton>
          <RadioButton
            active={celebration === "GRADUATION"}
            callback={() => setCelebration("GRADUATION")}
          >
            {getTexto("Graduation")}
          </RadioButton>
          <RadioButton
            active={celebration === "MARRIAGE"}
            callback={() => setCelebration("MARRIAGE")}
          >
            {getTexto("Engagement")}
          </RadioButton>
          <RadioButton
            active={celebration === "OTHER"}
            callback={() => setCelebration("OTHER")}
          >
            {getTexto("Other")}
          </RadioButton>
          <RadioButton
            active={celebration === "BIRTHDAY"}
            callback={() => setCelebration("BIRTHDAY")}
          >
            {getTexto("Birthday")}
          </RadioButton>
          <RadioButton
            active={celebration === "NOANSWER"}
            callback={() => setCelebration("NOANSWER")}
          >
            {getTexto("No or I prefer not to answer")}
          </RadioButton>
        </div>
      </div>
      {isNotAplicable !== null ? (
        <div className="action">
          {celebration === "" ? (
            <a className="inactive" href="/">
              {getTexto("Continue")}
            </a>
          ) : (
            <a onClick={continueHandler} href="/">
              {getTexto("Continue")}
            </a>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default AboutStay;
