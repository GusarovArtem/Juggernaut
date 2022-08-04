import React, {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";
import BasketStoreStore from "./store/BasketStore";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Context.Provider value={
        {
            user: new UserStore(),
            device: new DeviceStore(),
            basket: new BasketStoreStore(),
        }
    }>
        <App/>
    </Context.Provider>
)