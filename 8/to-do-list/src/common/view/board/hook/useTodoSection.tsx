import { Todo } from "@/common/api/get/getTodo";
import { usePatchTodo } from "@/common/hook/api/usePatchTodo";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export function useTodoSection({ todo }: UseTodoSectionProps) {
  const { mutateAsync: patchTodo } = usePatchTodo();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [checked, setChecked] = useState(false);
  const { toast } = useToast();

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
        id: id,
        title: title,
        content: content,
        checked: false,
      });
      setTitle("");
      setContent("");
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
  };
}

interface UseTodoSectionProps {
  todo: Todo;
}
