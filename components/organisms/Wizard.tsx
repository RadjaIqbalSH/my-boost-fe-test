import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
} from "@radix-ui/react-icons";
import React, { Fragment, ReactNode } from "react";

import { Button } from "../atoms/Button";

export interface IWizardProps {
  children: ReactNode;
  steps: string[];
  step: number;
  onChangeStep: (step: number) => void;
  onFinish: () => void;
  loading?: boolean;
}

export const Wizard = (props: IWizardProps) => {
  // props
  const { children, steps, step, onChangeStep, onFinish, loading } = props;

  return (
    <div className="flex h-full w-full flex-col justify-between gap-6">
      <div className="flex w-full flex-row flex-wrap items-center gap-4">
        {steps.map((label, index) => (
          <Fragment key={"wizard-" + index}>
            {!!index && (
              <div className="flex-grow rounded-full border-t-2 border-gray-400" />
            )}
            <div className="flex flex-none flex-row items-center gap-2">
              <Button
                shape="circle"
                disabled={index + 1 > step}
                loading={loading}
              >
                {index + 1 < step ? <CheckIcon /> : index + 1}
              </Button>
              <p className="font-geist-mono text-gray-600">{label}</p>
            </div>
          </Fragment>
        ))}
      </div>
      <div className="h-full">{children}</div>
      <div className="flex items-center justify-between">
        {/* Back button */}
        {step > 1 && (
          <Button onClick={() => onChangeStep(step - 1)} disabled={loading}>
            <ArrowLeftIcon className="mr-2" /> Back
          </Button>
        )}
        {/* Submit button */}
        {step === steps.length ? (
          <Button
            type="submit"
            className="ml-auto"
            onClick={() => onFinish()}
            loading={loading}
          >
            Submit
          </Button>
        ) : (
          // Next button
          <Button
            className="ml-auto"
            onClick={() => onChangeStep(step + 1)}
            disabled={loading}
          >
            Next <ArrowRightIcon className="ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
};
