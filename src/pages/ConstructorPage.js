import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ConstructorCatalog from "../components/ConstructorPageComponents/ConstructorCatalog/ConstructorCatalog";
import ConstructorForm from "../components/ConstructorPageComponents/ConstructorForm/ConstructorForm";

const ConstructorPage = () => {
    return (
        <Container style={{minHeight:'900px'}}>
            <Row>
                <Col md={6}>
                    <ConstructorCatalog/>
                </Col>
                <Col md={6}>
                    <ConstructorForm/>
                </Col>
            </Row>
        </Container>
    );
};

export default ConstructorPage;