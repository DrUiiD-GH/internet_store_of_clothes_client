import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CategoryBar from "../components/CategoryBar/CategoryBar";
import CatalogProductsList from "../components/CatalogProductsList/CatalogProductsList";
import {observer} from "mobx-react-lite";

const CatalogPage = observer(() => {
    return (
        <Container>
           <Row>
               <Col mb={3}>
                   <CategoryBar/>
               </Col>
               <Col md={9}>
                    <CatalogProductsList/>
               </Col>
           </Row>
        </Container>
    );
});

export default CatalogPage;