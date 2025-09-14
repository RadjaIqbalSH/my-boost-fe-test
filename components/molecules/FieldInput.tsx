import type { ZodType } from "zod";

import { useFieldValidation } from "@/hooks/useFieldValidation";

import { Field } from "../atoms/Field";
import { IInputProps, Input } from "../atoms/Input";

export interface IFieldInputProps extends IInputProps {
  id: string;
  label: string;
  errorMsg?: string;
  validation?: ZodType;
  validateStatus?: boolean;
}

export const FieldInput = (props: IFieldInputProps) => {
  // props
  const {
    id,
    label,
    required,
    errorMsg,
    validation,
    defaultValue,
    validateStatus,
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
      <Input
        id={id}
        defaultValue={defaultValue}
        error={validateStatus ? !!error : false}
        onChange={validate}
        data-value={data}
        data-required={required}
        {...restProps}
      />
    </Field>
  );
};

FieldInput.displayName = "FieldInput";
