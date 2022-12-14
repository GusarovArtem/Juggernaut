import React from 'react';
import {Card, Col, Image} from "react-bootstrap";

import star from './../assets/star.png';
import {useNavigate} from 'react-router-dom';
import {DEVICE_ROUTE} from "../../utils/consts/deviceRoutes";

const DeviceItem = ({device}) => {
    const history = useNavigate();
    return (
        <Col md={3} className="mt-3" onClick={() => history(DEVICE_ROUTE + '/' + device.id)}>
            <Card
                className="p-2"
                style={{width: 150,cursor: "pointer"}}
                border={"Light"}
            >
                <Image style={{width: "100%"}} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className="d-flex justify-content-between align-items-center mt-2">
                    <div className="text-black-50">{device && device.brand.name}</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image className="ml-1" src={star} style={{width: "20px", height: "20px"}}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;