import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const PUT = async (req: Request) => {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json({ message: "Id is required" }, { status: 400 });
    }
    const updatedTodo = await req.json();
    const data = await prisma.todo.update({
      where: {
        id: Number(id),
      },
      data: updatedTodo,
    });

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error updating todo:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};
