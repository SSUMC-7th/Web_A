import { Header } from "@/common/layout/header/header";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}
