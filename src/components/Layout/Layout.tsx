"use client";
import React, { ReactNode, useEffect, useState } from "react";
import TodoHeader from "./TodoHeader";
import Preloader from "../ui/Preloader";

const Layout = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  if (isLoading) return <Preloader />;
  return (
    <div>
      <TodoHeader />
      <main className="w-full  h-[600px] overflow-hidden">{children}</main>
    </div>
  );
};

export default Layout;
