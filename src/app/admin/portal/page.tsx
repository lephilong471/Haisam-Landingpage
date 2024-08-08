"use client";
import { MUIBox, MUIButton } from "@/components/MUI";
import TableData from "@/components/presentation/TableData";
import React from "react";

const page = () => {
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
      <MUIBox mt={10} className="container">
         <TableData columns={columns} data={data} />
      </MUIBox>
   );
};

export default page;
