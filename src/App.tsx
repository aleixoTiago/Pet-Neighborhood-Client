import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RequireAuth } from "./routes/RequireAuth";
import { PetProvider } from "./contexts/PetProvider";

import { WelcomeScreen } from "./components/WelcomeScreen";
import { SignUpScreen } from "./components/SignUpScreen";
import { GroupsDiscoveryScreen } from "./components/GroupsDiscoveryScreen";
import { GroupTimelineScreen } from "./components/GroupTimelineScreen";
import { CloseFriendsScreen } from "./components/CloseFriendsScreen";
import { PetsScreen } from "./components/PetsScreen";
import { CreatePostScreen } from "./components/CreatePostScreen";
import { ProfileScreen } from "./components/ProfileScreen";

import { AppLayout } from "./layouts/AppLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Públicas */}
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />

        {/* Protegidas */}
        <Route element={<RequireAuth />}>
          <Route
            element={
              <PetProvider>
                <AppLayout />
              </PetProvider>
            }
          >
            <Route path="/timeline" element={<GroupTimelineScreen />} />
            <Route path="/groups" element={<GroupsDiscoveryScreen />} />
            <Route path="/friends" element={<CloseFriendsScreen />} />
            <Route path="/pets" element={<PetsScreen />} />
            <Route path="/create-post" element={<CreatePostScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
