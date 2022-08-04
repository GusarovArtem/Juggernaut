import React from 'react';
import {Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const Contacts = observer(() => {
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 296}}
        >
            <ul className="footer-links">
                <li><a href="/">+38(068)-741-05-52</a></li>
                <li>Email: <a href="mailto:artemmaksimovich1@gmail.com">artemmaksimovich1@gmail.com</a></li>
                <li>Telegram: <a href="tg://resolve?domain=@GusarovArtemMaksimovich">@GusarovArtemMaksimovich</a></li>
            </ul>
        </Container>
    );
});

export default Contacts;