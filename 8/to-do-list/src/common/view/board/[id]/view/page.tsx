import { Commet } from "react-loading-indicators";
import useId from "./hook/useId";
import { Ban } from "lucide-react";
import SectionGroup from "./section/section_group";
import { Todo } from "@/common/api/get/get_todo";
import HeadSection from "../../section/head_section";
import { SizedBox } from "@/common/component/sized_box";

export default function BoardDetailPage() {
  const { data, isError, isLoading } = useId();

  if (isLoading) {
    return (
      <section className="w-full flex flex-col items-center justify-center">
        <SizedBox size={"2rem"} direction="vertical" />
        <HeadSection />
        <SizedBox size={"2rem"} direction="vertical" />
        <Commet color="#444444" />
      </section>
    );
  }

  if (isError || !data) {
    return (
      <section className="w-full flex items-center flex-col">
        <SizedBox size={"2rem"} direction="vertical" />
        <HeadSection />
        <SizedBox size={"2rem"} direction="vertical" />
        <Ban className="size-[4rem] text-gray-400" />
      </section>
    );
  }

  const todo: Todo = data;

  return (
    <section className="mx-[2rem]">
      <SectionGroup todo={todo} />
    </section>
  );
}
