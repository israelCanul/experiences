import { useEffect, useState } from "react";
import Collapser from "./collapser/collapser";
import RadioButton from "./radio_button";

const ContinueSummary = ({ agree, setAgree, setTerms }) => {
  const [terms, setAllTerms] = useState({
    f: false,
    s: false,
    t: false,
    l: false,
  });

  useEffect(() => {
    if (
      terms.f === true &&
      terms.s === true &&
      terms.t === true &&
      terms.l === true
    ) {
      setTerms(true);
    } else {
      setTerms(false);
    }
  }, [terms, setAllTerms]);

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
          I have read and agree to the{" "}
          <a href="/terms">Terms &amp; Conditions</a>.
        </RadioButton>
        <Collapser
          className="termsandconditions"
          active={agree === true ? true : false}
        >
          <p>
            I meet the following requirements to be able to participate in THIS
            PROMOTION. <br />
            <br />
            THIS OFFER INCLUDES A.
          </p>
          <div className="terms">
            <div className="term">
              {/* <img width="17" height="15" src="/img/arrow.png" alt="arrow" /> */}
              <RadioButton
                active={terms.f}
                isCheckbox={true}
                callback={() => {
                  setAllTerms({ ...terms, f: !terms.f });
                }}
              >
                IF MARRIED, BOTH HUSBAND AND WIFE, MUST ATTEND A 90-MINUTE
                GUIDED TOUR AND SALES PRESENTATION
              </RadioButton>
            </div>
            <div className="term">
              {/* <img width="17" height="15" src="/img/arrow.png" alt="arrow" /> */}
              <RadioButton
                active={terms.s}
                isCheckbox={true}
                callback={() => {
                  setAllTerms({ ...terms, s: !terms.s });
                }}
              >
                THEY MUST PRESENT A VALID, MAJOR CREDIT CARD (AMEX, VISA OR
                MASTERCARD) AT THE TIME OF PRESENTATION AND A GOVERNMENT ISSUED
                ID (PASSPORT CARDS DO NOT APPLY)
              </RadioButton>
            </div>
            <div className="term">
              {/* <img width="17" height="15" src="/img/arrow.png" alt="arrow" /> */}
              <RadioButton
                active={terms.t}
                isCheckbox={true}
                callback={() => {
                  setAllTerms({ ...terms, t: !terms.t });
                }}
              >
                WE ACCEPT AND UNDERSTAND THAT IF WE DO NOT ATTEND THE
                AFOREMENTIONED PRESENTATION, WE WILL BE CHARGED THE NIGHTLY RACK
                RATE
              </RadioButton>
            </div>
            <div className="term">
              {/* <img width="17" height="15" src="/img/arrow.png" alt="arrow" /> */}
              <RadioButton
                active={terms.l}
                isCheckbox={true}
                callback={() => {
                  setAllTerms({ ...terms, l: !terms.l });
                }}
              >
                I/WE HAVE READ AND AGREE TO THE TERMS AND CONDITIONS (HYPERLINK)
              </RadioButton>
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
          I wish to pay the regular rate
        </RadioButton>
      </div>
    </div>
  );
};

export default ContinueSummary;
