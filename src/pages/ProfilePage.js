import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ProfileMenu from "../components/ProfilePageComponents/ProfileMenu/ProfileMenu";
import UserInfo from "../components/ProfilePageComponents/UserInfo/UserInfo";
import UserOrders from "../components/ProfilePageComponents/UserOrders/UserOrders";

const ProfilePage = () => {
    const [chooseOrders, setChooseOrders] = useState(false)

    return (
        <Container style={{minHeight:'900px'}}>
            <Row>
                <Col md={3}>
                    <ProfileMenu setChooseOrders={setChooseOrders} chooseOrders={chooseOrders}/>
                </Col>
                <Col md={7}>{!chooseOrders?
                    <UserInfo/>:<UserOrders/>
                    }

                </Col>
            </Row>
        </Container>
    );
};

export default ProfilePage;