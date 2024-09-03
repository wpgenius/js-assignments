import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Content from "./components/Content.jsx";
import Navbar from "./components/Navbar.jsx";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';

import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
        <Route path='/' element={<Navbar />} >
          <Route path="content:contentId" element={<Content />} />
      </Route>
  </Route>
)
)


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
