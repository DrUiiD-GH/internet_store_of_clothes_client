import React from 'react';
import styles from './DressedPosition.module.css'

const DressedPosition = () => {
    return (
        <div className={styles.position__wrap}>
            <img src='/img/constructor/edit_rubashka.png' className={styles.position_shortImg} alt='short'/>
            <div className={styles.position__middle}>
                <h4 className={styles.position_subcat}>Подтип</h4>
                <h5 className={styles.position_name}>Название</h5>
                <span className={styles.position_price}>1 900 Р</span>
            </div>

            <img src='/img/icons/close.svg' className={styles.position_close} alt='close'/>

        </div>
    );
};

export default DressedPosition;