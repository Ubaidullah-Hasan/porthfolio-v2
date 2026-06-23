import { createBrowserRouter } from "react-router";
import App from "../App";
import NotFound from "../components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
