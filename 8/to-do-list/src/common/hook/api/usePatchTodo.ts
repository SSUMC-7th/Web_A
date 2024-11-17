import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { patchTodo, patchTodoProps } from "@/common/api/patch/patchTodo";

export function usePatchTodo(): UseMutationResult<
  AxiosResponse,
  Error,
  patchTodoProps
> {
  return useMutation<AxiosResponse, Error, patchTodoProps>({
    mutationFn: patchTodo,
  });
}
