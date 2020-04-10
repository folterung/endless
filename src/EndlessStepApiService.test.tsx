import { endlessStepApiService } from "./EndlessStepApiService";

describe("EndlessStepApiService", () => {
  describe("getSteps", () => {
    it("calls the 'FrontEndChallenge' api and returns the expected values", async () => {
      window.fetch = jest.fn().mockResolvedValue({
        json: () => [],
      });

      const result = await endlessStepApiService.getSteps();

      expect(result).toEqual([]);
    });

    it("converts the payload to a stripped down version", async () => {
      const dataset = [
        {
          resp: {
            id: "a87s6df87-a87sdf6-a98s6d-a9s87f-as7df67a8s",
            stepNumber: "2",
            versionContent: [
              {
                body:
                  "Once you’re ready for your first delivery, all it takes is a click to get your shipment on the way.",
                effectiveDate: "2019-05-04T03:04:05.000Z",
                title: "Request A Delivery",
              },
              {
                body:
                  "Once you’re ready for your first delivery, all it takes is a click to get your shipment on the way.",
                effectiveDate: "2019-04-04T05:04:05.000Z",
                title: "We Deliver",
              },
            ],
          },
          expected: {
            stepNumber: "01",
            content: {
              body:
                "We only want you to get games and gear that you’ll love, so we’ll ask for your preferences up front.",
              title: "Fill Out a Profile",
            },
          },
        },
        {
          resp: {
            id: "as8fd7-as9876-as98df-asdf7-f8d9s7",
            stepNumber: "4",
            versionContent: [
              {
                body:
                  "Get your next gaming fix by updating your profile then initiating your next shipment.",
                effectiveDate: "2019-05-20T03:04:05.000Z",
                title: "Request Another Delivery",
              },
            ],
          },
          expected: {
            stepNumber: "02",
            content: {
              body:
                "Once you’re ready for your first delivery, all it takes is a click to get your shipment on the way.",
              title: "Request A Delivery",
            },
          },
        },
        {
          resp: {
            id: "vcb98yh-dfhg807-zxcv897-erty098-6r8f9f90d9",
            stepNumber: "3",
            versionContent: [
              {
                body:
                  "Tell us “no” by returning any unwanted products in the enclosed packaging.",
                effectiveDate: "2019-04-04T03:04:05.000Z",
                title: "Keep What You Like",
              },
              {
                body:
                  "Tell us “no thanks” by returning any unwanted products in the enclosed packaging.",
                effectiveDate: "2019-04-04T05:04:05.000Z",
                title: "Keep What You Want",
              },
              {
                body:
                  "Tell us “no thanks” by returning any unwanted products in the enclosed packaging.",
                effectiveDate: "2019-02-04T08:04:05.000Z",
                title: "Keep Everything",
              },
            ],
          },
          expected: {
            stepNumber: "03",
            content: {
              title: "Keep What You Want",
              body:
                "Tell us “no thanks” by returning any unwanted products in the enclosed packaging.",
            },
          },
        },
        {
          resp: {
            id: "x7838v-d7f5-j87g-7643b-df987g78756",
            stepNumber: "1",
            versionContent: [
              {
                body:
                  "We only want you to get games and gear that you’ll love, so we’ll ask for your preferences up front.",
                effectiveDate: "2019-05-20T03:04:05.000Z",
                title: "Fill Out a Profile",
              },
            ],
          },
          expected: {
            stepNumber: "04",
            content: {
              body:
                "Get your next gaming fix by updating your profile then initiating your next shipment.",
              title: "Request Another Delivery",
            },
          },
        },
      ];

      window.fetch = jest.fn().mockResolvedValue({
        json: () => dataset.map((datum) => datum.resp),
      });

      const steps = await endlessStepApiService.getSteps();

      for (let i = 0; i < dataset.length; i++) {
        const expected = dataset[i].expected;
        const step = steps[i];

        expect(step.stepNumber).toBe(expected.stepNumber);
        expect(step.content.body).toBe(expected.content.body);
        expect(step.content.title).toBe(expected.content.title);
      }
    });
  });
});
