import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CategoryBar from "../components/CatalogPageComponents/CategoryBar/CategoryBar";
import CatalogProductsList from "../components/CatalogPageComponents/CatalogProductsList/CatalogProductsList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {getCategories, getProducts} from "../http/CatalogAPI";


const CatalogPage = observer(() => {
    const {category, product}= useContext(Context)

    useEffect(()=>{
        getCategories().then(data=>category.setCategories(data))
        getProducts().then(data=>product.setProducts(data.rows))
    }, [])

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