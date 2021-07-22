import style from "../scss/radiobutton.module.scss";
const RadioButton = ({
  active = null,
  callback = (e) => {},
  children = null,
}) => {
  return (
    <div
      className={"input " + style.input}
      onClick={() => {
        callback(true);
      }}
    >
      <div
        className={` ${style.radiobutton}  ${
          active !== null ? (active === true ? style.active : "") : ""
        }`}
      ></div>
      <span>{children}</span>
    </div>
  );
};
export default RadioButton;
