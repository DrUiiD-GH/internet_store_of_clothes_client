import React, {useContext} from 'react';
import styles from './PositionsList.module.css'
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import Position from "../Position/Position";
import MyButtonWhite from "../../UI/button/MyButtonWhite";

const PositionsList = observer(() => {
    const {basket} = useContext(Context)
    const {product_baskets} = basket.basket

    const totalCount = ()=>{
        let tCount =0
        product_baskets.map(position=>
            tCount+=position.count
        )

        if(tCount < 1) return 'Нет товаров'
        if(tCount === 1) return tCount+' товар'
        if(tCount < 5) return tCount+' товара'
        return tCount+' товаров'
    }

    return (
        <div className={styles.list__wrap}>
            <div className={styles.list__header}>
                <h2 className={styles.list__header_title}>Корзина</h2>
                <h4 className={styles.list__header_subtitle}>{totalCount()}</h4>
            </div>
            <div className={styles.list__body}>
                {
                    product_baskets.map(position => <Position position={position} key={position.id}/>)
                }
            </div>
            <div className={styles.list__footer}>
                <MyButtonWhite>Очистить корзину</MyButtonWhite>
            </div>
        </div>
    );
});

export default PositionsList;