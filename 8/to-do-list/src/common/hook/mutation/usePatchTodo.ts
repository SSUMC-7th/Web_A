import { patchTodo, patchTodoProps } from "../../api/patch/patch_todo";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export function usePatchTodo(): UseMutationResult<
  AxiosResponse,
  Error,
  patchTodoProps
> {
  return useMutation<AxiosResponse, Error, patchTodoProps>({
    mutationFn: patchTodo,
  });
}
