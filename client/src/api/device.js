import {$authHost, $host} from "./index";
import {DEVICE_API_ROUTE} from "../utils/consts/apiRoutes";

export const createDevice = async (device) => {
    const {data} = await $authHost.post(DEVICE_API_ROUTE, device)
    return data
}

export const fetchDeleteDevice = async (id) => {
    const {data} = await $authHost({method:'DELETE', url: DEVICE_API_ROUTE + '/' + id });
    return data;
}

export const updateDevices = async (id, body) => {
    const {data} = await $authHost({method:'PUT', url: DEVICE_API_ROUTE + '/' + id, data: body});
    return data;
}

export const fetchDevice = async (typeId, brandId, page, limit= 5) => {
    const {data} = await $host.get(DEVICE_API_ROUTE, {params: {
            typeId, brandId, page, limit
        }})
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get(DEVICE_API_ROUTE + '/' + id)
    return data
}

export const getAllDevicesInAdminPage = async (name, page = 1, filter = "All") => {
    const {data} = await $authHost({method:'GET', url:`${DEVICE_API_ROUTE}/search?page=${page}&name=${name}&filter=${filter}`});
    return data;
}
