import { Spin } from "antd";
import React from "react";

const Preloader = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Spin tip="Loading" size="large" />
    </div>
  );
};

export default Preloader;
