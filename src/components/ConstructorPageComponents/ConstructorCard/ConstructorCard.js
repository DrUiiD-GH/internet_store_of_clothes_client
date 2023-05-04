import React from 'react';
import styles from "../ConstructorCard/ConstructorCard.module.css";
import {Col} from "react-bootstrap";

const ConstructorCard = () => {
    return (
        <Col md={3} >
            <div className={styles.card}>
                <img className={styles.card_img} alt='pic' src='/img/constructor/edit_rubashka.png'/>
                <h3 className={styles.card_name}>Название</h3>
                <div className={styles.card__bottom}>
                    <h4 className={styles.card__bottom_price}>1 900 ₽</h4>
                    <div className={styles.bottom__buttons}>
                        <img className={styles.btn} src='/img/icons/info.svg' alt='info'/>
                        <img className={styles.btn} src='/img/icons/mini_basket.svg' alt='add'/>
                    </div>
                </div>
            </div>
        </Col>

    );
};

export default ConstructorCard;