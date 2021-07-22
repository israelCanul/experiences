import { createRef, useEffect, useState } from "react";
import style from "../scss/collapser.module.scss";

const Collapser = ({ children, className = "", active = false }) => {
  const Section = createRef();
  const [initialized, setinitialized] = useState(false);
  const [size, setSize] = useState({ w: 0, h: 0 });
  useEffect(() => {
    if (size.w === 0 && size.h === 0) {
      setSize({
        h: Section.current.clientHeight,
        w: Section.current.clientWidth,
      });
      setinitialized(true);
    }
  }, [initialized, Section, size.h, size.w]);
  return (
    <div
      className={`${className} ${style.collapser}  ${
        active ? style.active : ""
      }`}
      style={{
        margin: ` ${!active && initialized ? "0px" : ""}`,
        padding: ` ${!active && initialized ? "0px" : ""}`,
        height: `${
          active && initialized
            ? size.h + "px"
            : !active && initialized
            ? "0px"
            : "auto"
        }`,
      }}
      ref={Section}
    >
      {children}
    </div>
  );
};
export default Collapser;
