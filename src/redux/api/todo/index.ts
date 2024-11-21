import { api as index } from "..";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    addTodos: build.mutation<TODOList.AddTodoResponse, TODOList.AddTodoRequest>(
      {
        query: (data) => ({
          url: "/api/add",
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["todo"],
      }
    ),
    getTodos: build.query<TODOList.GetTodoResponse, TODOList.GetTodoRequest>({
      query: (data) => ({
        url: "/api/get",
        method: "get",
      }),
      providesTags: ["todo"],
    }),
    editTodo: build.mutation<
      TODOList.EditTodoResponse,
      TODOList.EditTodoRequest
    >({
      query: (data) => ({
        url: `/api/edit/${data.id}`,
        method: "PUT",
        body: {
          title: data.title,
          image: data.image,
          chaked: data.chaked,
        },
      }),
      invalidatesTags: ["todo"],
    }),
    deleteTodo: build.mutation<
      TODOList.DeleteTodoResponse,
      TODOList.DeleteTodoRequest
    >({
      query: (id) => ({
        url: `/api/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});
export const {
  useAddTodosMutation,
  useGetTodosQuery,
  useEditTodoMutation,
  useDeleteTodoMutation,
} = api;
