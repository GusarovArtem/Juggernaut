import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useNavigate} from 'react-router-dom'
import {SHOP_ROUTE} from "../utils/consts/shopRoutes";
import {ADMIN_ROUTE, LOGIN_ROUTE} from "../utils/consts/userRoutes";
import {BASKET_ROUTE} from "../utils/consts/deviceRoutes";
const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useNavigate()

    const logOut = () => {
        localStorage.removeItem('token')
        user.setUser({})
        user.setIsAuth(false)
        history(LOGIN_ROUTE)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white'}} to={SHOP_ROUTE}>Juggernaut</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history(BASKET_ROUTE)}
                        >
                            Basket
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history(ADMIN_ROUTE)}
                            className="ml-2"
                        >
                            Admin
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ml-2"
                        >
                            Log out
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => history(LOGIN_ROUTE)}>Sign in</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
});

export default NavBar;