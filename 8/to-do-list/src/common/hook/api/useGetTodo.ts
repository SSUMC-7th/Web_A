import { useQuery } from "@tanstack/react-query";
import { getTodo, todoProps } from "../../api/get/getTodo";

export default function useGetTodo({ title = "" }: todoProps) {
  return useQuery({
    queryKey: ["get-todo"],
    queryFn: async () => getTodo({ title }),
  });
}
