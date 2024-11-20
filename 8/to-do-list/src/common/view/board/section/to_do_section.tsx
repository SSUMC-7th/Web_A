import { ToDoCard } from "@/common/component/to_do_card";
import useGetTodo from "@/common/hook/query/useGetTodo";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ToDoSection() {
  // 검색 기능 관련 훅
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState(query);
  const inputRef = useRef(null); // 리렌더링 돼도 검색창 포커스 유지

  const { data, isError, isLoading, error } = useGetTodo({ title: search });

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  const { toast } = useToast(); // toast훅
  const [progress, setProgress] = useState(0); // 로딩창 보여주기용
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast({
        title: "Todo 로드 실패",
        description:
          error instanceof Error ? error.message : "에러가 발생했습니다.",
        action: (
          <ToastAction altText="Undo" onClick={() => window.location.reload()}>
            재시도
          </ToastAction>
        ),
      });
    }
  }, [isError, error, toast]);

  // 로딩창 보여주기용
  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 300);
      return () => clearInterval(interval);
    }
  }, [isLoading]);
  // 로딩창 보여주기용 코드 끝

  if (isError) {
    return (
      <section className="flex justify-center items-center w-full h-[200px]">
        <Progress value={progress} className="w-[60%]" />
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className="flex justify-center items-center w-full h-[200px]">
        <Progress value={progress} className="w-[60%]" />
      </section>
    );
  }

  const resp = data ? data[0] : [];

  return (
    <section className="mx-[2rem] flex flex-col justify-center items-center">
      <Input
        ref={inputRef}
        className="w-[22rem] h-[3rem]"
        placeholder="검색어를 입력하세요."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {resp.length > 0 && (
        <ScrollArea className="mt-[2rem] w-full whitespace-nowrap rounded-lg border">
          <div className="flex w-max space-x-4 p-4">
            {resp.map((todo, index) => (
              <ToDoCard
                key={index}
                todo={todo}
                onClick={() => navigate(`/todo/${todo.id}`)}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      )}
    </section>
  );
}
