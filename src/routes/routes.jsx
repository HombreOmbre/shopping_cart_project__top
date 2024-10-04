import { App } from "../components/App.jsx";
import { MainPage } from "../components/MainPage.jsx";
import { ProductsPage } from "../components/ProductsPage.jsx";
import { ProductCart } from "../components/ProductCart.jsx";
import { CheckoutPage } from "../components/CheckoutPage.jsx";

export const routes = [
    {
      path: "/",
      element: <App />,
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