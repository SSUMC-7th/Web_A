import BoardPage from "@/common/view/board/page";
import { Route, Routes } from "react-router-dom";

export default function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<BoardPage />} />
    </Routes>
  );
}
