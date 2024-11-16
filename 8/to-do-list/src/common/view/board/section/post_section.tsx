import { InputCard } from "@/common/component/input_card";
import { usePostSection } from "../hook/usePostSection";

export default function PostSection() {
  const { title, content, handleTitle, handleContent, handleSubmit } =
    usePostSection();

  return (
    <section className="flex justify-center">
      <InputCard
        title={title}
        content={content}
        onTitleChange={handleTitle}
        onContentChange={handleContent}
        onSubmit={handleSubmit}
      />
    </section>
  );
}
