import { OptionHTMLAttributes } from "react";

import { IBlogData } from "@/interfaces/blogData";

export const WIZARD_STEPS = [
  "Blog Metadata",
  "Blog Summary & Category",
  "Blog Content",
  "Review & Submit",
];

export const BLOG_CATEGORY_LIST: OptionHTMLAttributes<HTMLOptionElement>[] = [
  {
    label: "Tech",
    value: "tech",
  },
  {
    label: "Lifestyle",
    value: "lifestyle",
  },
  {
    label: "Business",
    value: "business",
  },
  {
    label: "Education",
    value: "education",
  },
  {
    label: "Health",
    value: "health",
  },
];

export const DEFAULT_VALUE_BLOG_DATA: IBlogData = {
  author_name: "",
  category: "tech",
  content: "",
  summary: "",
  title: "",
};
