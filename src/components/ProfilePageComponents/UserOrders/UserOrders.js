import React, {useEffect, useState} from 'react';
import styles from './UserOrders.module.css'
import OrderPosition from "./OrderPosition/OrderPosition";
import {cancelOrderById, fetchOrders} from "../../../http/ordersApi";

const UserOrders = () => {
    const [orders, setOrders] = useState([
        {
            id:'',
            count:'',
            total_cost:'',
            status:'Получение данных с сервера'
        }
    ])

    const cancelOrder = (orderId)=>{
        console.log(orderId)
        cancelOrderById({orderId}).then(data=>setOrders(data))
    }

    useEffect(()=>{
        fetchOrders().then(data=>setOrders(data))
    }, [])

    return (
        <div className={styles.orders__wrap}>
            <h2 className={styles.orders__title}>Мои заказы</h2>
            {
                orders.map(position=>
                    <OrderPosition position={position} key={position.id} onClickCancel={()=>cancelOrder(position.id)}/>
                )
            }
        </div>
    );
};

export default UserOrders;