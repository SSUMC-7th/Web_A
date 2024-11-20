import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

export default function ButtonSection({
  deleteTodo,
  submit,
}: ButtonSectionProps) {
  const navigate = useNavigate();
  const handleSubmit = () => {
    submit(); // 수정 동작 수행
    navigate("/"); // 메인 페이지로 이동
  };
  const handleDelete = () => {
    deleteTodo();
    navigate("/");
  };
  return (
    <section className="flex flex-row justify-between w-[30rem] ">
      <Button
        variant="outline"
        className="flex items-center gap-2 font-semibold"
        onClick={() => navigate(-1)}
      >
        <ArrowLeftIcon className="w-5 h-5" />
        뒤로가기
      </Button>
      <Button
        variant="outline"
        className="flex items-center gap-2 font-semibold"
        onClick={handleDelete}
      >
        삭제
      </Button>
      <Button
        className="flex items-center gap-2 font-semibold"
        onClick={handleSubmit}
      >
        수정
        <ArrowRightIcon className="w-5 h-5" />
      </Button>
    </section>
  );
}

interface ButtonSectionProps {
  deleteTodo: VoidFunction;
  submit: VoidFunction;
}
