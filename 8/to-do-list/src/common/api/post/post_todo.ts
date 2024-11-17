import { client } from "../client";

export const postTodo = async ({
  title,
  content,
  checked = false,
}: postTodoProps) => {
  return await client({
    url: "/todo",
    method: "post",
    data: {
      title: title,
      content: content,
      checked: checked,
    },
  });
};

export interface postTodoProps {
  title: string;
  content: string;
  checked?: boolean;
}
