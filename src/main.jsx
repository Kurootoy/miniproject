
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "../component/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "../component/SignUp";
import Admin from "../component/homeadmin";


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
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/admin",
    element:<Admin/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
