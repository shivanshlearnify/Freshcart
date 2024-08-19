import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hompage from "./pages/homepage/Hompage.jsx";
import About from "./pages/about/About.jsx";
import ProductCategory from "./pages/productCategory/Productcategory.jsx";
import ProductPage from "./pages/productPage/ProductPage.jsx";
import AllProducts from "./pages/allProducts/AllProducts.jsx";
import CartPage from "./pages/cartPage/CartPage.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      { path: "/", element: <Hompage /> },
      { path: "/about", element: <About /> },
      { path: "/Product-Category/:Category", element: <ProductCategory /> },
      { path: "/Product/:id", element: <ProductPage /> },
      { path: "/AllProducts", element: <AllProducts /> },
      { path: "/cartPage", element: <CartPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>,
);
