import { SizedBox } from "@/common/component/sized_box";
import { useTodoSection } from "../../../hook/useTodoSection";
import HeadSection from "../../../section/head_section";
import ButtonSection from "./button_section";
import TitleSection from "./title_section";
import ContentSection from "./content_section";
import { Todo } from "@/common/api/get/get_todo";

export default function SectionGroup({ todo }: SectionGroupProps) {
  const {
    title,
    content,
    checked,
    handleTitle,
    handleContent,
    handleChecked,
    handleSubmit,
    handleDelTodo,
  } = useTodoSection({ todo });
  return (
    <>
      <SizedBox size={"2rem"} direction="vertical" />
      <HeadSection />
      <SizedBox size={"2rem"} direction="vertical" />
      <ButtonSection deleteTodo={handleDelTodo} submit={handleSubmit} />
      <SizedBox size={"2rem"} direction="vertical" />
      <TitleSection
        title={title}
        checked={checked}
        handleTitle={handleTitle}
        handleChecked={handleChecked}
      />
      <SizedBox size={"2rem"} direction="vertical" />
      <ContentSection content={content} handleContent={handleContent} />
    </>
  );
}

interface SectionGroupProps {
  todo: Todo;
}
