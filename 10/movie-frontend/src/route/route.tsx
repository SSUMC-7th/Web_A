import MainPage from "@/common/page/main/page";
import SignInPage from "@/onboarding/page/sign_in_page/page";
import SignUpPage from "@/onboarding/page/sign_up_page/page";
import { Layout } from "@/route/outlet";
import { Route, Routes } from "react-router-dom";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
}
