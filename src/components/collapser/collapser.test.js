// import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import Collapser from "./collapser";

describe("<Collapser />", () => {
  let component;
  beforeEach(() => {
    Object.defineProperty(HTMLElement.prototype, "scrollHeight", {
      configurable: true,
      value: 100,
    });
  });

  it("<Collapser />", () => {
    component = render(
      <Collapser className="modal" active={false}>
        <div>
          <h2>Mi titulo</h2>
          <p>Mi contenido</p>
        </div>
      </Collapser>
    );
    expect(component.container.querySelector("h2")).toBeDefined();
    component.getAllByText("Mi titulo");
    component.getAllByText("Mi contenido");
    expect(
      component.container.querySelector(".modal.collapser").className
    ).toBe("modal collapser ");
  });
  it("<Collapser active={true} >", async () => {
    component = render(
      <Collapser className="modal" active={true}>
        <div>
          <h2>Mi titulo</h2>
          <p>Mi contenido</p>
        </div>
      </Collapser>
    );
    expect(
      component.container.querySelector(".modal.collapser").className
    ).toBe("modal collapser active");
  });
});
