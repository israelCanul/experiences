import RadioButton from "./radio_button";
const AboutStay = ({ celebration = "", setCelebration }) => {
  return (
    <div className="celebrationsSection">
      <h3>ABOUT YOUR STAY</h3>
      <div className="celebrationsSection_wrapper">
        <h4>Are you celebrating anything special during your stay?</h4>
        <div className="celebrations">
          <RadioButton
            active={celebration === "WEDDING"}
            callback={() => setCelebration("WEDDING")}
          >
            Wedding Anniversary
          </RadioButton>
          <RadioButton
            active={celebration === "GRADUATION"}
            callback={() => setCelebration("GRADUATION")}
          >
            Graduation
          </RadioButton>
          <RadioButton
            active={celebration === "MARRIAGE"}
            callback={() => setCelebration("MARRIAGE")}
          >
            Engagement
          </RadioButton>
          <RadioButton
            active={celebration === "OTHER"}
            callback={() => setCelebration("OTHER")}
          >
            Other
          </RadioButton>
          <RadioButton
            active={celebration === "BIRTHDAY"}
            callback={() => setCelebration("BIRTHDAY")}
          >
            Birthday
          </RadioButton>
          <RadioButton
            active={celebration === "NOANSWER"}
            callback={() => setCelebration("NOANSWER")}
          >
            No or I prefer not to answer
          </RadioButton>
        </div>
      </div>
    </div>
  );
};
export default AboutStay;
