// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";

import { RESPONSE_MSG_API } from "@/consts/responseMessageAPI";
import { responseApiWrapper } from "@/helpers/responseApiWrapper";
import { IDBBlog } from "@/interfaces/database";
import { IResponseApi } from "@/interfaces/responseApi";
import { initDB } from "@/utils/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponseApi<IDBBlog | IDBBlog[] | null>>
) {
  const db = await initDB();

  const { method, body } = req;

  if (method === "GET") {
    return res.status(200).json(
      responseApiWrapper({
        code: 200,
        msg: RESPONSE_MSG_API[200],
        data: db.data.blogs,
      })
    );
  }

  if (method === "POST") {
    const newBlog = {
      id: uuidv4(),
      created_at: Date.now(),
      ...JSON.parse(body),
    };
    db.data.blogs.push(newBlog);
    await db.write();

    return res.status(201).json(
      responseApiWrapper({
        code: 201,
        msg: RESPONSE_MSG_API[201],
        data: newBlog,
      })
    );
  }

  return res
    .status(405)
    .json(
      responseApiWrapper({ code: 405, msg: RESPONSE_MSG_API[405], data: null })
    );
}
