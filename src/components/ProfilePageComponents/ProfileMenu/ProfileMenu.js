import React, {useContext, useEffect} from 'react';
import styles from './ProfileMenu.module.css'
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import {useNavigate} from "react-router-dom";
import {MAIN_ROUTE} from "../../../utils/consts";
import {getUserInfo} from "../../../http/userAPI";

const ProfileMenu = observer(({setChooseOrders, chooseOrders}) => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    return (
        <div className={styles.menu__wrap}>
            <div
                className={
                    chooseOrders ?
                        styles.menu__item
                        :
                        styles.menu__item + ' ' + styles.item_active
                }
                onClick={()=>setChooseOrders(false)}
            >
                <h3>Мои данные</h3>
            </div>
            <div
                className={
                    !chooseOrders?
                        styles.menu__item
                        :
                        styles.menu__item + ' ' + styles.item_active
                }
                onClick={()=>setChooseOrders(true)}
            >
                <h3>Мои заказы</h3>
            </div>
            <div
                className={styles.menu__item}
                onClick={()=>{
                    user.setIsAuth(false)
                    localStorage.removeItem('token')
                    navigate(MAIN_ROUTE)
                }}
            >
                <h3 className={styles.item_exit}>Выйти</h3>
            </div>
        </div>
    );
});

export default ProfileMenu;