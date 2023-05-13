import React from 'react';
import {Modal} from "react-bootstrap";
import styles from './OrderModal.module.css'
import MyButtonWhite from "../../UI/button/MyButtonWhite";
import {ITEM_ROUTE} from "../../../utils/consts";
import {useNavigate} from "react-router-dom";

const OrderModal = ({show, onHide, order}) => {
    const navigate = useNavigate()

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Title>
                <h3 className={styles.modal_title}>Номер заказа: {order.id}</h3>
            </Modal.Title>
            <Modal.Body>
                {order.productOrders.map(product=>{
                    return <div className={styles.product__wrap} key={product.productId}>
                        <div className={styles.product__img}>
                            <img
                                src={product.img?
                                    process.env.REACT_APP_API_URL + 'catalog/'+ product.img
                                    :
                                    '/img/pic/noImg.png'
                                }
                                alt={product.img}
                                className={styles.product_img}
                                onClick={()=>navigate(ITEM_ROUTE + '/' + product.productId)}
                            />
                        </div>
                        <div className={styles.product__info}>
                            <div className={styles.info__row}>
                                <h4>{product.name}</h4>
                            </div>
                            <div className={styles.info__row}>
                                <h3>Количество: {product.count}</h3>
                                <h3>На сумму: {product.cost}</h3>
                            </div>
                        </div>
                    </div>
                })}
            </Modal.Body>
            <Modal.Footer>
                <MyButtonWhite className={styles.modal_btn} onClick={onHide}>Закрыть</MyButtonWhite>
            </Modal.Footer>
        </Modal>
    );
};

export default OrderModal;