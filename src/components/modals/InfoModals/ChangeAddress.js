import React, {useContext, useState} from 'react';

import {Context} from "../../../index";
import {changeAddress} from "../../../http/userAPI";
import {Form, Modal} from "react-bootstrap";
import styles from "./InfoModals.module.css";
import FormInput from "../../UI/input/FormInput";
import MyButton from "../../UI/button/MyButton";
import MyButtonWhite from "../../UI/button/MyButtonWhite";


const ChangeAddress = ({show, onHide}) => {
    const {user} = useContext(Context)

    const [addressCity, setAddressCity] = useState('')
    const [addressStreet, setAddressStreet] = useState('')
    const [addressHouse, setAddressHouse] = useState('')
    const [addressApartment, setAddressApartment] = useState('')

    const [error, setError] = useState('')

    const onClickAccept = async ()=>{
        try {
            if(addressCity&&addressStreet&&addressHouse&&addressApartment){
                const address = `г. ${addressCity}, ул. ${addressStreet}, д. ${addressHouse}, кв. ${addressApartment}`
                const data = await changeAddress(address)
                console.log(address)
                user.setUserInfo(data)
                setError('')
                onHide()
            }else {
                setError('Заполните все поля')
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
                <Modal.Title className={styles.changeModal__header}>Сменить адрес доставки</Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles.changeModal__wrap}>
                <Form>
                    <div className={styles.addressForm__row}>
                        <h4 className={styles.addressForm_title}>Город</h4>
                        <FormInput
                            className={styles.addressForm_input}
                            value={addressCity}
                            onChange={e=>setAddressCity(e.target.value)}
                        />
                    </div>
                    <div className={styles.addressForm__row}>
                        <h4 className={styles.addressForm_title}>Улица</h4>
                        <FormInput
                            className={styles.addressForm_input}
                            value={addressStreet}
                            onChange={e=>setAddressStreet(e.target.value)}
                        />
                    </div>
                    <div className={styles.addressForm__row}>
                        <h4 className={styles.addressForm_title}>Дом</h4>
                        <FormInput
                            className={styles.addressForm_input}
                            value={addressHouse}
                            onChange={e=>setAddressHouse(e.target.value)}
                        />
                    </div>
                    <div className={styles.addressForm__row}>
                        <h4 className={styles.addressForm_title}>Квартира</h4>
                        <FormInput
                            className={styles.addressForm_input}
                            value={addressApartment}
                            onChange={e=>setAddressApartment(e.target.value)}
                        />
                    </div>
                </Form>
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

export default ChangeAddress;