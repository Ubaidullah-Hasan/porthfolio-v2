import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { PortfolioProvider } from "./context/PortfolioProvider";
import "./index.css";
import router from "./routes/Routes";

// Force dark mode on the root element
document.documentElement.classList.add("dark");

// Smooth scroll handler for hash navigation (e.g. /#contact)
function scrollToHash() {
  const hash = window.location.hash;
  if (!hash) return;
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    // small timeout to allow React to render the element
    setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
  }
}

window.addEventListener("hashchange", scrollToHash, false);
// call once on load
scrollToHash();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PortfolioProvider>
      <RouterProvider router={router} />
    </PortfolioProvider>
  </StrictMode>,
);
