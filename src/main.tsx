
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import {AuthProvider } from "./contexts/AuthProvider.tsx";
  import "./index.css";

  createRoot(document.getElementById("root")!).render(
  <AuthProvider><App /></AuthProvider>);
  