import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import styles from './CatalogProductsList.module.css'
import {Context} from "../../index";
import ProductItem from "../ProductItem/ProductItem";

const CatalogProductsList = observer(() => {
    const {product} = useContext(Context)

    return (
        <div className={styles.itemsList}>
            {product.products.map( product => <ProductItem key={product.id} product={product}/>)}
        </div>
    );
});

export default CatalogProductsList;