import Home from "../components/Home/Home";
import Login from "../components/Others/Login";
import Register from "../components/Others/Register";
import Main from "../layout/Main";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ],
  },
]);

export default router;
