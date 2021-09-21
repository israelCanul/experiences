import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Gallery from "./gallery";

const imagenes = ["imagen1.png", "imagen2.png"];
const component = render(<Gallery imagenes={imagenes} />);

test("<Gallery />", () => {
  expect(component.getAllByAltText("imagen alt")).toHaveLength(
    imagenes.length + 1
  );
  expect(component.container.querySelectorAll(".thumbnail")).toHaveLength(2);
  expect(component.container.querySelector(".viewer")).toBeInTheDocument();
});
