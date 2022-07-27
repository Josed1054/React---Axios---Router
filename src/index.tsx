import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./pages/App";
import { IDinfo } from "./pages/IDinfo";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:ID" element={<IDinfo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
