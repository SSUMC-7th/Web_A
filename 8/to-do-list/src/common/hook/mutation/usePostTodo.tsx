import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { postTodo, postTodoProps } from "../../api/post/post_todo";

export function usePostTodo(): UseMutationResult<
  AxiosResponse,
  Error,
  postTodoProps
> {
  return useMutation<AxiosResponse, Error, postTodoProps>({
    mutationFn: postTodo,
  });
}
