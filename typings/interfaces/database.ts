export interface IDBBlog {
  id: string;
  created_at: number;
  title: string;
  author_name: string;
  summary: string;
  category: string;
  content: string;
}

export interface IDBData {
  blogs: IDBBlog[];
}
