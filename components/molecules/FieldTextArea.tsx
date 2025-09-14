import type { ZodType } from "zod";

import { useFieldValidation } from "@/hooks/useFieldValidation";

import { Field } from "../atoms/Field";
import { ITextAreaProps, TextArea } from "../atoms/TextArea";

export interface IFieldTextAreaProps extends ITextAreaProps {
  id: string;
  label: string;
  errorMsg?: string;
  validation?: ZodType;
  validateStatus?: boolean;
}

export const FieldTextArea = (props: IFieldTextAreaProps) => {
  // props
  const {
    id,
    label,
    required,
    errorMsg,
    validation,
    validateStatus,
    defaultValue,
    ...restProps
  } = props;

  const { validate, data, error } = useFieldValidation({
    validation,
    errorMsg,
    required,
    defaultValue: defaultValue as string | number | undefined,
  });

  return (
    <Field
      id={"field-" + id}
      label={label}
      errorMsg={validateStatus ? error : ""}
      required={required}
    >
      <TextArea
        id={id}
        error={validateStatus ? !!error : false}
        onChange={validate}
        data-value={data}
        data-required={required}
        defaultValue={defaultValue}
        {...restProps}
      />
    </Field>
  );
};

FieldTextArea.displayName = "FieldTextArea";
