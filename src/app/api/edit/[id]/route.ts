import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
interface IParamsId {
  params: {
    id: string;
  };
}

export const PUT = async (req: Request, { params }: IParamsId) => {
  try {
    const { id } = params;
    const updatedTodo = await req.json();
    if (!id) {
      return NextResponse.json({ message: "Id is required" }, { status: 404 });
    }
    const data = await prisma.todo.update({
      where: {
        id: Number(id),
      },
      data: updatedTodo,
    });
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 405 }
    );
  }
};
