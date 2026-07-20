import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/bodoni-moda";
import "@fontsource-variable/archivo";
import "./index.css";
import App from "./App.tsx";
import { ModeProvider } from "./theme/ModeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ModeProvider>
      <App />
    </ModeProvider>
  </StrictMode>,
);
