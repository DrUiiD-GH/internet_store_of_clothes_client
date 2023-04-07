import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CategoryBar from "../components/CatalogPageComponents/CategoryBar/CategoryBar";
import CatalogProductsList from "../components/CatalogPageComponents/CatalogProductsList/CatalogProductsList";
import {observer} from "mobx-react-lite";

const CatalogPage = observer(() => {
    return (
        <Container style={{minHeight:'900px'}}>
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