import { useRouter } from "next/router";
import React, { useState } from "react";
import { string as ZString } from "zod";

import {
  BLOG_CATEGORY_LIST,
  DEFAULT_VALUE_BLOG_DATA,
  WIZARD_STEPS,
} from "@/consts/createBlog";
import { useToast } from "@/hooks/useToast";
import { IBlogData } from "@/interfaces/blogData";
import { IResponseApi } from "@/interfaces/responseApi";
import { fetcher } from "@/utils/fetcher";

import { Table } from "../atoms/Table";
import { Form, IFormConfigs } from "../organisms/Form";
import { Wizard } from "../organisms/Wizard";

export const CreateBlog = () => {
  const [step, setStep] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [blogData, setBlogData] = useState<IBlogData>(DEFAULT_VALUE_BLOG_DATA);

  const { addToast, Toasts } = useToast();

  const router = useRouter();

  const formConfigs: IFormConfigs[][] = [
    [
      {
        fieldInput: {
          id: "title",
          label: "Blog title",
          name: "title",
          required: true,
          defaultValue: blogData.title,
          placeholder: "Your blog title here...",
          validation: ZString()
            .nonempty("Title must not be empty")
            .min(10, "Title must be at least 10 characters")
            .max(50, "Title must be at most 50 characters"),
        },
      },
      {
        fieldInput: {
          id: "author_name",
          label: "Author name",
          name: "author_name",
          required: true,
          defaultValue: blogData.author_name,
          placeholder: "Your author name here...",
          validation: ZString()
            .nonempty("Author name must not be empty")
            .max(50, "Author name must be at most 50 characters"),
        },
      },
    ],
    [
      {
        fieldTextArea: {
          id: "summary",
          label: "Blog Summary",
          name: "summary",
          required: true,
          defaultValue: blogData.summary,
          placeholder: "Your blog Summary here...",
          validation: ZString()
            .nonempty("Summary must not be empty")
            .min(50, "Summary must be at least 50 characters")
            .max(500, "Summary must be at most 500 characters"),
          rows: 4,
        },
      },
      {
        fieldSelect: {
          id: "category",
          label: "Blog category",
          name: "category",
          required: true,
          defaultValue: blogData.category,
          validation: ZString().nonempty("Blog category must not be empty"),
          options: BLOG_CATEGORY_LIST,
        },
      },
    ],
    [
      {
        fieldTextArea: {
          id: "content",
          label: "Blog Content",
          name: "content",
          rows: 10,
          required: true,
          defaultValue: blogData.content,
          placeholder: "Your blog content here...",
          validation: ZString()
            .nonempty("content must not be empty")
            .min(1000, "content must be at least 500 characters")
            .max(20000, "content must be at most 2000 characters"),
        },
      },
    ],
    [],
  ];

  const triggerEventSubmitForm = () => {
    const formElement = document.getElementById(
      "form-create-blog"
    ) as HTMLFormElement | null;
    formElement?.requestSubmit();
  };

  const handleChangeWizard = (nextStep: number) => {
    if (nextStep > step) {
      triggerEventSubmitForm();
    } else {
      setStep(nextStep);
    }
  };

  const handleFinishWizard = async () => {
    await submitBlog();
  };

  const handleFinishForm = (
    payload: boolean | { [key: string]: string | number | undefined }
  ) => {
    if (typeof payload === "object") {
      setBlogData((currentData) => ({
        ...currentData,
        ...payload,
      }));
      setStep((currentStep) => currentStep + 1);
    }
  };

  const submitBlog = async () => {
    setLoading(true);
    try {
      await fetcher<IResponseApi<IBlogData>>("/blog", {
        method: "POST",
        body: JSON.stringify(blogData),
      });
      addToast({
        variant: "success",
        msg: "Success create blog",
      });
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch {
      addToast({
        variant: "error",
        msg: "Failed create blog",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toasts />
      <Wizard
        step={step}
        onChangeStep={handleChangeWizard}
        steps={WIZARD_STEPS}
        onFinish={handleFinishWizard}
        loading={loading}
      >
        {step === WIZARD_STEPS.length ? (
          <Table
            data={{
              "Blog Title": blogData.title,
              "Author Name": blogData.author_name,
              "Blog Summary": blogData.summary,
              "Blog Category": blogData.category,
              "Blog Content": blogData.content,
            }}
          />
        ) : (
          <Form
            id="form-create-blog"
            onFinish={handleFinishForm}
            configs={formConfigs[step - 1]}
          />
        )}
      </Wizard>
    </>
  );
};

CreateBlog.displayName = "CreateBlog";
