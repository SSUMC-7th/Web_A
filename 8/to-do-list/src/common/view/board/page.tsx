import { SizedBox } from "@/common/component/sized_box";
import PostSection from "./section/post_section";
import HeadSection from "./section/head_section";
import ToDoSection from "./section/to_do_section";
import { Toaster } from "@/components/ui/toaster";

export default function BoardPage() {
  return (
    <>
      <SizedBox size={"2rem"} direction="vertical" />
      <HeadSection />
      <SizedBox size={"2rem"} direction="vertical" />
      <PostSection />
      <SizedBox size={"2rem"} direction="vertical" />
      <ToDoSection />
      <Toaster />
    </>
  );
}
