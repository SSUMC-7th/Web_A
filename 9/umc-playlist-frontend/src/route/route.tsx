import MainPage from "@/common/view/main/page";
import ReduxToolkitPage from "@/common/view/redux-toolkit/page";
import ZustandPage from "@/common/view/zustand/page";
import { Route, Routes } from "react-router-dom";

export default function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/redux-toolkit" element={<ReduxToolkitPage />} />
      <Route path="/zustand" element={<ZustandPage />} />
    </Routes>
  );
}
