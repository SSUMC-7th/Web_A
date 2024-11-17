import { client } from "../client";

export const getTodo = async ({ title = "" }: todoProps) => {
  const response = await client<TodoResponse>({
    url: "/todo",
    method: "get",
    params: { title },
  });
  return response.data;
};

export interface todoProps {
  title?: string;
}

export interface Todo {
  createdAt: string;
  updatedAt: string;
  version: number;
  id: number;
  title: string;
  content: string;
  checked: boolean;
}

export type TodoResponse = [Todo[], number];
