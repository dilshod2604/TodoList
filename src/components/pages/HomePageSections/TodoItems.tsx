"use client";
import {
  useDeleteTodoMutation,
  useEditTodoMutation,
  useGetTodosQuery,
} from "@/redux/api/todo";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TodoItems = () => {
  const { data: todos } = useGetTodosQuery();
  const [editTodo] = useEditTodoMutation();
  const [delteTodo] = useDeleteTodoMutation();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [listId, setListId] = useState(null);
  const [value, setValue] = useState<string>("");
  const [url, setImageUrl] = useState<string>("");

  const editFunc = (title, image, id) => {
    setIsEdit(true);
    setListId(id);
    setValue(title);
    setImageUrl(image);
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
        <div className="flex flex-col w-full p-4 border rounded-md">
          <ul className="flex flex-col gap-y-3 w-full ">
            {todos?.map((todo) => (
              <li
                key={todo.id}
                className="w-full h-[60px] rounded-md bg-slate-100 px-4 py-3 flex items-center justify-between"
              >
                {listId === todo.id && isEdit ? (
                  <div className="flex items-center gap-x-2">
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
                    onClick={() => editFunc(todo.title, todo.image, todo.id)}
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
        </div>
      </div>
    </section>
  );
};

export default TodoItems;
