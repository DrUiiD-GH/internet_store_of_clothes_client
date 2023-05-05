import React from 'react';
import styles from './UserOrders.module.css'
import OrderPosition from "./OrderPosition/OrderPosition";

const UserOrders = () => {
    const orders = [
        {
            id:45,
            count:4,
            total_cost:'13000',
            status:'Ожидает отправки'
        },
        {
            id:547,
            count:2,
            total_cost:'4800',
            status:'Создан'
        }
    ]

    return (
        <div className={styles.orders__wrap}>
            <h2 className={styles.orders__title}>Мои заказы</h2>
            {
                orders.map(position=>
                    <OrderPosition position = {position} key={position.id}/>
                )
            }
        </div>
    );
};

export default UserOrders;