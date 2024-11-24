import { Todo } from "@/common/api/get/get_todo";
import { useDelTodo } from "@/common/hook/mutation/useDelTodo";
import { usePatchTodo } from "@/common/hook/mutation/usePatchTodo";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export function useTodoSection({ todo }: UseTodoSectionProps) {
  const { mutateAsync: patchTodo, isError } = usePatchTodo();
  const [title, setTitle] = useState(todo.title);
  const [content, setContent] = useState(todo.content);
  const [checked, setChecked] = useState(todo.checked);
  const { toast } = useToast();

  const { mutateAsync: delTodo } = useDelTodo({ search: "" });

  const handleDelTodo = async () => {
    await delTodo({ id: todo.id });
  };

  const handleTitle = (newTitle: string) => {
    setTitle(newTitle);
  };

  const handleContent = (newContent: string) => {
    setContent(newContent);
  };

  const handleChecked = (newChecked: boolean) => {
    setChecked(newChecked);
  };

  const handleSubmit = async () => {
    if (title && content) {
      await patchTodo({
        id: todo.id,
        title: title,
        content: content,
        checked: checked,
      });
      toast({
        title: "Todo 수정 성공",
        description: "할 일을 성공적으로 수정했습니다!",
        action: <ToastAction altText="Undo">확인</ToastAction>,
      });
    } else {
      toast({
        title: "Todo 수정 실패",
        description: "Title과 Content를 모두 입력해주세요.",
        action: <ToastAction altText="Retry">확인</ToastAction>,
      });
    }
  };

  return {
    title,
    content,
    checked,
    handleTitle,
    handleContent,
    handleChecked,
    handleSubmit,
    handleDelTodo,
    isError,
  };
}

interface UseTodoSectionProps {
  todo: Todo;
}
