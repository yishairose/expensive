import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../src/assets/index.css";
import Home from "./pages/home/Home";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import Login from "./pages/login/Login";
import Signup from "./pages/login/Signup";
import AppLayout from "./pages/app/AppLayout";
import ContextLayout from "./contexts/ContextLayout";
import { BudgetProvider } from "./contexts/BudgetContext";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <PageNotFound /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  {
    path: "/app",
    element: <ContextLayout />,
    children: [
      {
        index: true,
        element: <AppLayout />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
