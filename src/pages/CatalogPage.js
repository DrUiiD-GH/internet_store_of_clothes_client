import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CategoryBar from "../components/CatalogPageComponents/CategoryBar/CategoryBar";
import CatalogProductsList from "../components/CatalogPageComponents/CatalogProductsList/CatalogProductsList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchCategories, fetchProducts} from "../http/catalogAPI";
import Pages from "../components/CatalogPageComponents/Pages";



const CatalogPage = observer(() => {
    const {category, product}= useContext(Context)

    useEffect(()=>{
        fetchCategories().then(data=>category.setCategories(data))
    }, [])

    useEffect(()=>{
        fetchProducts(category.selectedCategoryId, category.selectedSubcategoryId, product.page, 12).then(data=>{
            product.setProducts(data.rows)
            product.setTotalCount(data.count)
        })
    }, [product.page, category.selectedCategoryId, category.selectedSubcategoryId])

    return (
        <Container style={{minHeight:'900px'}}>
           <Row>
               <Col mb={3}>
                   <CategoryBar/>
               </Col>
               <Col md={9} className={'d-flex justify-content-center flex-column'}>
                   <CatalogProductsList/>
                   <Pages />
               </Col>
           </Row>
        </Container>
    );
});

export default CatalogPage;