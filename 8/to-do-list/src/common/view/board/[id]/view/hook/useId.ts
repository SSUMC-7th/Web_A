import useGetTodoId from "@/common/hook/query/useGetTodoId";
import { useParams } from "react-router-dom";

export default function useId() {
  const { id } = useParams();

  const { data, isError, isLoading, error } = useGetTodoId({
    id: id ? id : "",
  });

  return { data, isError, isLoading, error };
}
