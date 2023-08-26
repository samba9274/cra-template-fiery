import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

export const Router = () => <RouterProvider router={router} />;
