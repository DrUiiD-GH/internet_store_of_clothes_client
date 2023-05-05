import React from 'react';
import styles from './UserInfo.module.css'
import {Col, Row} from "react-bootstrap";

const UserInfo = () => {
    return (
        <div className={styles.info__wrap}>
            <h2 className={styles.info__title}>Мои данные</h2>
            <div className={styles.info__section}>
                <h4 className={styles.desc_title}>
                    Имя
                </h4>
                <div className={styles.section__desc}>
                    <span className={styles.desc_value}>
                        Алексей
                    </span>
                    <button className={styles.btn_edit}>
                        <img
                            src='/img/icons/edit.svg'
                            alt='edit'
                            className={styles.btn_edit_img}
                        />
                    </button>
                </div>
            </div>


            <h3 className={styles.section_title}>Контакты</h3>
            <div className={styles.info__section}>
                <Row>
                    <Col md={6}>
                        <h4 className={styles.desc_title}>
                            Почта
                        </h4>
                        <div className={styles.section__desc}>
                            <span className={styles.desc_value}>
                                brusov2001@bk.ru
                            </span>
                            <button className={styles.btn_edit}>
                                <img
                                    src='/img/icons/edit.svg'
                                    alt='edit'
                                    className={styles.btn_edit_img}
                                />
                            </button>
                        </div>
                    </Col>
                    <Col md={6}>
                        <h4 className={styles.desc_title}>
                            Телефон
                        </h4>
                        <div className={styles.section__desc}>
                            <span className={styles.desc_value}>
                                +7 915 146 36 34
                            </span>
                            <button className={styles.btn_edit}>
                                <img
                                    src='/img/icons/edit.svg'
                                    alt='edit'
                                    className={styles.btn_edit_img}
                                />
                            </button>
                        </div>
                    </Col>
                </Row>
            </div>

            <h3 className={styles.section_title}>Адрес доставки</h3>
            <div className={styles.info__section}>
                <div className={styles.section__desc}>
                    <span className={styles.desc_value}>
                        г. Москва, ул. Большая Черёмушкинская, д11
                    </span>
                    <button className={styles.btn_edit}>
                        <img
                            src='/img/icons/edit.svg'
                            alt='edit'
                            className={styles.btn_edit_img}
                        />
                    </button>
                </div>
            </div>

            <button className={styles.btn_changePas}>
                Изменить пароль
            </button>

        </div>
    );
};

export default UserInfo;