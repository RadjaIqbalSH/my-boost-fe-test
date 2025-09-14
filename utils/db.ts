import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import path from "path";

import { IDBData } from "@/interfaces/database";

const file = path.join(process.cwd(), "db.json");
const adapter = new JSONFile<IDBData>(file);
const db = new Low<IDBData>(adapter, { blogs: [] });

export async function initDB() {
  await db.read();
  db.data ||= { blogs: [] };
  return db;
}
