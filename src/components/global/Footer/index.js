import React from 'react';
import styles from './Footer.module.css'

const Index = () => {
    return (
        <div className={styles.footer__wrap}>
            <div className={styles.footer__desc}>
                <span className={styles.footer__desc_item}>© DISCREET, 2023</span>
                <span className={styles.footer__desc_item}>Пользовательское соглашение</span>
                <span className={styles.footer__desc_item}>Политика о конфиденциальности</span>

            </div>
        </div>
    );
};

export default Index;