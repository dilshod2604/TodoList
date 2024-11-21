import Layout from "@/components/Layout/Layout";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <Layout>{children}</Layout>;
};

export default layout;
