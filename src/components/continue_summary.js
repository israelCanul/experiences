import Collapser from "./collapser";
import RadioButton from "./radio_button";

const ContinueSummary = ({ agree, setAgree }) => {
  return (
    <div className="selectType">
      <div className="noteSection">
        <p>
          <span className="note">Note: </span> By choosing this Special Rate, I
          commit to attending a 120 minute preview of the new benefits Royal
          Resorts SIgnature Club has in store.
        </p>
      </div>
      <div className="agreeterms">
        <RadioButton
          active={agree}
          callback={() => {
            setAgree(true);
          }}
        >
          I have read and agree to the <a href="/terms">Terms & Conditions.</a>
        </RadioButton>
        <Collapser
          className="termsandconditions"
          active={agree === true ? true : false}
        >
          <p>
            I meet the following list of requirements to be able to participate
            in this promotion:
          </p>
          <div className="terms">
            <div className="term">
              <img width="17" height="15" src="/img/arrow.png" alt="arrow" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="term">
              <img width="17" height="15" src="/img/arrow.png" alt="arrow" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="term">
              <img width="17" height="15" src="/img/arrow.png" alt="arrow" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="term">
              <img width="17" height="15" src="/img/arrow.png" alt="arrow" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
        </Collapser>
      </div>
      <div className="or">Or</div>
      <div className="agreeregular">
        <RadioButton
          active={agree !== null ? !agree : null}
          callback={() => {
            setAgree(false);
          }}
        >
          I wish to pay regular price
        </RadioButton>
      </div>
    </div>
  );
};

export default ContinueSummary;
