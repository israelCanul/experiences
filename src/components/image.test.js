import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Imagen from "./image";

const component = render(
  <Imagen alt="altcustom" layout="ss" src="/img/arrow.png" />
);
test("renders content", () => {
  component.getAllByAltText("altcustom");
  // component.debug();
});
test("renders sources", () => {
  component.container.querySelector('[srcset="/img/arrow.webp"]');
  component.container.querySelector('[src="/img/arrow.png"]');
});
