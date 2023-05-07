import React from 'react';
import styles from './ConstructorForm.module.css'
import MyButton from "../../UI/button/MyButton";
import DressedPosition from "../DressedPosition/DressedPosition";

const ConstructorForm = () => {
    return (
        <div className={styles.form__wrap}>
            <div className={styles.form__model}>
                <img className={styles.model_img} src='/img/constructor/model.png' alt='model'/>
                <img className={styles.dress_img} src='/img/constructor/catalog_8279.png' alt='dress'/>
                <img className={styles.dress_img} src='/img/constructor/catalog_51074.png' alt='dress'/>

                {/*<img className={styles.dress_img} src='/img/constructor/catalog_50483.png' alt='dress'/>*/}

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