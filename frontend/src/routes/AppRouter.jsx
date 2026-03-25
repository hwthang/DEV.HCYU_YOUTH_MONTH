import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
