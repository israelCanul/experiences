import style from "../scss/radiobutton.module.scss";
import { getLanguage } from "../libs/language";
import { getCookieForm } from "../libs/cookieManager";

const RadioButton = ({
  active = null,
  callback = (e) => {},
  children = null,
  isCheckbox = false,
}) => {
  let template = getCookieForm("template", getLanguage());
  console.log(template);
  return (
    <div
      className={
        " input " +
        style.input +
        ` ${template != null && template === "R1" ? style.R1Template : ""} `
      }
      onClick={() => {
        callback(true);
      }}
    >
      <div
        className={` ${
          template != null && template === "R1"
            ? style.radiobuttonR1
            : style.radiobutton
        } ${
          isCheckbox === true
            ? ` ${
                template != null && template === "R1"
                  ? style.checkBoxR1
                  : style.checkBox
              } `
            : ""
        }  ${
          active !== null
            ? active === true
              ? ` ${
                  template != null && template === "R1"
                    ? style.activeR1
                    : style.active
                } `
              : ""
            : ""
        }`}
      ></div>
      <span>{children}</span>
    </div>
  );
};
export default RadioButton;
