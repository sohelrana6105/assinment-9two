import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./routes/Routes.jsx";
import AuthProvider from "./authProvider/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer></ToastContainer>
      </>
    </AuthProvider>
  </StrictMode>
);
