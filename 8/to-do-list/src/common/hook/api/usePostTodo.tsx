import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { postTodo, todoProps } from "../../api/post/postTodo";

export function usePostTodo(): UseMutationResult<
  AxiosResponse,
  Error,
  todoProps
> {
  return useMutation<AxiosResponse, Error, todoProps>({ mutationFn: postTodo });
}
