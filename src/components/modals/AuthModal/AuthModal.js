import React, {useState} from 'react';
import {Modal} from "react-bootstrap";
import Login from "./Login";
import Registration from "./Registration";
import styles from './AuthModal.module.css'

const AuthModal = ({show, onHide}) => {
    const [isLogin, setIsLogin] = useState(true)

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <div className={styles.cl_btn_2} onClick={onHide}>
                <div>
                    <div className={styles.leftright}></div>
                    <div className={styles.rightleft}></div>
                </div>
            </div>
            <div className={styles.authModal__wrap}>
                {
                    isLogin?
                        <Login nav={()=>setIsLogin(false)} hideModal = {onHide}/>
                        :
                        <Registration nav={()=>setIsLogin(true)} hideModal = {onHide}/>
                }
            </div>
        </Modal>
    );
};

export default AuthModal;