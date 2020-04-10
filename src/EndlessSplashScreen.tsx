import React from "react";

import "./EndlessSplashScreen.css";

export function EndlessSplashScreen() {
  return (
    <div className="endless-splash-screen">
      <div className="endless-splash-screen__text-container">
        <span className="endless-splash-screen__text--preceding">
          New Games & Accessories
        </span>
        <br />
        <div className="endless-splash-screen__text--focal">
          Monthly packages.
          <br />
          Excitement delivered daily.
        </div>
        <p className="endless-splash-screen__text--excerpt">
          What's the best way to shop for the latest video games and
          peripherals? How about never shopping at all? You'll get new stuff on
          your doorstep — every month.
        </p>
        <button onClick={handleClick} className="endless-splash-screen__button">
          GET STARTED
        </button>
      </div>
    </div>
  );
}

function handleClick() {
  window.open("https://github.com/folterung/endless", "_blank");
}
