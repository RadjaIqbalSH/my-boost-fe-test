import classNames from "classnames";
import { ReactNode } from "react";

export interface IFieldProps {
  id: string;
  label: string;
  errorMsg?: string;
  required?: boolean;
  children?: ReactNode;
}

export const Field = (props: IFieldProps) => {
  // props
  const { id, label, children, required = false, errorMsg = "" } = props;

  return (
    <div className="flex flex-col">
      <label
        className={classNames("font-geist-mono mb-2 text-sm", {
          "text-red-600": !!errorMsg,
        })}
        htmlFor={id}
      >
        {label} {required ? "*" : ""}
      </label>
      {children}
      {errorMsg && (
        <span className="font-geist-mono mt-1 ml-2 text-sm text-red-600">
          {errorMsg}
        </span>
      )}
    </div>
  );
};

Field.displayName = "Filed";
