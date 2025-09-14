import { ChangeEvent, useEffect, useState } from "react";
import { ZodType } from "zod";

interface IUseFieldValidation {
  defaultValue?: string | number | undefined;
  validation?: ZodType;
  errorMsg?: string;
  required?: boolean;
}

interface ICheckValidationReturn {
  data: string | number | undefined;
  error: string;
}

export const useFieldValidation = (payload: IUseFieldValidation) => {
  const { defaultValue = undefined, validation, errorMsg, required } = payload;

  const [error, setError] = useState<string>("");

  const [data, setData] = useState<string | number | undefined>(undefined);

  const checkValidation = (
    value: string | number | undefined
  ): ICheckValidationReturn => {
    if (!required) {
      return {
        data: value,
        error: "",
      };
    }

    let error = "";
    let data: string | number | undefined = value;

    if (validation) {
      const result = validation.safeParse(value);
      if (!result.success) {
        error = result.error.issues[0]?.message ?? errorMsg ?? "";
        data = undefined;
      }
    } else if (!value) {
      error = errorMsg ?? "Field is required";
      data = undefined;
    }

    return {
      data: data,
      error: error,
    };
  };

  const validate = (
    event: ChangeEvent<
      HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement
    >
  ) => {
    const { value } = event.target;

    const { data, error } = checkValidation(value);

    setError(error);
    setData(data);
  };

  useEffect(() => {
    const { data, error } = checkValidation(defaultValue ?? "");

    setError(error);
    setData(data);
  }, []);

  return {
    validate,
    data,
    error,
  };
};
