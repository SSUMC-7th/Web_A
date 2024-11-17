import { Commet } from "react-loading-indicators";
import useId from "./hook/useId";
import { Ban } from "lucide-react";
import SectionGroup from "./section/section_group";
import { Todo } from "@/common/api/get/get_todo";

export default function BoardDetailPage() {
  const { data, isError, isLoading } = useId();

  if (isLoading) {
    return (
      <section className="mx-[2rem] mt-[4rem]">
        <Commet color="#444444" />
      </section>
    );
  }

  if (isError || !data) {
    return <Ban className="size-[4rem] text-gray-400" />;
  }

  const todo: Todo = data;

  return (
    <section className="mx-[2rem]">
      <SectionGroup todo={todo} />
    </section>
  );
}
