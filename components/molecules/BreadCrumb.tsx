import classNames from "classnames";
import Link from "next/link";
import React from "react";

export interface IBreadCrumbData {
  label: string;
  url?: string;
}

export interface IBreadCrumbProps {
  data: IBreadCrumbData[];
  className?: string;
}

export const BreadCrumb = (props: IBreadCrumbProps) => {
  // props
  const { data, className } = props;

  return (
    <div
      className={classNames(
        "flex w-fit flex-row items-center gap-2",
        className
      )}
    >
      {data.map((item, index) => {
        if (item.url) {
          return (
            <Link
              className="font-geist-mono text-blue-500"
              key={index}
              href={item.url}
            >
              {item.label} \
            </Link>
          );
        } else {
          return (
            <p className="font-geist-mono text-gray-500" key={index}>
              {item.label}
            </p>
          );
        }
      })}
    </div>
  );
};

BreadCrumb.displayName = "BreadCrumb";
