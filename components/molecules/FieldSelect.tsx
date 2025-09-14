import type { ZodType } from "zod";

import { useFieldValidation } from "@/hooks/useFieldValidation";

import { Field } from "../atoms/Field";
import { ISelectProps, Select } from "../atoms/Select";

export interface IFieldSelectProps extends ISelectProps {
  id: string;
  label: string;
  errorMsg?: string;
  validation?: ZodType;
  validateStatus?: boolean;
}

export const FieldSelect = (props: IFieldSelectProps) => {
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
      <Select
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

FieldSelect.displayName = "FieldSelect";
