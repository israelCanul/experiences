import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Loading from "./loading";

const component = render(<Loading />);
test("renders content", () => {
  component.container.querySelector(".loadingio-spinner-bars-m3k8wbhrl9");
  component.container.querySelector(".ldio-umf0jvm40wi");
});
