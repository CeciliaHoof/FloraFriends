import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import 'semantic-ui-css/semantic.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes"

const router = createBrowserRouter(routes)

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
