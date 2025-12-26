import { Outlet } from "react-router-dom";

export function MobileLayout() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-md mx-auto bg-white shadow-2xl min-h-screen relative">
        <Outlet />
      </div>
    </div>
  );
}
