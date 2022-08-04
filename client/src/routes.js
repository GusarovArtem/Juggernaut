import {ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "./utils/consts/userRoutes";
import Admin from "./pages/user/Admin";
import {ORDER_ROUTE, ORDERING_ROUTE} from "./utils/consts/orderRoutes";
import Orders from "./pages/payment/Orders";
import OneOrder from "./pages/payment/OneOrder";
import {BASKET_ROUTE, DEVICE_EDIT_ROUTE, DEVICE_ROUTE} from "./utils/consts/deviceRoutes";
import DevicePageEdit from "./pages/device/DeviceEditPage";
import Ordering from "./pages/payment/Ordering";
import {CONTACTS_ROUTE, SHIPPING_PAYMENT_ROUTE, SHOP_ROUTE} from "./utils/consts/shopRoutes";
import Shop from "./pages/shop/Shop";
import Auth from "./pages/user/Auth";
import DevicePage from "./pages/device/DevicePage";
import BasketCard from "./pages/device/BasketCard";
import Contacts from "./pages/shop/Contacts";
import ShippingPayment from "./pages/payment/ShippingPayment";


export const authRouters = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: ORDER_ROUTE,
        Component: Orders
    },
    {
        path: ORDER_ROUTE + '/:id',
        Component: OneOrder
    },
    {
        path: DEVICE_EDIT_ROUTE + '/:id',
        Component: DevicePageEdit
    },

];

export const publicRouters = [
    {
        path: ORDERING_ROUTE,
        Component: Ordering
    },
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
    {
        path: BASKET_ROUTE,
        Component: BasketCard
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
    {
        path: SHIPPING_PAYMENT_ROUTE,
        Component: ShippingPayment
    },
];