import React from "react";

export interface ITableProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: { [key: string]: any };
}

export const Table = (props: ITableProps) => {
  // props
  const { data } = props;

  return (
    <div className="grid w-full grid-cols-[200px_1fr] gap-4">
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
