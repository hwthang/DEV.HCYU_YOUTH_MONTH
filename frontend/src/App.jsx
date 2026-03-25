import React from "react";
import { AppRouter } from "./routes/AppRouter";
import { RouterProvider } from "react-router";

const App = () => {
  const router = AppRouter;
  return <RouterProvider router={router} />;
};

export default App;
