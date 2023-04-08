import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PositionsList from "../components/BasketPageComponents/PositionsList/PositionsList";
import BasketCard from "../components/BasketPageComponents/BasketCard/BasketCard";

const BasketPage = () => {

    return (
        <Container style={{minHeight:'900px'}}>
            <Row>
                <Col md={7}>
                    <PositionsList/>
                </Col>
                <Col md={5}>
                    <BasketCard/>
                </Col>
            </Row>
        </Container>
    );
};

export default BasketPage;