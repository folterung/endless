import React from "react";
import { render, RenderResult } from "@testing-library/react";
import { EndlessStep } from "./EndlessStep";

describe("EndlessStep", () => {
  let step: RenderResult;

  beforeEach(() => {
    step = render(
      <EndlessStep stepNumber={"3"} title={"fakeStep"} body={"fake content"} />
    );
  });

  it("displays 'stepNumber' correctly", () => {
    const stepNumberEl = step.getByText("3");

    expect(stepNumberEl.getAttribute("class")).toBe("endless-step__number");
  });

  it("displays 'title' correctly", () => {
    const stepTitleEl = step.getByText("FAKESTEP");

    expect(stepTitleEl.getAttribute("class")).toBe("endless-step__title");
  });

  it("displays 'text' correctly", () => {
    const stepTextEl = step.getByText("fake content");

    expect(stepTextEl.getAttribute("class")).toBe("endless-step__text");
  });
});
