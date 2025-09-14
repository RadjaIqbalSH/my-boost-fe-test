import { GetStaticPaths, GetStaticProps } from "next";

import { BlogDetail } from "@/components/templates/BlogDetail";
import { Layout } from "@/components/templates/Layout";
import { IDBBlog } from "@/interfaces/database";
import { IResponseApi } from "@/interfaces/responseApi";
import { fetcher } from "@/utils/fetcher";

interface IBlogDetailPageProps {
  blogData: IDBBlog;
}

const BREAD_CRUMB_LIST = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Detail Blog",
  },
];

export default function BlogDetailPage(props: IBlogDetailPageProps) {
  // props
  const { blogData } = props;

  return (
    <Layout breadCrumb={BREAD_CRUMB_LIST}>
      <BlogDetail data={blogData} />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // params
  const { id } = params || {};

  let notFound: boolean = false;

  let blogData = null;

  if (!id) {
    notFound = true;
  } else {
    try {
      const response = await fetcher<IResponseApi<IDBBlog>>(`/blog/${id}`);
      blogData = response.data;
    } catch {
      notFound = true;
    }
  }

  return {
    props: {
      blogData,
    },
    notFound,
  };
};
