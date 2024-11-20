import { delTodo, delTodoProps } from "@/common/api/del/delTodo";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export function useDelTodo(): UseMutationResult<
  AxiosResponse,
  Error,
  delTodoProps
> {
  return useMutation<AxiosResponse, Error, delTodoProps>({
    mutationFn: delTodo,
  });
}
