// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { responseApiWrapper } from "@/helpers/responseApiWrapper";
import type { IDBBlog } from "@/interfaces/database";
import { IResponseApi } from "@/interfaces/responseApi";
import { initDB } from "@/utils/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponseApi<IDBBlog | null>>
) {
  const db = await initDB();

  const { query } = req;
  const { id } = query;

  const blog = db.data.blogs.find((blog) => blog.id === id);

  if (!blog) {
    return res
      .status(404)
      .json(responseApiWrapper({ code: 404, msg: "Not found", data: null }));
  }

  if (req.method === "GET") {
    return res
      .status(200)
      .json(responseApiWrapper({ code: 200, msg: "success", data: blog }));
  }

  return res
    .status(405)
    .json(
      responseApiWrapper({ code: 405, msg: "Method not allowed", data: null })
    );
}
