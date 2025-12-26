import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { DesktopSidebar } from "../components/DesktopSidebar";
import { DesktopFriendsList } from "../components/DesktopFriendsList";
import { DesktopGroupsList } from "../components/DesktopGroupsList";

export function DesktopLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const active = location.pathname.split("/")[1] as
    | "timeline"
    | "groups"
    | "friends"
    | "pets"
    | "profile";

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <DesktopSidebar
          active={active}
          onNavigate={(path) => navigate(`/${path}`)}
        />

        <Outlet />

        {active === "timeline" && <DesktopFriendsList />}
        {(active === "groups" || active === "friends") && (
          <DesktopGroupsList onSelectGroup={() => navigate("/timeline")} />
        )}
      </div>
    </div>
  );
}
