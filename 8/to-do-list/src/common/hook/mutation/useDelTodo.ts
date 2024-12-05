import { delTodo, delTodoProps } from "@/common/api/del/delTodo";
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export function useDelTodo({
  search = "",
}: useDelTodoProps): UseMutationResult<AxiosResponse, Error, delTodoProps> {
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse, Error, delTodoProps>({
    mutationFn: delTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-todo", search] });
    },
  });
}

interface useDelTodoProps {
  search?: string;
}
