import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Facts from "./pages/Facts";
import MainPage from "./pages/MainPage";

const routs = [
  {
    element: <MainPage />,
    path: "/",
  },
  {
    element: <About />,
    path: "about",
  },
  {
    path: "/:factId",
    element: <Facts />,
  },
];

const router = createBrowserRouter(routs);

export { router };
