import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ImgOverview from "../components/ItemPageComponents/ImgOverview/ImgOverview";
import BuyCard from "../components/ItemPageComponents/BuyCard/BuyCard";
import ItemDescription from "../components/ItemPageComponents/ItemDescription/ItemDescription";

const ItemPage = () => {
    return (
        <Container style={{minHeight:'900px'}}>
            <Row>
                <Col md={8}>
                    <ImgOverview/>
                    <ItemDescription/>
                </Col>
                <Col md={4} style={{position:"relative"}}>
                    <BuyCard/>
                </Col>
            </Row>
        </Container>
    );
};

export default ItemPage;