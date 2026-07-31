import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../index.css";

const root = document.getElementById("root");
root.className = "min-h-screen bg-gray-900 text-white p-8";

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
