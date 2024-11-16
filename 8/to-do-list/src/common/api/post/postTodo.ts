import { client } from "../client";

export const postTodo = async ({
  title,
  content,
  checked = false,
}: todoProps) => {
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

export interface todoProps {
  title: string;
  content: string;
  checked?: boolean;
}
