import { client } from "../client";

export const patchTodo = async ({
  id,
  title,
  content,
  checked = false,
}: patchTodoProps) => {
  return await client({
    url: `/todo/${id}`,
    method: "patch",
    data: {
      title: title,
      content: content,
      checked: checked,
    },
  });
};

export interface patchTodoProps {
  id: number;
  title: string;
  content: string;
  checked?: boolean;
}
