import React, {useContext, useEffect, useState} from 'react';
import styles from './UserInfo.module.css'
import {Col, Row} from "react-bootstrap";
import {getUserInfo} from "../../../http/userAPI";
import ChangeName from "../../modals/InfoModals/ChangeName";
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import ChangeEmail from "../../modals/InfoModals/ChangeEmail";
import ChangePhone from "../../modals/InfoModals/ChangePhone";
import ChangeAddress from "../../modals/InfoModals/ChangeAddress";
import ChangePassword from "../../modals/InfoModals/ChangePassword";

const UserInfo = observer(() => {
    const {user} = useContext(Context)

    const [nameModalVis, setNameModalVis] = useState(false)
    const [emailModalVis, setEmailModalVis] = useState(false)
    const [phoneModalVis, setPhoneModalVis] = useState(false)
    const [addressModalVis, setAddressModalVis] = useState(false)
    const [passwordModalVis, setPasswordModalVis] = useState(false)

    useEffect(()=>{
        getUserInfo().then(data=>user.setUserInfo(data))
    }, [])


    return (
        <div className={styles.info__wrap}>
            <h2 className={styles.info__title}>Мои данные</h2>
            <div className={styles.info__section}>
                <h4 className={styles.desc_title}>
                    Имя
                </h4>
                <div className={styles.section__desc}>
                    <span className={styles.desc_value}>
                        {user.userInfo.name}
                    </span>
                    <button className={styles.btn_edit}>
                        <img
                            src='/img/icons/edit.svg'
                            alt='edit'
                            className={styles.btn_edit_img}
                            onClick={()=>setNameModalVis(true)}
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
                                {user.userInfo.email}
                            </span>
                            <button className={styles.btn_edit}>
                                <img
                                    src='/img/icons/edit.svg'
                                    alt='edit'
                                    className={styles.btn_edit_img}
                                    onClick={()=>setEmailModalVis(true)}
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
                                {user.userInfo.phoneNumber||'Не указан'}
                            </span>
                            <button className={styles.btn_edit}>
                                <img
                                    src='/img/icons/edit.svg'
                                    alt='edit'
                                    className={styles.btn_edit_img}
                                    onClick={()=>setPhoneModalVis(true)}
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
                        {user.userInfo.address || 'Не указан'}
                    </span>
                    <button className={styles.btn_edit}>
                        <img
                            src='/img/icons/edit.svg'
                            alt='edit'
                            className={styles.btn_edit_img}
                            onClick={()=>setAddressModalVis(true)}
                        />
                    </button>
                </div>
            </div>

            <button
                className={styles.btn_changePas}
                onClick={()=>setPasswordModalVis(true)}
            >
                Изменить пароль
            </button>

            <ChangeName show={nameModalVis} onHide={()=>setNameModalVis(false)}/>
            <ChangeEmail show={emailModalVis} onHide={()=>setEmailModalVis(false)}/>
            <ChangePhone show={phoneModalVis} onHide={()=>setPhoneModalVis(false)}/>
            <ChangeAddress show={addressModalVis} onHide={()=>setAddressModalVis(false)}/>
            <ChangePassword show={passwordModalVis} onHide={()=>setPasswordModalVis(false)}/>
        </div>
    );
});

export default UserInfo;