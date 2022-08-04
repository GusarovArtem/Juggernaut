import {$authHost, $host} from "./index";
import {BRAND_API_ROUTE} from "../utils/consts/apiRoutes";

export const createBrand = async (brand) => {
    const {data} = await $authHost.post(BRAND_API_ROUTE, brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get(BRAND_API_ROUTE)
    return data
}

export const deleteBrand = async (id) => {
    const {data} = await $authHost({method:'DELETE', url: BRAND_API_ROUTE + '/' + id});
    return data;
}
