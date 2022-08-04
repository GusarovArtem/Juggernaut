import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";
import {AUTH_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts/userRoutes";
import {USER_API_ROUTE} from "../utils/consts/apiRoutes";

export const registration = async (email, password) => {
    const {data} = await $host.post( USER_API_ROUTE + REGISTRATION_ROUTE, {email, password, role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post(USER_API_ROUTE  + LOGIN_ROUTE, {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get(USER_API_ROUTE + AUTH_ROUTE )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}