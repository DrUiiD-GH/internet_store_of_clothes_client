import React from 'react';
import styles from './Footer.module.css'
import {useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, MAIN_ROUTE} from "../../../utils/consts";

const Index = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.footer__wrap}>
            <div className={styles.footer__desc}>
                <span className={styles.footer__desc_item}>© DISCREET, 2023</span>
                <span className={styles.footer__desc_item}>Пользовательское соглашение</span>
                <span className={styles.footer__desc_item} onClick={()=>navigate(ADMIN_ROUTE)}>Политика о конфиденциальности</span>

            </div>
        </div>
    );
};

export default Index;