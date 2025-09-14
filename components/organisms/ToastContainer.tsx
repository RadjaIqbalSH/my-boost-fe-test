import React from "react";

import { IToastProps, Toast } from "../molecules/Toast";

export interface IToastContainerProps {
  data: IToastProps[];
}

export const ToastContainer = (props: IToastContainerProps) => {
  // props
  const { data } = props;

  return (
    <div className="fixed top-24 left-1/2 z-50 -translate-x-1/2 space-y-2">
      {data.map((item, index) => (
        <Toast key={index} variant={item.variant} msg={item.msg} />
      ))}
    </div>
  );
};

ToastContainer.displayName = "ToastContainer";
