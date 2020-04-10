interface IParsedStepContent {
  title: string;
  body: string;
}

export interface IParsedEndlessStep {
  stepNumber: string;
  content: IParsedStepContent;
}

interface IUnparsedStepContent extends IParsedStepContent {
  effectiveDate: string;
}

interface IUnparsedEndlessStep {
  id: string;
  stepNumber: string;
  versionContent: IUnparsedStepContent[];
}

export class EndlessStepApiService {
  getSteps(): Promise<IParsedEndlessStep[]> {
    return fetch(
      "https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge"
    )
      .then((resp) => (resp.json() as unknown) as IUnparsedEndlessStep[])
      .then((steps) =>
        this._getSortedSteps(steps).map((step) => this._parseStep(step))
      );
  }

  private _forceTwoDigitStepNumber(stepNumber: string) {
    return stepNumber.length < 2 ? `0${stepNumber}` : stepNumber;
  }

  private _getSortedSteps(
    steps: IUnparsedEndlessStep[]
  ): IUnparsedEndlessStep[] {
    return steps.sort((stepA, stepB) => {
      const aStepNumber = parseInt(stepA.stepNumber);
      const bStepNumber = parseInt(stepB.stepNumber);

      let result = 0;

      if (aStepNumber > bStepNumber) {
        result = 1;
      } else if (aStepNumber < bStepNumber) {
        result = -1;
      }

      return result;
    });
  }

  private _parseStep(step: IUnparsedEndlessStep): IParsedEndlessStep {
    const content = step.versionContent.sort(
      (contentA, contentB) =>
        new Date(contentB.effectiveDate).getTime() -
        new Date(contentA.effectiveDate).getTime()
    )[0];

    return {
      content: {
        body: content.body,
        title: content.title,
      },
      stepNumber: this._forceTwoDigitStepNumber(step.stepNumber),
    };
  }
}

export const endlessStepApiService = new EndlessStepApiService();
