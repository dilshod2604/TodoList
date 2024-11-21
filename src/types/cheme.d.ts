interface PostTodo {
  title: string;
  image: string;
  chaked: boolean;
}

interface GetTodo {
  id: number;
  title: string;
  image: string;
  chaked: boolean;
  createdAt: Date;
  updatedAt: Date;
}
interface Edit {
  id: number | undefined;
  title: string;
  image: string;
  chaked: boolean;
}
