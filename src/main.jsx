import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./layout/Route";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-full mx-auto bg-gray-100">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
