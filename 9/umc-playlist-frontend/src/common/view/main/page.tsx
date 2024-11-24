import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-[4rem] h-screen justify-center">
      <Button onClick={() => navigate("/redux-toolkit")}>redux-toolkit</Button>
      <Button onClick={() => navigate("/zustand")}>zustand</Button>
    </div>
  );
}
