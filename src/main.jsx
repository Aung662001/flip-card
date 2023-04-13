import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FlashCardProvider from "./FlashCardContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FlashCardProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FlashCardProvider>
);
