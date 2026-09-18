import { createBrowserRouter, Navigate } from "react-router";

import { HomePage } from "./pages/HomePage";
import { CatalogPage } from "./pages/CatalogPage";
import { ProductPage } from "./pages/ProductPage";
import { DeliveryPage } from "./pages/DeliveryPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactsPage } from "./pages/ContactsPage";
import { CartPage } from "./pages/CartPage";
import { NotFoundPage } from "./pages/NotFoundPage";

import { ShopLayout } from "./layouts/ShopLayout";

import { productLoader } from "./loaders/productLoader";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <ShopLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path: 'catalog',
                children: [
                    {
                        index: true,
                        element: <CatalogPage/>,
                    },
                    {
                        path: ':productId',
                        element: <ProductPage/>,
                        loader: productLoader
                    },
                ],
            },
            {
                path: 'shop',
                element: <Navigate to='/catalog' replace/>,
            },
            {
                path: 'delivery',
                element: <DeliveryPage/>,
            },
            {
                path: 'about',
                element: <AboutPage/>,
            },
            {
                path: 'contacts',
                element: <ContactsPage/>,
            },
            {
                path: 'cart',
                element: <CartPage/>,
            },
            {
                path: '*',
                element: <NotFoundPage/>,
            },
        ]
    }
])