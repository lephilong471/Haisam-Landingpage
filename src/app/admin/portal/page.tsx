"use client";
import { MUIBox } from "@/components/MUI";
import TableData from "@/components/presentation/TableData";
import { Button } from "antd";
import React from "react";
import { useRouter } from "next/navigation";
import { PATH } from "@/config/routes";

import UploadImage from "@/components/presentation/UploadImage";

const Portal = () => {
   const router = useRouter();
   const columns = [
      {
         title: "Name",
         width: 200,
         dataIndex: "name",
         key: "name",
         fixed: "left",
         filterSearch: true,
      },
      {
         title: "Age",
         width: 100,
         dataIndex: "age",
         key: "age",
         fixed: "left",
         sorter: true,
         filterSearch: true,
      },
      {
         title: "Address",
         dataIndex: "address",
         key: "address",
         sorter: (a, b) => a.address.length - b.address.length,
         sortDirections: ["descend", "ascend"],
      },

      {
         title: "Action",
         key: "operation",
         fixed: "right",
         width: 200,
         render: () => <a>action</a>,
      },
   ];

   const data = [
      { key: "1", name: "John Brown", age: 32, address: "New York No. 1 Lake Park" },
      { key: "2", name: "Joe Black", age: 42, address: "London No. 1 Lake Park" },
      { key: "3", name: "Jim Green", age: 32, address: "Sydney No. 1 Lake Park" },
      { key: "4", name: "Jim Red", age: 32, address: "London No. 2 Lake Park" },
   ];

   return (
      <MUIBox mt={15} className="container">
         <MUIBox>
            <Button onClick={() => router.push(PATH.POST_NEW)}>Thêm tin tức</Button>
         </MUIBox>
         <TableData columns={columns} data={data} />
         <UploadImage />
      </MUIBox>
   );
};

export default Portal;
