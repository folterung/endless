import React from "react";
import { render } from "@testing-library/react";
import { EndlessHeader } from "./EndlessHeader";

let header: HTMLElement;
let logo: SVGSVGElement;

beforeEach(() => {
  const { baseElement } = render(<EndlessHeader />);
  const headerMaybe = baseElement.querySelector("header");
  const logoMaybe = baseElement.querySelector("svg");

  if (!logoMaybe || !headerMaybe) {
    throw new Error("Unable to locate 'logo' in EndlessHeader.");
  }

  header = headerMaybe;
  logo = logoMaybe;
});

describe("EndlessHeader", () => {
  it("has correct 'class'", () => {
    expect(header.getAttribute("class")).toBe("endless-header");
  });
});

test("renders ENDLESS svg in header", () => {
  expect(logo.getAttribute("class")).toBe("endless-header__logo");
  expect(logo.textContent).toBe("logo-endless.svg");
});
