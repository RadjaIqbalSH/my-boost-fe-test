import classNames from "classnames";
import React, { FormEvent, FormHTMLAttributes, useState } from "react";

import { FieldInput, IFieldInputProps } from "../molecules/FieldInput";
import { FieldSelect, IFieldSelectProps } from "../molecules/FieldSelect";
import { FieldTextArea, IFieldTextAreaProps } from "../molecules/FieldTextArea";

export interface IFormConfigs {
  fieldInput?: IFieldInputProps;
  fieldSelect?: IFieldSelectProps;
  fieldTextArea?: IFieldTextAreaProps;
}

export interface IFormProps
  extends Omit<FormHTMLAttributes<HTMLFormElement>, "onFinish"> {
  configs: IFormConfigs[];
  onFinish?: (
    payload: boolean | { [key: string]: string | number | undefined }
  ) => void;
}

export const Form = (props: IFormProps) => {
  // props
  const { className = "", configs, onFinish, ...restProps } = props;
  const [validateStatus, setValidateStatus] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValidateStatus(true);

    const elements = Array.from(
      event.currentTarget.elements
    ) as HTMLInputElement[];

    const hasError = elements.some(
      ({ dataset }) => dataset?.required === "true" && !dataset?.value?.length
    );

    if (hasError) {
      onFinish?.(false);
      return false;
    }

    const formData = elements.reduce<Record<string, string | undefined>>(
      (accumulator, { name, dataset }) => {
        if (name) accumulator[name] = dataset?.value;
        return accumulator;
      },
      {}
    );

    onFinish?.(formData);
    setValidateStatus(false);
    return formData;
  };

  return (
    <form
      className={classNames("flex flex-col gap-4", className)}
      onSubmit={handleSubmit}
      {...restProps}
    >
      {configs?.map(({ fieldInput, fieldSelect, fieldTextArea }) => {
        if (fieldInput) {
          return (
            <FieldInput
              key={"form-field-" + fieldInput?.id}
              validateStatus={validateStatus}
              {...fieldInput}
            />
          );
        } else if (fieldSelect) {
          return (
            <FieldSelect
              key={"form-field-" + fieldSelect?.id}
              validateStatus={validateStatus}
              {...fieldSelect}
            />
          );
        } else if (fieldTextArea) {
          return (
            <FieldTextArea
              key={"form-field-" + fieldTextArea.id}
              validateStatus={validateStatus}
              {...fieldTextArea}
            />
          );
        } else {
          return <></>;
        }
      })}
    </form>
  );
};
