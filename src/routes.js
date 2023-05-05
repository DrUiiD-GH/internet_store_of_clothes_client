import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    CATALOG_ROUTE,
    CONSTRUCTOR_ROUTE,
    ITEM_ROUTE,
    MAIN_ROUTE,
    PROFILE_ROUTE
} from "./utils/consts";
import BasketPage from "./pages/BasketPage";
import AdminPage from "./pages/AdminPage";
import MainPage from "./pages/MainPage";
import CatalogPage from "./pages/CatalogPage";
import ItemPage from "./pages/ItemPage";
import ConstructorPage from "./pages/ConstructorPage";
import ProfilePage from "./pages/ProfilePage";

export const authRoutes = [
    {
        path:ADMIN_ROUTE,
        Component: AdminPage
    },
    {
        path: BASKET_ROUTE,
        Component: BasketPage
    },
    {
        path: PROFILE_ROUTE,
        Component: ProfilePage
    }

]

export const publicRoutes = [
    {
        path:MAIN_ROUTE,
        Component: MainPage
    },
    {
        path: CATALOG_ROUTE,
        Component: CatalogPage
    },
    {
        path: ITEM_ROUTE + '/:id',
        Component: ItemPage
    },
    {
        path: CONSTRUCTOR_ROUTE,
        Component: ConstructorPage
    }
]