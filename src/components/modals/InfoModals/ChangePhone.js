import React, {useContext, useState} from 'react';
import {Context} from "../../../index";
import {changePhone} from "../../../http/userAPI";
import {Modal} from "react-bootstrap";
import styles from "./InfoModals.module.css";
import FormInput from "../../UI/input/FormInput";
import MyButton from "../../UI/button/MyButton";
import MyButtonWhite from "../../UI/button/MyButtonWhite";

const ChangePhone = ({show, onHide}) => {
    const {user} = useContext(Context)

    const [phone, setPhone] = useState('')

    const [error, setError] = useState('')

    const onClickAccept = async ()=>{
        try {
            const data = await changePhone(phone)
            user.setUserInfo(data)
            setPhone('')
            setError('')
            onHide()
        }catch (e){
            if(e.response.data.message) setError(e.response.data.message)
            if(e.response.data[0]) setError(e.response.data[0].msg)
        }
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header>
                <Modal.Title className={styles.changeModal__header}>Сменить номер телефона</Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles.changeModal__wrap}>
                <FormInput
                    className={styles.changeModal_placeholder}
                    type={'tel'}
                    placeholder={'Введите свой номер телефона'}
                    value={phone}
                    onChange={e=>setPhone(e.target.value)}
                />
                <span className={styles.changeModal_error}>
                    {error}
                </span>
            </Modal.Body>
            <Modal.Footer>
                <MyButton
                    className={styles.changeModal_btn}
                    onClick={onClickAccept}
                >
                    Подтвердить
                </MyButton>
                <MyButtonWhite
                    className={styles.changeModal_btn}
                    onClick={onHide}
                >
                    Отменить
                </MyButtonWhite>
            </Modal.Footer>
        </Modal>
    );
};

export default ChangePhone;