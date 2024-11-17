import { usePostTodo } from "@/common/hook/mutation/usePostTodo";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export function usePostSection() {
  const { mutateAsync: postTodo } = usePostTodo();
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { toast } = useToast();

  const handleTitle = (newTitle: string) => {
    setTitle(newTitle);
  };

  const handleContent = (newContent: string) => {
    setContent(newContent);
  };

  const handleSubmit = async () => {
    if (title && content) {
      await postTodo({
        title: title,
        content: content,
        checked: false,
      });
      setTitle("");
      setContent("");
      toast({
        title: "Todo 추가 성공",
        description: "새로운 할 일이 성공적으로 추가되었습니다!",
        action: <ToastAction altText="Undo">확인</ToastAction>,
      });
      queryClient.invalidateQueries({ queryKey: ["get-todo", ""] });
    } else {
      toast({
        title: "Todo 추가 실패",
        description: "Title과 Content를 모두 입력해주세요.",
        action: <ToastAction altText="Retry">확인</ToastAction>,
      });
    }
  };

  return {
    title,
    content,
    handleTitle,
    handleContent,
    handleSubmit,
  };
}
