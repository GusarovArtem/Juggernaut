import React from 'react';
import {Container, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const ShippingPaymant = observer(() => {
    return (
        <Container
            style={{height: window.innerHeight - 296}}
        >
            <Row className="d-flex justify-content-center align-items-center mb-2">
                <h1>Доставка и оплата</h1>
            </Row>
            <Row>
                <h2>Доступные способы оплаты</h2>
            </Row>
            <Row>
                <h6>Bank transfer (for individuals and legal entities).<br/>
                    Bank transfer through a bank branch.<br/>
                    Payment to a PrivatBank card through Privat24.<br/><br/>
                    Prepayment.<br/>
                    We start to fulfill the order only after 100% prepayment of its cost.<br/>
                    <br/>
                </h6>
            </Row>
            <Row>
                <h2>Delivery</h2>
            </Row>
            <Row>
                <h6>
                    The delivery time of the order depends on the carrier.<br/>
                    Delivery of the finished order in Kyiv: courier services, New mail. You can also pick up the goods from our office yourself or send a courier for it.<br/>
                    Delivery cost in Kyiv - 150 UAH.<br/>
                    Delivery of the order across Ukraine: Новая почта.
                </h6>
            </Row>
        </Container>
    );
});

export default ShippingPaymant;