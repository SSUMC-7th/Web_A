import { useQuery } from "@tanstack/react-query";
import { getTodoId, todoIdProps } from "@/common/api/get/get_todo_id";

export default function useGetTodoId({ id }: todoIdProps) {
  return useQuery({
    queryKey: ["get-todo", id],
    queryFn: async () => getTodoId({ id }),
  });
}
