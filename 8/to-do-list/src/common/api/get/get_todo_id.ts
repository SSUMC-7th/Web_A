import { client } from "../client";
import { Todo } from "./get_todo";

export const getTodoId = async ({ id }: todoIdProps) => {
  const response = await client<Todo>({
    url: `/todo/${id}`,
    method: "get",
  });
  return response.data;
};

export interface todoIdProps {
  id: string;
}
