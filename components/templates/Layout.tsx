import React, { ReactNode } from "react";

import { BreadCrumb, IBreadCrumbData } from "../molecules/BreadCrumb";
import Navbar from "../organisms/Navbar";

export interface ILayoutProps {
  children: ReactNode;
  breadCrumb?: IBreadCrumbData[];
}

export const Layout = (props: ILayoutProps) => {
  // props
  const { breadCrumb, children } = props;

  return (
    <main className="min-h-dvh bg-gray-100">
      <Navbar />
      <div className="min-h-[calc(100vh-300px)] p-6 sm:p-10 lg:p-20">
        {breadCrumb?.length && (
          <BreadCrumb className="mb-10" data={breadCrumb} />
        )}
        {children}
      </div>
    </main>
  );
};

Layout.displayName = "Layout";
