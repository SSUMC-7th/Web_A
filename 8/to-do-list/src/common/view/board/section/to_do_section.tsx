import { ToDoCard } from "@/common/component/to_do_card";
import useGetTodo from "@/common/hook/api/useGetTodo";
import { Progress } from "@/components/ui/progress";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function ToDoSection() {
  const { data, isError, isLoading } = useGetTodo({ title: "" });

  if (isError) {
    return;
  }

  if (isLoading) {
    return (
      <section className="flex justify-center items-center w-full h-[200px]">
        <Progress value={66} className="w-[60%]" />
      </section>
    );
  }

  const resp = data ? data[0] : [];

  return (
    <section className="mx-[2rem]">
      <ScrollArea className="w-full whitespace-nowrap rounded-lg border">
        <div className="flex w-max space-x-4 p-4">
          {resp.map((todo, index) => (
            <ToDoCard key={index} todo={todo} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}
