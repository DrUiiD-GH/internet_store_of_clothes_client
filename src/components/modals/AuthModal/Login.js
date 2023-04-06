import React from 'react';
import styles from './AuthModal.module.css'
import FormInput from "../../UI/input/FormInput";
import MyButton from "../../UI/button/MyButton";


const Login = ({nav}) => {
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
                <FormInput type={"text"} placeholder='Введите email'/>
                <FormInput type={"password"}  placeholder='Введите пароль'/>
                <span className={styles.auth__form_error}>Не верный пароль</span>
                <MyButton type="button">Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;