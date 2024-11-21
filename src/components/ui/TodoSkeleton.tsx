"use client";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React from "react";

const TodoSkeleton = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-center w-full h-[570px]">
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
      </div>
    </div>
  );
};

export default TodoSkeleton;
