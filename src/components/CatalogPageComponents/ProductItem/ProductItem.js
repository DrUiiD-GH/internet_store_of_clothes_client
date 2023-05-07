import React from 'react';
import {Col} from "react-bootstrap";
import styles from './ProductItem.module.css'
import {useNavigate} from "react-router-dom";
import {ITEM_ROUTE} from "../../../utils/consts";

const ProductItem = ({product}) => {
    const navigate = useNavigate()

    return (
        <Col md={3}>
            <div className={styles.card}>
                <div className={styles.card__img}>
                    <img
                        className={styles.card__img_img}
                        src={product.img?
                            process.env.REACT_APP_API_URL + 'catalog/'+product.img.src
                            :
                            '/img/pic/noImg.png'
                        }
                        alt={product.name}
                        onClick={()=>navigate(ITEM_ROUTE + '/' + product.id)}
                    />
                </div>

                <div className={styles.card__description}>
                    <h3 className={styles.description__name}>{product.name}</h3>
                    <h4 className={styles.description__cat}>{product.subcategoryName}</h4>
                    <span className={styles.description__pr}>{product.price} ₽</span>
                </div>
            </div>
        </Col>
    );
};

export default ProductItem;