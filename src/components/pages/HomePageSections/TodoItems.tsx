"use client";
import TodoSkeleton from "@/components/ui/TodoSkeleton";
import {
  useDeleteTodoMutation,
  useEditTodoMutation,
  useGetTodosQuery,
} from "@/redux/api/todo";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TodoItems = () => {
  const { data: todos, isLoading } = useGetTodosQuery();
  const [editTodo] = useEditTodoMutation();
  const [delteTodo] = useDeleteTodoMutation();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [listId, setListId] = useState<number | undefined>(undefined);
  const [value, setValue] = useState<string>("");
  const [url, setImageUrl] = useState<string>("");

  const editFunc = (data: GetTodo) => {
    setIsEdit(true);
    setListId(data.id);
    setValue(data.title);
    setImageUrl(data.image);
  };

  const edit = async () => {
    try {
      const uptate = {
        id: listId,
        title: value,
        image: url,
        chaked: false,
      };
      await editTodo(uptate);
      setIsEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: number) => {
    await delteTodo(id);
  };

  return (
    <section className="mt-4">
      <div className="container">
        <div className="flex flex-col h-[570px] w-full p-4 border-2 rounded-md border-blue-500 overflow-hidden">
          {isLoading ? (
            <TodoSkeleton />
          ) : (
            <ul className="flex flex-col gap-y-3 w-full ">
              {todos?.map((todo) => (
                <li
                  key={todo.id}
                  className="w-full h-auto rounded-md bg-slate-100 px-4 py-3 flex items-center justify-between"
                >
                  {listId === todo.id && isEdit ? (
                    <div className="flex items-center gap-x-2 max:sm:flex-col max:sm:gap-y-1">
                      <input
                        type="text"
                        value={value}
                        placeholder="title"
                        className="px-2 py-2 rounded-md  "
                        onChange={(e) => setValue(e.target.value)}
                      />
                      <input
                        type="text"
                        value={url}
                        placeholder="Image Url "
                        className="px-2 py-2 rounded-md "
                        onChange={(e) => setImageUrl(e.target.value)}
                      />
                      <button
                        className="text-white font-bold flex items-center justify-center bg-green-500 rounded-md px-4 py-2 hover:scale-110"
                        onClick={edit}
                      >
                        Edit
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-x-4">
                      <div className="flex items-center justify-center rounded-full overflow-hidden w-[40px] h-[40px]">
                        <img
                          src={todo.image}
                          alt="image"
                          className="w-full h-full"
                        />
                      </div>
                      <p className="text-neutral-700 font-semibold ">
                        {todo.title}
                      </p>
                    </div>
                  )}
                  <div className="flex items-center gap-x-4">
                    <FaEdit
                      size={30}
                      className="text-blue-600 hover:text-blue-800 hover:scale-110"
                      onClick={() => editFunc(todo)}
                    />
                    <MdDelete
                      size={30}
                      className="text-red-600 hover:text-red-800 hover:scale-110"
                      onClick={() => handleDelete(todo.id)}
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default TodoItems;
