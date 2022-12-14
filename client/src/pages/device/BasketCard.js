import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Col, Image, Row} from "react-bootstrap";
import emptyBasket from "./../assets/emptyBasket.jpg";
import {NavLink} from "react-router-dom";
import {Context} from "../../index";
import {ORDERING_ROUTE} from "../../utils/consts/orderRoutes";
import ItemFromBasket from "../../components/device/ItemFromBasket";

const BasketCard = observer(() => {
    const {basket} = useContext(Context);

    if(basket.Basket.length === 0) {
        return (
            <div className="d-flex flex-column align-items-center mt-5">
                <Image src={emptyBasket}/>
                <div className="text-center mt-5" style={{fontSize: 28}}><b>Empty shopping basket</b></div>
            </div>
        )
    }

    return (
        <>
            <br/>
            <NavLink to={ORDERING_ROUTE}>
                <Button>Checkout</Button>
            </NavLink>
            <Row className="mt-3">
                <Col xs={12}>
                    {basket.Basket.map(device => <ItemFromBasket key={device.id} device={device}/>)}
                </Col>
            </Row>
        </>
    );
});

export default BasketCard;