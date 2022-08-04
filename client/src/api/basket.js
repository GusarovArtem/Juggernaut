import {$authHost, $host} from "./index";
import {BASKET_API_ROUTE} from "../utils/consts/apiRoutes";


export const addDeviceToBasket = async (device) => {
    const {data} = await $authHost.post(BASKET_API_ROUTE, device);
    return data;
}

export const getDeviceFromBasket = async () => {
    const {data} = await $authHost.get(BASKET_API_ROUTE);
    return data;
}

export const deleteDeviceFromBasket = async (id) => {
    const {data} = await $authHost.delete(BASKET_API_ROUTE + '/' + id);
    return data;
}

export const fetchBasket = async () => {
    const {data} = await $host.get(BASKET_API_ROUTE)
    return data
}
