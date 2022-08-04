import {$authHost} from "./index";
import {RATING_API_ROUTE} from "../utils/consts/apiRoutes";
import {CHECK_RATING_ROUTE} from "../utils/consts/deviceRoutes";

export const addRating = async (body) => {
    const {data} = await $authHost.post(RATING_API_ROUTE, body);
    return data;
}

export const checkRating = async (body) => {
    const {data} = await $authHost.post(RATING_API_ROUTE + CHECK_RATING_ROUTE, body);
    return data;
}