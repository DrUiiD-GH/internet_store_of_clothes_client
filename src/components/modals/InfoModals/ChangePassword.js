import React, {useContext, useState} from 'react';

import {Context} from "../../../index";
import {changePassword} from "../../../http/userAPI";
import {Modal} from "react-bootstrap";
import styles from "./InfoModals.module.css";
import FormInput from "../../UI/input/FormInput";
import MyButton from "../../UI/button/MyButton";
import MyButtonWhite from "../../UI/button/MyButtonWhite";

const ChangePassword = ({show, onHide}) => {
    const {user} = useContext(Context)

    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [secondNewPassword, setSecondNewPassword] = useState('')

    const [error, setError] = useState('')

    const onClickAccept = async ()=>{
        try {
            if(newPassword===secondNewPassword){
                const data = await changePassword(oldPassword, newPassword)
                user.setUserInfo(data)
                setOldPassword('')
                setNewPassword('')
                setSecondNewPassword('')
                setError('')
                onHide()
            }else{
                setError('Пароли не совпадают')
            }
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
                <Modal.Title className={styles.changeModal__header}>Сменить пароль</Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles.changeModal__wrap}>
                <FormInput
                    className={styles.changeModal_placeholder}
                    type={'password'}
                    placeholder={'Введите старый пароль'}
                    value={oldPassword}
                    onChange={e=>setOldPassword(e.target.value)}
                />
                <hr/>
                <FormInput
                    className={styles.changeModal_placeholder}
                    type={'password'}
                    placeholder={'Введите новый пароль'}
                    value={newPassword}
                    onChange={e=>setNewPassword(e.target.value)}
                />

                <FormInput
                    className={styles.changeModal_placeholder}
                    type={'password'}
                    placeholder={'Введите повторите пароль'}
                    value={secondNewPassword}
                    onChange={e=>setSecondNewPassword(e.target.value)}
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

export default ChangePassword;