import classNames from "classnames";
import Link from "next/link";
import React, { useState } from "react";

import { dateFormat } from "@/helpers/dateFormat";

import { Button } from "../atoms/Button";
import { Tag } from "../atoms/Tag";

export interface ICardProps {
  url: string;
  title: string;
  author: string;
  summary: string;
  date: number;
  category: string;
}

export const Card = (props: ICardProps) => {
  // props
  const { title, author, summary, date, category, url } = props;

  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <div className="font-geist-mono flex w-full flex-col justify-between rounded-md bg-white p-6 shadow-lg">
      <div>
        <Link href={url} className="text-2xl font-bold">
          {title}
        </Link>
        <p className="mt-4 text-sm">Author: {author}</p>
        <p
          className={classNames("mt-4 text-sm wrap-anywhere", {
            "line-clamp-4": !showMore,
          })}
        >
          {summary}
        </p>
        <Button
          className="mt-4"
          variant="primary"
          onClick={() => setShowMore(!showMore)}
        >
          Show More
        </Button>
      </div>
      <div className="mt-8 flex items-center justify-between">
        <p className="text-sm text-gray-500">{dateFormat(date)}</p>
        <Tag>{category}</Tag>
      </div>
    </div>
  );
};

Card.displayName = "Card";
