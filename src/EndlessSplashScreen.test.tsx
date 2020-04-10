import React from "react";
import { render, RenderResult } from "@testing-library/react";

import { EndlessSplashScreen } from "./EndlessSplashScreen";

describe("EndlessSplashScreen", () => {
  let splashScreen: RenderResult;

  beforeEach(() => {
    splashScreen = render(<EndlessSplashScreen />);
  });

  it("contains the correct preceding text", () => {
    const precedingTextEl = splashScreen.getByText(/New Games & Accessories/);

    expect(precedingTextEl.getAttribute("class")).toBe(
      "endless-splash-screen__text--preceding"
    );
    expect(precedingTextEl.textContent).toBe("New Games & Accessories");
  });

  it("contains the correct focal text", () => {
    const focalTextEl = splashScreen.getByText(/Monthly packages\./);

    expect(focalTextEl.getAttribute("class")).toBe(
      "endless-splash-screen__text--focal"
    );
    expect(focalTextEl.textContent).toBe(
      "Monthly packages.Excitement delivered daily."
    );
  });

  it("contains the correct excerpt", () => {
    const excerptTextEl = splashScreen.getByText(/What's the best way to shop/);

    expect(excerptTextEl.getAttribute("class")).toBe(
      "endless-splash-screen__text--excerpt"
    );
    expect(excerptTextEl.textContent).toBe(
      "What's the best way to shop for the latest video games and peripherals? How about never shopping at all? You'll get new stuff on your doorstep — every month."
    );
  });
});
