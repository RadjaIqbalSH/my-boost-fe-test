import classNames from "classnames";
import React, { ReactNode } from "react";

export interface ITagProps {
  children: ReactNode;
  className?: string;
}

export const Tag = (props: ITagProps) => {
  // props
  const { children, className } = props;

  return (
    <div
      className={classNames(
        "font-geist-mono py1 w-fit rounded-full bg-gray-200 px-2 text-sm text-gray-800",
        className
      )}
    >
      {children}
    </div>
  );
};

Tag.displayName = "Tag";
