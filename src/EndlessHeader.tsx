import React from "react";

import { ReactComponent as EndlessLogo } from "./assets/images/logo-endless.svg";
import "./EndlessHeader.css";

export function EndlessHeader() {
  return (
    <header className="endless-header">
      <EndlessLogo className="endless-header__logo" />
    </header>
  );
}
