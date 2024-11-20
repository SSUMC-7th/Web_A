import { useQuery } from "@tanstack/react-query";
import { getTodo, todoProps } from "../../api/get/get_todo";

export default function useGetTodo({ title = "" }: todoProps) {
  return useQuery({
    queryKey: ["get-todo", title],
    queryFn: async () => getTodo({ title }),
  });
}
