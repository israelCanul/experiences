import { createRef, useEffect, useState } from "react";
import style from "../scss/collapser.module.scss";

const Collapser = ({
  children,
  className = "",
  active = false,
  scroll = true,
}) => {
  const Section = createRef();
  const [isActive, setIsActive] = useState(active);
  const [section, setSection] = useState(Section);
  useEffect(() => {
    setTimeout(() => {
      if (active === true) setIsActive(active);
    }, 200);
    if (isActive) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }, [section, isActive, active]);
  const [initialized, setinitialized] = useState(false);
  const [size, setSize] = useState({ w: 0, h: 0 });
  useEffect(() => {
    if (size.w === 0 && size.h === 0) {
      setSize({
        h: Section.current.clientHeight,
        w: Section.current.clientWidth,
      });
      setinitialized(true);
      setSection(Section.current);
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
