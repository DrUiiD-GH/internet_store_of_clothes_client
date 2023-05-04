import React from 'react';
import styles from './ConstructorForm.module.css'
import MyButton from "../../UI/button/MyButton";
import DressedPosition from "../DressedPosition/DressedPosition";

const ConstructorForm = () => {
    return (
        <div className={styles.form__wrap}>
            <div className={styles.form__image}>
                <img className={styles.image__model} src='/img/constructor/model.png' alt='model'/>
            </div>
            <div className={styles.form__panel}>
                <div className={styles.panel__top}>
                    <h2 className={styles.panel_title}>Надето</h2>
                </div>
                <div className={styles.panel__dressed}>
                    <DressedPosition/>
                    <DressedPosition/>
                    <DressedPosition/>
                    <DressedPosition/>
                </div>
                <div className={styles.panel__bottom}>
                    <MyButton className={styles.panel_btn}>Добавить в корзину</MyButton>
                </div>

            </div>
        </div>
    );
};

export default ConstructorForm;