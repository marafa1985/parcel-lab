import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <main className="flex items-center justify-between min-h-screen m-auto  md:from-blue-100 md:bg-gradient-to-b ">
      <Outlet />
    </main>
  );
};
