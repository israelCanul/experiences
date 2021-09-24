import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, screen } from "@testing-library/react";

import Formulario from "./index";

const component = render(<Formulario />);

test("<Formulario />", () => {
  //   component.debug();
  component.getByText("Choose a package");
  component.getByText("Choose a date");
  component.getByText("Send");
  expect(component.container.querySelectorAll(".custom-input")).toHaveLength(1);
});
