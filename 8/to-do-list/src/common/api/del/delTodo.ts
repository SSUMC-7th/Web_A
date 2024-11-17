import { client } from "../client";

export const delTodo = async ({ id }: delTodoProps) => {
  return await client({
    url: `/todo/${id}`,
    method: "delete",
  });
};

export interface delTodoProps {
  id: number;
}
