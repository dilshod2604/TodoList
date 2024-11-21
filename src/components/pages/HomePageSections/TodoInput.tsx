"use client";
import { useAddTodosMutation } from "@/redux/api/todo";
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

  const onSubmit: SubmitHandler<InputValues> = async (value) => {
    try {
      const todos = {
        title: value.title,
        image: value.image,
        chaked: false,
      };
      await addTodo(todos);
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="mt-[50px]">
      <div className="container">
        <div className="w-full p-4 border  rounded-xl  flex items-center flex-col gap-y-4">
          <h1 className="  font-bold  text-3xl text-orange-500">
            My Dayle routine
          </h1>
          <form
            className="flex flex-col items-center gap-y-2 w-full"
            onClick={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              placeholder="Title"
              {...register("title", { required: true })}
              className=" w-full h-[40px] bg-neutral-100 rounded-md placeholder:text-neutral-600 px-4 focus:outline-none "
            />
            <input
              type="text"
              placeholder="Image URL"
              {...register("image", { required: true })}
              className=" w-full h-[40px] bg-neutral-100 rounded-md placeholder:text-neutral-600 px-4 focus:outline-none "
            />
            <div className="w-full flex items-center justify-end">
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
    </section>
  );
};

export default TodoInput;
