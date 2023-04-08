import React, {useContext} from 'react';
import styles from './BasketCars.module.css'
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import FormInput from "../../UI/input/FormInput";
import MyButton from "../../UI/button/MyButton";

const BasketCard = observer(() => {
    const {basket} = useContext(Context)

    const totalCount = ()=>{
        let tCount =0
        basket.basket.product_baskets.map(position=>
            tCount+=position.count
        )

        if(tCount < 1) return 'Нет товаров'
        if(tCount === 1) return tCount+' товар на сумму'
        if(tCount < 5) return tCount+' товара на сумму'
        return tCount+' товаров на сумму'
    }

    return (
        <div className={styles.basketCard__wrap}>
            <div className={styles.header}>
                <h3 className={styles.header_title}>Сумма заказа</h3>
                <div className={styles.header__subhead}>
                    <p>{totalCount()}</p>
                    <span>{basket.basket.total_cost} ₽</span>
                </div>
            </div>
            <div className={styles.body}>
                <FormInput type='text' placeholder='Промокод'/>
                <div className={styles.body__sale}>
                    <p>Скидка</p>
                    <span>0 ₽</span>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.footer__total}>
                    <p>Итого:</p>
                    <span>{basket.basket.total_cost} ₽</span>
                </div>
                <span className={styles.footer_description}>Без учета возможной стоимости доставки</span>
                <MyButton>Оформить заказ</MyButton>
            </div>
        </div>
    );
});

export default BasketCard;