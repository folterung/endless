import React from "react";
import { endlessStepApiService } from "./EndlessStepApiService";
import { EndlessStep } from "./EndlessStep";

import "./EndlessHowItWorks.css";

interface IEndlessHowItWorksState {
  steps: any[];
}

export class EndlessHowItWorks extends React.Component<
  {},
  IEndlessHowItWorksState
> {
  constructor(props: {}) {
    super(props);
    this.state = { steps: [] };
  }

  componentDidMount() {
    endlessStepApiService.getSteps().then((steps) => this.setState({ steps }));
  }

  render() {
    return (
      <div className="endless-how-it-works__container">
        <div className="endless-how-it-works__title">How It Works</div>
        <br />
        <div className="endless-how-it-works__step-container--outer">
          <div className="endless-how-it-works__step-container--inner">
            {this.displaySteps()}
          </div>
        </div>
      </div>
    );
  }

  displaySteps() {
    const steps = [];

    for (const step of this.state.steps) {
      steps.push(
        <EndlessStep
          stepNumber={step.stepNumber}
          body={step.content.body}
          title={step.content.title}
          key={step.stepNumber}
        />
      );
    }

    return steps;
  }
}
