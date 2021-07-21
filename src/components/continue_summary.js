import { createRef, useEffect, useState } from "react";

const ContinueSummary = () => {
  const [agree, setAgree] = useState(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const termsSection = createRef();
  useEffect(() => {
    if (size.w === 0 && size.h === 0) {
      setSize({
        h: termsSection.current.clientHeight + 25,
        w: termsSection.current.clientWidth,
      });
      termsSection.current.style.height = 0 + "px";
      termsSection.current.style.width = 0 + "px";
    }
    if (agree !== null && agree === true) {
      termsSection.current.style.height = size.h + "px";
      termsSection.current.style.width = size.w + "px";
    } else if (agree !== null && agree === false) {
      termsSection.current.style.height = 0 + "px";
      termsSection.current.style.width = 0 + "px";
    }
  }, [size.w, size.h, termsSection, agree]);
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
        <div
          className="input"
          onClick={() => {
            setAgree(true);
          }}
        >
          <div
            className={`radiobutton ${
              agree !== null ? (agree === true ? "active" : "") : ""
            }`}
          ></div>
          <span>
            I have read and agree to the{" "}
            <a href="/terms">Terms & Conditions.</a>
          </span>
        </div>
        <div
          className={`termsandconditions ${
            agree !== null ? (agree === true ? "active" : "") : ""
          }`}
          ref={termsSection}
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
        </div>
      </div>
      <div className="or">Or</div>
      <div className="agreeregular">
        <div
          className="input"
          onClick={() => {
            setAgree(false);
          }}
        >
          <div
            className={`radiobutton ${
              agree !== null ? (agree !== true ? "active" : "") : ""
            }`}
          ></div>{" "}
          <span>I wish to pay regular price</span>
        </div>
      </div>
    </div>
  );
};

export default ContinueSummary;
