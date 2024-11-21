interface postTodo {
  title: string;
  image: string;
  chaked: boolean;
}

interface getTodo {
  id: number;
  title: string;
  image: string;
  chaked: boolean;
  createdAt: Date;
  updatedAt: Date;
}
interface edit {
  id: number | null;
  title: string;
  image: string;
  chaked: boolean;
}
