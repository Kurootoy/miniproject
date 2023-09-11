import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  // insert your path here
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  <RouterProvider router={router} />
);
