import './FootBar.css';
import React from 'react';
import {observer} from "mobx-react-lite";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faYoutube, faTelegram, faViber} from "@fortawesome/free-brands-svg-icons";
import {NavLink} from "react-router-dom";
import {CONTACTS_ROUTE, SHIPPING_PAYMENT_ROUTE, SHOP_ROUTE} from "../../utils/consts/shopRoutes";
import Contacts from "../../pages/shop/Contacts";

const Footbar = observer(() => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>About Juggernaut Online Store</h6>
                        <p className="text-justify">
                            Buying clothes, electronics, appliances, furniture and more. There is delivery and reliable payment.
                            Only reliable and proven products
                        </p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Contacts</h6>
                        <Contacts />
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Quick links</h6>
                        <ul className="footer-links">
                            <li><NavLink to={SHOP_ROUTE}>Main</NavLink></li>
                            <li><NavLink to={SHIPPING_PAYMENT_ROUTE}>Delivery & Payment</NavLink></li>
                            <li><NavLink to={CONTACTS_ROUTE}>Contacts</NavLink></li>
                            <li><NavLink to={CONTACTS_ROUTE}>Privacy Policy</NavLink></li>
                            <li><NavLink to={CONTACTS_ROUTE}>Sitemap</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by
                            <a href="mailto:artemmaksimovich1@gmail.com">artemmaksimovich1@gmail.com</a>.
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li><a className="facebook" href="/"><FontAwesomeIcon icon={faViber}/></a></li>
                            <li><a className="twitter" href="/"><FontAwesomeIcon icon={faTelegram}/></a></li>
                            <li><a className="dribble" href="/"><FontAwesomeIcon icon={faInstagram}/></a></li>
                            <li><a className="linkedin" href="/"><FontAwesomeIcon icon={faYoutube}/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
});
export default Footbar;

