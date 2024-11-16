import { SizedBox } from "@/common/component/sized_box";
import PostSection from "./section/post_section";
import TitleSection from "./section/title_section";
import ToDoSection from "./section/to_do_section";
import { Toaster } from "@/components/ui/toaster";

export default function BoardPage() {
  return (
    <>
      <SizedBox size={"2rem"} direction="vertical" />
      <TitleSection />
      <SizedBox size={"2rem"} direction="vertical" />
      <PostSection />
      <SizedBox size={"2rem"} direction="vertical" />
      <ToDoSection />
      <Toaster />
    </>
  );
}
