import React, {useContext} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom'
import {observer} from "mobx-react-lite";
import * as authRoutes from "react-bootstrap/ElementChildren";
import * as publicRoutes from "react-bootstrap/ElementChildren";
import {Context} from "../../index";
import {SHOP_ROUTE} from "../../utils/consts/shopRoutes";

const AppRouter = observer((children, func) => {
    const {user} = useContext(Context)

    console.log(user)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>, func)}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component/>} exact />
            )}
            <Route path="*" element={<Navigate replace to={SHOP_ROUTE}/>}/>
        </Routes>
    );
});

export default AppRouter;