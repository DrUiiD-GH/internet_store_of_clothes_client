import React from 'react';
import styles from "./AuthModal.module.css";
import FormInput from "../../UI/input/FormInput";
import MyButton from "../../UI/button/MyButton";

const Registration = ({nav}) => {
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
                <FormInput type={"text"} placeholder='Введите своё имя'/>
                <FormInput type={"text"} placeholder='Введите свой email'/>
                <FormInput type={"text"} placeholder='Телефон'/>
                <FormInput type={"password"}  placeholder='Придумайте пароль'/>
                <FormInput type={"password"}  placeholder='Повторите пароль'/>
                <span className={styles.auth__form_error}>Не верный пароль</span>
                <MyButton type="button">Зарегистрироваться</MyButton>
            </form>
        </div>
    );
};

export default Registration;