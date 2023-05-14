import React from 'react';
import styles from "../ConstructorCard/ConstructorCard.module.css";
import {Col} from "react-bootstrap";

const ConstructorCard = ({product, onClickBasket, onClickInfo, onClickCard, disable}) => {
    const disableCard  = ()=>{
        if(disable) return<div className={styles.card__disable_overview}>
            <span>Надето</span>
        </div>
    }



    return (
        <Col md={3}>
            <div className={styles.card}>
                <button
                    className={styles.card__imgBtn}
                    onClick={onClickCard}
                    disabled={disable}
                >
                    <img className={styles.card_img}
                         alt='pic'
                         src={product.imgPreview?
                             process.env.REACT_APP_API_URL+`catalog/${product.imgPreview}`
                             :
                             '/img/pic/noImg.png'
                         }

                    />
                    {disableCard()}
                </button>
                <h3 className={styles.card_name}>{product.name}</h3>
                <div className={styles.card__bottom}>
                    <h4 className={styles.card__bottom_price}>{`${product.price} ₽`}</h4>
                    <div className={styles.bottom__buttons}>
                        <button
                            className={styles.btn}
                            onClick={onClickInfo}
                        >
                            <img
                                className={styles.bnt_img}
                                src='/img/icons/info.svg'
                                alt='info'

                            />
                        </button>
                        <button
                            onClick={onClickBasket}
                            className={styles.btn}
                        >
                            <img
                                className={styles.bnt_img}
                                src='/img/icons/mini_basket.svg'
                                alt='add'
                            />
                        </button>
                    </div>
                </div>
            </div>
        </Col>

    );
};

export default ConstructorCard;