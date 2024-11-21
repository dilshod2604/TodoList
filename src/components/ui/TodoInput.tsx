"use client";
import { useAddTodosMutation } from "@/redux/api/todo";
import { useModalStore } from "@/store/useModalStore";
import { message } from "antd";
import { title } from "process";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
interface InputValues {
  title: string;
  image: string;
}
const TodoInput = () => {
  const { register, handleSubmit, reset } = useForm<InputValues>();
  const [addTodo] = useAddTodosMutation();
  const { close } = useModalStore();

  const onSubmit: SubmitHandler<InputValues> = async (value) => {
    try {
      const todos = {
        title: value.title,
        image: value.image,
        chaked: false,
      };
      await addTodo(todos);
      reset();
      close();
    } catch (error) {
      console.log(error);
    }
  };

  const resetField = () => {
    reset();
  };
  return (
    <div className="container">
      <div className="w-full p-4  border-orange-400 border-2  rounded-xl  flex items-center flex-col gap-y-4">
        <h1 className="  font-bold  text-3xl text-blue-500">New Plan</h1>
        <form
          className="flex flex-col items-center gap-y-2 w-full"
          onClick={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="Title"
            {...register("title", { required: true })}
            className=" w-full h-[40px] bg-neutral-100 rounded-md placeholder:text-neutral-600 px-4 focus:outline-blue-500 "
          />
          <input
            type="text"
            placeholder="Image URL"
            {...register("image", { required: true })}
            className=" w-full h-[40px] bg-neutral-100 rounded-md placeholder:text-neutral-600 px-4 focus:outline-blue-500 "
          />
          <div className="w-full flex items-center justify-end gap-x-4 max-sm:flex-col gap-y-3">
            <button
              className="text-white font-bold flex items-center justify-center px-[50px] py-3 bg-orange-700 - rounded-xl hover:bg-orange-800"
              onClick={close}
            >
              Cencel
            </button>
            <button
              className="text-white font-bold flex items-center justify-center px-[50px] py-3 bg-green-700 - rounded-xl hover:bg-green-800"
              onClick={resetField}
            >
              Resset
            </button>

            <button
              type="submit"
              className="text-white font-bold flex items-center justify-center px-[50px] py-3 bg-blue-500 rounded-xl hover:bg-blue-700"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoInput;
