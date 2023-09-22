import React from "react";
import ReactDOM from "react-dom/client";
//datatables
import "datatables.net";
import "datatables.net-buttons-bs5";
import "datatables.net-buttons/js/buttons.colVis.mjs";
import "datatables.net-buttons/js/buttons.html5.mjs";
import "datatables.net-buttons/js/buttons.print.mjs";
import "pdfmake";
//datatables
import Home from "./pages/auth/home";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import Welcome from "./pages/welcome";
import Index from "./pages/index";
//tabels
import Tabels from "./pages/tabels";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <Index>
        <Welcome />
      </Index>
    ),
  },
  {
    path: "/tabels",
    element: (
      <Index>
        <Tabels />
      </Index>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
