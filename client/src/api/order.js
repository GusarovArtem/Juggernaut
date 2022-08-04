import {$authHost, $host} from "./index";
import {ORDER_API_ROUTE} from "../utils/consts/apiRoutes";

export const sendOrder = async ({auth, mobile, basket}) => {
    if(auth) {
        const {data} = await $authHost({method:'POST', url: ORDER_API_ROUTE, data: {mobile, basket}})
        return data;
    } else {
        const {data} = await $host({method:'POST', url: ORDER_API_ROUTE, data: {mobile, basket}});
        return data;
    }
}

export const fetchOrders = async ({limit, page, complete}) => {
    const {data} = await $authHost.get(`${ORDER_API_ROUTE}?limit=${limit}&page=${page}&complete=${complete}`);
    return data;
}

export const fetchChangeStatusOrder = async ({complete, id}) => {
    const {data} = await $authHost.put(ORDER_API_ROUTE, {complete, id});
    return data;
}

export const fetchDeleteOrder = async ({id}) => {
    const {data} = await $authHost({method:'DELETE', url: ORDER_API_ROUTE, data: {id}});
    return data;
}

export const getOneOrderDevices = async (id) => {
    const {data} = await $authHost.get(ORDER_API_ROUTE + '/' + id);
    return data;
}
