import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#611bbd",
          borderRadius: "8px",
        },
      }}
    >
      <App />
    </ClerkProvider>
  </StrictMode>,
);
