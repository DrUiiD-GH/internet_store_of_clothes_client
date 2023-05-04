import React, {useContext, useState} from 'react';
import styles from "./AuthModal.module.css";
import FormInput from "../../UI/input/FormInput";
import MyButton from "../../UI/button/MyButton";
import {registration} from "../../../http/userAPI";
import {Context} from "../../../index";

const Registration = ({nav, hideModal}) => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState()
    const [secPassword, setSecPassword] = useState()

    const [errSpan, setErrSpan] = useState()

    const {user} = useContext(Context)

    const onClickRegistration = async ()=>{
        try {
            if(password !== secPassword){
                setErrSpan('Пароли не совпадают')
            }else {
                let data = await registration(email, password)
                user.setUser(data)
                user.setIsAuth(true)
                console.log(data)
                hideModal()
            }

        }catch (e){
            setErrSpan(e.response.data.message)
        }

    }


    return (
        <div className={styles.auth__wrap}>
            <div className={styles.auth__top}>
                <h2 className={styles.auth__title}>
                    Добро пожаловать в  DISCREET
                </h2>
                <p className={styles.auth__subtitle}>
                    Уже есть аккаунт? <span onClick={nav} className={styles.auth__subtitle_link}>Войдите</span>
                </p>
            </div>
            <form className={styles.auth__form}>
                <FormInput type={"text"} placeholder='Введите своё имя' value={name} onChange={e=>setName(e.target.value)}/>
                <FormInput type={"text"} placeholder='Введите свой email' value={email} onChange={e=>setEmail(e.target.value)}/>
                <FormInput type={"tel"} placeholder='Телефон' value={phone} onChange={e=>setPhone(e.target.value)}/>
                <FormInput type={"password"}  placeholder='Придумайте пароль' value={password} onChange={e=>setPassword(e.target.value)}/>
                <FormInput type={"password"}  placeholder='Повторите пароль' value={secPassword} onChange={e=>setSecPassword(e.target.value)}/>
                <span className={styles.auth__form_error}>{errSpan}</span>
                <MyButton
                    type="button"
                    onClick={onClickRegistration}
                >
                    Зарегистрироваться
                </MyButton>
            </form>
        </div>
    );
};

export default Registration;