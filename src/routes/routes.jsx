import { App } from "../components/App.jsx";
import { MainPage } from "../components/MainPage.jsx";
import { ProductsPage } from "../components/ProductsPage.jsx";
import { ProductCart } from "../components/ProductCart.jsx";
import { CheckoutPage } from "../components/CheckoutPage.jsx";
import { ErrorPage } from "../components/ErrorPage.jsx";

export const routes = [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
            index: true,
            element: <MainPage />
        },
        {
            path: "products",
            element: <ProductsPage />,
            children: [
                {
                    path: ":productId",
                    element: <ProductCart />
                },
            ]
        },
        {
            path: "checkout",
            element: <CheckoutPage />
        }
      ],
    },
];