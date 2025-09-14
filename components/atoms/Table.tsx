import classNames from "classnames";
import React from "react";

export interface ITableProps {
  data: { [key: string]: string };
  className?: string;
}

export const Table = (props: ITableProps) => {
  // props
  const { data, className } = props;

  return (
    <div
      className={classNames(
        "grid w-full grid-cols-[200px_1fr] gap-4",
        className
      )}
    >
      {Object.entries(data).map(([key, value]) => (
        <React.Fragment key={key}>
          <div className="font-geist-mono border border-gray-600 bg-blue-100/50 p-2 font-semibold">
            {key}
          </div>
          <div className="font-geist-mono border border-gray-600 p-2 wrap-anywhere">
            {value ?? "-"}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

Table.displayName = "Table";
