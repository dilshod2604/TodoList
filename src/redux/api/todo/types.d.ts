namespace TODOList {
  type AddTodoResponse = void;
  type AddTodoRequest = PostTodo;
  type GetTodoResponse = GetTodo[];
  type GetTodoRequest = void;

  type EditTodoResponse = void;
  type EditTodoRequest = Edit;

  type DeleteTodoResponse = void;
  type DeleteTodoRequest = number;
}
