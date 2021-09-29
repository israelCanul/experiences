import style from "../scss/radiobutton.module.scss";
const RadioButton = ({
  active = null,
  callback = (e) => {},
  children = null,
  isCheckbox = false,
}) => {
  return (
    <div
      className={" input " + style.input}
      onClick={() => {
        callback(true);
      }}
    >
      <div
        className={` ${style.radiobutton} ${
          isCheckbox === true ? style.checkBox : ""
        }  ${active !== null ? (active === true ? style.active : "") : ""}`}
      ></div>
      <span>{children}</span>
    </div>
  );
};
export default RadioButton;
