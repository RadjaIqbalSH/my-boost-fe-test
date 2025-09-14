import React from "react";

import { dateFormat } from "@/helpers/dateFormat";
import { IDBBlog } from "@/typings/interfaces/database";

import { Tag } from "../atoms/Tag";

export interface IBlogDetailProps {
  data: IDBBlog;
}

export const BlogDetail = (props: IBlogDetailProps) => {
  // props
  const { data } = props;

  return (
    <div className="mt-10 w-full">
      <h1 className="font-geist-mono mx-auto w-fit text-3xl font-bold md:text-5xl">
        {data.title}
      </h1>
      <div className="mt-10 flex flex-row flex-wrap justify-between md:mt-16">
        <p className="font-geist-mono">Author: {data.author_name}</p>
        <p className="font-geist-mono">{dateFormat(data.created_at)}</p>
      </div>
      <p className="w-ful font-geist-mono mt-10 text-justify wrap-anywhere">
        {data.content}
      </p>
      <h3 className="font-geist-mono mt-6 text-2xl font-semibold">Summary</h3>
      <p className="w-ful font-geist-mono mt-4 text-justify wrap-anywhere italic">
        {data.summary}
      </p>
      <div className="mt-10 flex flex-row items-center justify-center">
        <Tag>{data.category}</Tag>
      </div>
    </div>
  );
};

BlogDetail.displayName = "BlogDetail";
