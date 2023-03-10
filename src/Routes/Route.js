import BenefitAndFeature from "../components/BenefitAndFeature/BenefitAndFeature";
import Home from "../components/Home/Home";
import Login from "../components/Others/Login";
import Register from "../components/Others/Register";
import ProductDetails from "../components/ProductDetails/ProductDetails";
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
        path: '/products-details/:id',
        element: <ProductDetails></ProductDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/product-details/${params.id}`),
        // children: [
        //   {
        //     path: '/benefit',
        //     element: <BenefitAndFeature></BenefitAndFeature>
        //   }
        // ]
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
