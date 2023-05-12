import React, {useContext, useState} from 'react';
import styles from './InfoModals.module.css'
import {Modal} from "react-bootstrap";
import FormInput from "../../UI/input/FormInput";
import MyButton from "../../UI/button/MyButton";
import MyButtonWhite from "../../UI/button/MyButtonWhite";
import {Context} from "../../../index";
import {changeName} from "../../../http/userAPI";



const ChangeName = ({show, onHide}) => {
    const {user} = useContext(Context)

    const [name, setName] = useState('')

    const [error, setError] = useState('')

    const onClickAccept = async ()=>{
        try {
            if(name.length>2){
                const data = await changeName(name)
                user.setUserInfo(data)
                setName('')
                setError('')
                onHide()
            }else{
                setError('Имя должно состоять из не менее 2 букв')
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
                <Modal.Title className={styles.changeModal__header}>Сменить имя</Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles.changeModal__wrap}>
                <FormInput
                    className={styles.changeModal_placeholder}
                    type={'text'}
                    placeholder={'Введите своё имя'}
                    value={name}
                    onChange={e=>setName(e.target.value)}
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

export default ChangeName;