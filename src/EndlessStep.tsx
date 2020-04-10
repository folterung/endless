import React from "react";
import PropTypes from "prop-types";

import "./EndlessStep.css";

interface EndlessStepProps {
  body: string;
  stepNumber: string;
  title: string;
}

export function EndlessStep(props: EndlessStepProps) {
  return (
    <div className="endless-step__container">
      <span className="endless-step__number">{props.stepNumber}</span>
      <div className="endless-step__title">{props.title.toUpperCase()}</div>
      <div className="endless-step__text">{props.body}</div>
    </div>
  );
}

EndlessStep.propTypes = {
  body: PropTypes.string,
  title: PropTypes.string,
};
