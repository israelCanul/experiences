import { useEffect, useState } from "react";
import { getTexto } from "../libs/language";
import Collapser from "./collapser/collapser";
import RadioButton from "./radio_button";

const ContinueSummary = ({ agree, setAgree, setTerms }) => {
  const [terms, setAllTerms] = useState({
    f: false,
    s: false,
    t: false,
    l: false,
  });
  const [openTerms, setOpenTerms] = useState(false);

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
          <span className="note">{getTexto("Note")}: </span>
          {getTexto(
            "By choosing this Special Rate, I commit to attending a 120 minute preview of the new benefits Royal Resorts SIgnature Club has in store."
          )}
        </p>
      </div>
      <div className="agreeterms">
        <RadioButton
          active={agree}
          callback={() => {
            setAgree(true);
          }}
        >
          {getTexto("I have read and agree to the ")}
          <a
            href="/terms"
            onClick={(e) => {
              e.preventDefault();
              setOpenTerms(true);
            }}
          >
            {getTexto("Terms & Conditions")}
          </a>
          .
        </RadioButton>
        <Collapser
          className="termsandconditions"
          active={agree === true ? true : false}
        >
          <p>
            {getTexto(
              "I meet the following requirements to be able to participate in THIS PROMOTION."
            )}
            <br />
            <br />
            {getTexto("THIS OFFER INCLUDES A.")}
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
                {getTexto(
                  "IF MARRIED, BOTH HUSBAND AND WIFE, MUST ATTEND A 90-MINUTE GUIDED TOUR AND SALES PRESENTATION"
                )}
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
                {getTexto(
                  "THEY MUST PRESENT A VALID, MAJOR CREDIT CARD (AMEX, VISA OR MASTERCARD) AT THE TIME OF PRESENTATION AND A GOVERNMENT ISSUED ID (PASSPORT CARDS DO NOT APPLY)"
                )}
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
                {getTexto(
                  "WE ACCEPT AND UNDERSTAND THAT IF WE DO NOT ATTEND THE AFOREMENTIONED PRESENTATION, WE WILL BE CHARGED THE NIGHTLY RACK RATE"
                )}
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
                {getTexto("I/WE HAVE READ AND AGREE TO THE ")}
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTerms(true);
                  }}
                >
                  {getTexto("TERMS AND CONDITIONS")}
                </a>
              </RadioButton>
            </div>
          </div>
        </Collapser>
      </div>
      <div className="or">{getTexto("Or")}</div>
      <div className="agreeregular">
        <RadioButton
          active={agree !== null ? !agree : null}
          callback={() => {
            setAgree(false);
          }}
        >
          {getTexto("I do not accept the terms and conditions")}
        </RadioButton>
      </div>
      <Modal open={openTerms} toggleModal={setOpenTerms} />
    </div>
  );
};

const Modal = ({ open = false, toggleModal = () => {} }) => {
  return (
    <div className={`modal ${open === true ? "active" : "ss"}`}>
      <div className="modal_background"></div>
      <div className="modal_contenido">
        <div className="modal_action">
          <div
            className="close"
            onClick={() => {
              toggleModal(false);
            }}
          ></div>
        </div>
        <h3>{getTexto("TERMS AND CONDITIONS")}!</h3>
        <p style={{ textAlign: "justify", padding: "0px 15px" }}>
          {getTexto(
            "Guests at The Royal Cancun, The Royal Sands, The Royal Haciendas and Royal Uno must be over 28 years of age and have an annual income of US$70,000 or more (combined annual income if married). All guests must be currently employed and must be credit worthy and bring a major credit (not debit) card. Both husband and wife must attend a 90-minute guided tour and sales presentation. This material is being used for the purpose of promoting a Travel Club program, although you are under no obligation to purchase in order to receive your discounted vacation package. Ineligibility for this promotional offer should not be interpreted as ineligibility to purchase. Failure to attend the guided tour and sales presentation will lead to The Royal Cancun, The Royal Sands, The Royal Haciendas and Royal Uno charging the corresponding applicable rack rates. This promotion is not valid for groups (two or more affiliated couples scheduled for the same or overlapping dates). Not valid in conjunction with any other offers from Royal Resorts. The recipient is responsible for payment of any government-imposed taxes directly related to the service being provided and any personal expenses incurred when utilizing this offer. THIS MATERIAL IS NOT AN OFFER TO SELL NOR A SOLICITATION OF AN OFFER TO BUY TO RESIDENTS OF ANY STATE IN WHICH REGISTRATION REQUIREMENTS HAVE NOT BEEN FULFILLED."
          )}
        </p>
      </div>
    </div>
  );
};

export default ContinueSummary;
