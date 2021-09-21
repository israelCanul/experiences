import { useRef, useEffect } from "react";
import style from "../../scss/collapser.module.scss";

const Collapser = ({
  children,
  className = "",
  active = false,
  scroll = true,
}) => {
  const section = useRef();

  useEffect(() => {
    if (active && section.current) {
      setTimeout(() => {
        section.current.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }, [section, active]);

  return (
    <div
      ref={section}
      style={{
        height:
          active && section.current
            ? section.current.scrollHeight + "px"
            : "0px",
      }}
      className={`${className} ${style.collapser} ${
        active === true ? "active" : ""
      }`}
    >
      <div className={`${style.content}`}>{children}</div>
    </div>
  );
};
export default Collapser;
