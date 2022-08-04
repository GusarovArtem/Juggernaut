import {$authHost, $host} from "./index";
import {TYPE_API_ROUTE} from "../utils/consts/apiRoutes";

export const createType = async (type) => {
    const {data} = await $authHost.post(TYPE_API_ROUTE, type)
    return data
}

export const deleteType = async (id) => {
    const {data} = await $authHost({method:'DELETE', url: TYPE_API_ROUTE + id});
    return data;
}

export const fetchTypes = async () => {
    const {data} = await $host.get(TYPE_API_ROUTE)
    return data
}
