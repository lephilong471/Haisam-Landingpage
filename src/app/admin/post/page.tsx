"use client";
import { MUIBox } from "@/components/MUI";
import dynamic from "next/dynamic";

const MCKEditor = dynamic(() => import("@/components/presentation/MCKEditor"),{ssr: false})
// import MCKEditor from "@/components/presentation/MCKEditor";

import { Form, Input, Select } from "antd";
import React from "react";
const Post = () => {
   const [form] = Form.useForm();
   return (
      <MUIBox className="container" mt={15}>
         <Form form={form} onFinish={(values) => console.log(values)}>
            <Form.Item name="newType">
               <Select
                  showSearch
                  placeholder="Select a type"
                  filterOption={(input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase())}
                  options={[
                     { value: "NEWS", label: "NEWS" },
                     { value: "BLOG", label: "BLOG" },
                  ]}
               />
            </Form.Item>
            <Form.Item name="title">
               <Input placeholder="Nhập tiêu đề" />
            </Form.Item>
            <MCKEditor />
         </Form>
      </MUIBox>
   );
};

export default Post;
