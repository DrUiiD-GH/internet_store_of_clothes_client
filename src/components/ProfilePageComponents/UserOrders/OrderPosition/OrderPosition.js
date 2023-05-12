import React from 'react';
import styles from './OrderPosition.module.css'

const OrderPosition = ({position, onClickCancel, onClickViewOrder, ...props}) => {
    return (
        <div className={styles.position__wrap}>
            <h4 className={styles.position__number}>
                Заказ №{position.id}
            </h4>
            <div className={styles.position__row}>
                <span className={styles.desc}>Всего товаров: {position.count}</span>
                <span className={styles.desc}>На общую сумму: {position.total_cost} ₽</span>
                <button
                    className={styles.button}
                    onClick={onClickViewOrder}
                >
                    Товары в заказе
                </button>
            </div>
            <div className={styles.position__row+' '+styles.position__row_status}>
                <span className={styles.status_title}>Статус заказа: </span>
                <span className={styles.status_value}>{position.status}</span>
                <button
                    className={styles.button + ' ' + styles.status_btn}
                    onClick={onClickCancel}
                >
                    Отменить</button>
            </div>
        </div>
    );
};

export default OrderPosition;