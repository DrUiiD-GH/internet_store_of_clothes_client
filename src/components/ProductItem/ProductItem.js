import React from 'react';
import {Col} from "react-bootstrap";
import styles from './ProductItem.module.css'

const ProductItem = ({product}) => {




    return (
        <Col md={4}>
            <div className={styles.card}>
                <img className={styles.card__img} alt={product.name}/>
                <div className={styles.card__description}>
                    <h3 className={styles.description__name}>{product.name}</h3>
                    <h4 className={styles.description__cat}>Рубашки</h4>
                    <span className={styles.description__pr}>{product.price} ₽</span>
                </div>
            </div>
        </Col>
    );
};

export default ProductItem;