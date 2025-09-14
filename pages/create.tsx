import { CreateBlog } from "@/components/templates/CreateBlog";
import { Layout } from "@/components/templates/Layout";

const BREAD_CRUMB_LIST = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Create BLog",
  },
];

export default function CreateBlogPage() {
  return (
    <Layout breadCrumb={BREAD_CRUMB_LIST}>
      <CreateBlog />
    </Layout>
  );
}
