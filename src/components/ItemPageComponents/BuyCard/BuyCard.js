import React from 'react';
import styles from './BuyCard.module.css'
import MyButton from "../../UI/button/MyButton";


const BuyCard = ({product}) => {
    return (
        <div className={styles.card__wrap}>
            <div className={styles.card__header}>
                <h3 className={styles.card__header_name}>{product.name}</h3>
                <h4 className={styles.card__header_cat}>{product.subcategory}</h4>
            </div>
            <div className={styles.card__price}>
                <span className={styles.card__price_price}>{product.price} ₽</span>
            </div>
            <div className={styles.card__button}>
                <MyButton className={styles.card__button_btn}>
                    <img className={styles.card__button_img} src='/img/icons/basket-white.svg' alt='Корзина'/>
                    Добавить в корзину
                </MyButton>
            </div>
        </div>
    );
};

export default BuyCard;