import { useState, useEffect } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { SignUpScreen } from "./components/SignUpScreen";
import { GroupsDiscoveryScreen } from "./components/GroupsDiscoveryScreen";
import { GroupTimelineScreen } from "./components/GroupTimelineScreen";
import { CloseFriendsScreen } from "./components/CloseFriendsScreen";
import { CreatePostScreen } from "./components/CreatePostScreen";
import { ProfileScreen } from "./components/ProfileScreen";
import { DesktopSidebar } from "./components/DesktopSidebar";
import { DesktopTimelineScreen } from "./components/DesktopTimelineScreen";
import { DesktopGroupsScreen } from "./components/DesktopGroupsScreen";
import { DesktopFriendsScreen } from "./components/DesktopFriendsScreen";
import { DesktopProfileScreen } from "./components/DesktopProfileScreen";
import { DesktopGroupsList } from "./components/DesktopGroupsList";
import { DesktopFriendsList } from "./components/DesktopFriendsList";
import { DesktopCreatePostScreen } from "./components/DesktopCreatePostScreen";
// import { UserProvider } from "./contexts/UserProvider";

type Screen =
  | "welcome"
  | "signup"
  | "groups"
  | "timeline"
  | "friends"
  | "create-post"
  | "profile";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("welcome");
  const [isDesktop, setIsDesktop] = useState(false);
  const [showCreatePost, setShowCreatePost] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleNavigate = (screen: string) => {
    if (screen === "create-post") {
      if (isDesktop) {
        setShowCreatePost(true);
      } else {
        setCurrentScreen("create-post");
      }
    } else {
      setCurrentScreen(screen as Screen);
      setShowCreatePost(false);
    }
  };

  // Mobile Layout
  if (!isDesktop || currentScreen === "welcome" || currentScreen === "signup") {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-md mx-auto bg-white shadow-2xl min-h-screen relative">
          {currentScreen === "welcome" && (
            <WelcomeScreen onNavigate={handleNavigate} />
          )}
          {currentScreen === "signup" && (
            <SignUpScreen onNavigate={handleNavigate} />
          )}
          {currentScreen === "groups" && (
            <GroupsDiscoveryScreen onNavigate={handleNavigate} />
          )}
          {currentScreen === "timeline" && (
            <GroupTimelineScreen onNavigate={handleNavigate} />
          )}
          {currentScreen === "friends" && (
            <CloseFriendsScreen onNavigate={handleNavigate} />
          )}
          {currentScreen === "create-post" && (
            <CreatePostScreen onNavigate={handleNavigate} />
          )}
          {currentScreen === "profile" && (
            <ProfileScreen onNavigate={handleNavigate} />
          )}
        </div>
      </div>
    );
  }

  // Desktop Layout
  const getActiveScreen = () => {
    if (currentScreen === "timeline" || currentScreen === "create-post") return "timeline";
    return currentScreen;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Left Sidebar - Navigation */}
        <DesktopSidebar
          active={getActiveScreen() as "timeline" | "groups" | "friends" | "profile"}
          onNavigate={handleNavigate}
        />

        {/* Main Content */}
        {currentScreen === "timeline" && <DesktopTimelineScreen />}
        {currentScreen === "groups" && (
          <DesktopGroupsScreen onNavigate={handleNavigate} />
        )}
        {currentScreen === "friends" && (
          <DesktopFriendsScreen onNavigate={handleNavigate} />
        )}
        {currentScreen === "profile" && (
          <DesktopProfileScreen onNavigate={handleNavigate} />
        )}

        {/* Right Sidebar - Contextual */}
        {currentScreen === "timeline" && <DesktopFriendsList />}
        {currentScreen === "groups" && <DesktopGroupsList onSelectGroup={() => handleNavigate("timeline")} />}
        {currentScreen === "friends" && <DesktopGroupsList onSelectGroup={() => handleNavigate("timeline")} />}
      </div>

      {/* Create Post Modal */}
      {showCreatePost && (
        <DesktopCreatePostScreen onClose={() => setShowCreatePost(false)} />
      )}
    </div>
  );
}