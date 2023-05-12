import React, {useContext, useState} from 'react';
import styles from './AuthModal.module.css'
import FormInput from "../../UI/input/FormInput";
import MyButton from "../../UI/button/MyButton";
import {login} from "../../../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";



const Login = observer(({nav, hideModal}) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [errSpan, setErrSpan] = useState()

    const {user} = useContext(Context)


    const onClickLogin = async ()=> {
        try {
            let data = await login(email, password)
            user.setUser(data)
            user.setIsAuth(true)
            hideModal()
        }catch (e){
            if(e.response.data.message) setErrSpan(e.response.data.message)
            if(e.response.data[0]) setErrSpan(e.response.data[0].msg)
        }


    }

    return (
        <div className={styles.auth__wrap}>
            <div className={styles.auth__top}>
                <h2 className={styles.auth__title}>
                    Добро пожаловать в  DISCREET
                </h2>
                <p className={styles.auth__subtitle}>
                    В первый раз здесь? <span onClick={nav} className={styles.auth__subtitle_link}>Зарегестрируйтесь</span>
                </p>
            </div>
            <form className={styles.auth__form}>
                <FormInput
                    type={"text"}
                    placeholder='Введите email'
                    value={email}
                    onChange={e=> setEmail(e.target.value)}
                />
                <FormInput
                    type={"password"}
                    placeholder='Введите пароль'
                    value={password}
                    onChange={e=> setPassword(e.target.value)}
                />
                <span className={styles.auth__form_error}>{errSpan}</span>
                <MyButton type="button" onClick={onClickLogin}>Войти</MyButton>
            </form>
        </div>
    );
});

export default Login;