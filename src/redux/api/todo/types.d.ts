namespace TODOList {
  type AddTodoResponse = void;
  type AddTodoRequest = postTodo;
  type GetTodoResponse = getTodo[];
  type GetTodoRequest = void;

  type EditTodoResponse = void;
  type EditTodoRequest = edit;

  type DeleteTodoResponse = void;
  type DeleteTodoRequest = number;
}
