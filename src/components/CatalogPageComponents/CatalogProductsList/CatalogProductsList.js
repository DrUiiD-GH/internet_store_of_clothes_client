import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import styles from './CatalogProductsList.module.css'
import {Context} from "../../../index";
import ProductItem from "../ProductItem/ProductItem";
import {Row} from "react-bootstrap";

const CatalogProductsList = observer(() => {
    const {product} = useContext(Context)

    return (
        <Row className={styles.productsList}>
            {product.products.map( product => <ProductItem key={product.id} product={product}/>)}
        </Row>
    );
});

export default CatalogProductsList;