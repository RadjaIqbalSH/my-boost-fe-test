import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { useToast } from "@/hooks/useToast";
import { IDBBlog } from "@/interfaces/database";
import { IResponseApi } from "@/interfaces/responseApi";
import { fetcher } from "@/utils/fetcher";

import { Button } from "../atoms/Button";
import { Card } from "../molecules/Card";

export const BlogList = () => {
  const [blogs, setBlogs] = useState<IDBBlog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();

  const { addToast, Toasts } = useToast();

  const getBlogsData = async () => {
    try {
      const result = await fetcher<IResponseApi<IDBBlog[]>>("/blog");
      setBlogs(result.data || []);
    } catch {
      addToast({
        variant: "error",
        msg: "Failed get blogs",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogsData();
  }, []);

  if (loading) {
    return (
      <p className="mx-auto w-fit text-xl font-semibold text-gray-500">
        Loading ....
      </p>
    );
  }

  return (
    <div>
      <Toasts />
      <Button className="mb-8 ml-auto" onClick={() => router.push("/create")}>
        Create Blog
      </Button>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {blogs.map((blog) => (
          <Card
            title={blog.title}
            author={blog.author_name}
            category={blog.category}
            summary={blog.summary}
            date={blog.created_at}
            key={blog.id}
            url={`/${blog.id}`}
          />
        ))}
      </div>
    </div>
  );
};

BlogList.displayName = "BlogList";
