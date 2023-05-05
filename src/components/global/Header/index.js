import React, {useContext, useState} from 'react';
import styles from './Header.module.css'
import {Container} from "react-bootstrap";
import {Context} from "../../../index";
import {useNavigate} from "react-router-dom";
import {BASKET_ROUTE, CATALOG_ROUTE, CONSTRUCTOR_ROUTE, MAIN_ROUTE, PROFILE_ROUTE} from "../../../utils/consts";
import {observer} from "mobx-react-lite";
import AuthModal from "../../modals/AuthModal/AuthModal";



const Index = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const [authVisible, setAuthVisible] = useState(false)

    return (
        <header>
            <div className={styles.brandBar}>
                <button className={styles.brandBar__brandName} onClick={()=>navigate(MAIN_ROUTE)}>DISCREET</button>
            </div>

            <div className={styles.navBar}>
                <Container>
                    <div className={styles.navBar_wrap}>
                        <ul className={styles.navBar__links}>
                            <li className={styles.navBar__item}>
                                <button className={styles.navBar__btn} onClick={()=>navigate(MAIN_ROUTE)}>
                                    Главная
                                </button>
                            </li>
                            <li className={styles.navBar__item}>
                                <button className={styles.navBar__btn} onClick={()=>navigate(CATALOG_ROUTE)}>
                                    Каталог
                                </button>
                            </li>
                            <li className={styles.navBar__item}>
                                <button className={styles.navBar__btn} onClick={()=>navigate(CONSTRUCTOR_ROUTE)}>
                                    Конструктор
                                </button>
                            </li>
                        </ul>
                        {user.isAuth?
                            <ul className={styles.navBar__links}>
                                <li className={styles.navBar__item}>
                                    <button className={styles.navBar__btn} onClick={()=>navigate(BASKET_ROUTE)}>
                                        <img className={styles.navBar__icon} src="/img/icons/basket.svg" alt='Корзина'/>
                                    </button>
                                </li>
                                <li className={styles.navBar__item}>
                                    <button className={styles.navBar__btn} onClick={()=>navigate(PROFILE_ROUTE)}>
                                        <img className={styles.navBar__icon} src='/img/icons/user.svg' alt='Аккаунт'/>
                                    </button>
                                </li>
                            </ul>
                            :
                            <ul className='rightBar'>
                                <li className={styles.navBar__item}>
                                    <button className={styles.navBar__btn} onClick={()=>setAuthVisible(true)}>
                                        <span className={styles.navBar__btn_enter}>Войти</span>
                                        <img className={styles.navBar__icon} src='/img/icons/user.svg' alt='Аккаунт'/>
                                    </button>
                                </li>
                            </ul>
                        }
                    </div>
                </Container>
            </div>
            <AuthModal show={authVisible} onHide={() => setAuthVisible(false)}/>
        </header>
    );
});

export default Index;