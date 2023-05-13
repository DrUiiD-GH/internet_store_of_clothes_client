import React, {useEffect, useState} from 'react';
import styles from './UserOrders.module.css'
import OrderPosition from "./OrderPosition/OrderPosition";
import {cancelOrderById, fetchOneOrder, fetchOrders} from "../../../http/ordersApi";
import OrderModal from "../../modals/OrderModal/OrderModal";
import data from "bootstrap/js/src/dom/data";

const UserOrders = () => {
    const [orders, setOrders] = useState([
        {
            id:'',
            count:'',
            total_cost:'',
            status:'Получение данных с сервера'
        }
    ])
    const [orderModalVis, setOrderModalVis] = useState(false)
    const [orderInModal, setOrderInModal] = useState({productOrders:[]})

    const cancelOrder = (orderId)=>{
        cancelOrderById({orderId}).then(data=>setOrders(data))
    }
    const openOrder = (orderId)=>{
        fetchOneOrder(orderId).then(data=>setOrderInModal(data)).finally(()=>setOrderModalVis(true))

    }

    useEffect(()=>{
        fetchOrders().then(data=>setOrders(data))
    }, [])

    return (
        <div className={styles.orders__wrap}>
            <h2 className={styles.orders__title}>Мои заказы</h2>
            {
                orders.map(position=>
                    <OrderPosition
                        position={position}
                        key={position.id}
                        onClickCancel={()=>cancelOrder(position.id)}
                        onClickViewOrder={()=>openOrder(position.id)}
                    />
                )
            }
            <OrderModal show={orderModalVis} onHide={()=>{
                setOrderModalVis(false)
            }} order={orderInModal}/>
        </div>
    );
};

export default UserOrders;