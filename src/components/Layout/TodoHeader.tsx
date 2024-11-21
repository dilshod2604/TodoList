"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../src/assets/todoLogo.jpg";
import { MdLibraryAdd } from "react-icons/md";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { Modal } from "antd";
import { useModalStore } from "@/store/useModalStore";
import TodoInput from "../ui/TodoInput";

const TodoHeader = () => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const { close, isOpen, setIsOpen } = useModalStore();
  const onMouseEnter = () => {
    setIsFocus(true);
  };
  const onMouseLeave = () => {
    setIsFocus(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="mt-[50px]">
      <div className="container">
        <div className="w-full p-4 rounded-md flex items-center border-2 border-blue-500 justify-between">
          <div className="flex items-center gap-x-3">
            <div className="flex items-center justify-center w-[50px] h-[50px] border-2 border-orange-400 rounded-full overflow-hidden cursor-pointer hover:scale-110 transition-all">
              <Image src={logo} alt="logo" width={50} height={50} />
            </div>
            <h1 className="text-blue-700 font-bold text-xl flex items-center">
              Plan <p className="text-orange-500 font-bold tex-xl">Perfect </p>{" "}
            </h1>
          </div>
          <button
            className="flex items-center justify-center"
            onClick={openModal}
          >
            {isFocus ? (
              <MdLibraryAdd
                size={30}
                onMouseEnter={onMouseLeave}
                className="text-black hover:scale-110  transition-all cursor-pointer"
              />
            ) : (
              <MdOutlineAddToPhotos
                size={30}
                onMouseLeave={onMouseEnter}
                className="text-black hover:scale-110  transition-all cursor-pointer"
              />
            )}
          </button>
        </div>
        <Modal title="Basic Modal" open={isOpen} footer={null} onCancel={close}>
          <TodoInput />
        </Modal>
      </div>
    </div>
  );
};

export default TodoHeader;
