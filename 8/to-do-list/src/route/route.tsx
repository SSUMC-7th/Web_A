import BoardDetailPage from "@/common/view/board/[id]/view/page";
import BoardPage from "@/common/view/board/page";
import { Route, Routes } from "react-router-dom";

export default function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<BoardPage />} />
      <Route path="/todo/:id" element={<BoardDetailPage />} />
    </Routes>
  );
}
