import React, {useState} from 'react';
import styles from './MainBoard.module.css'
import MyButton from "../../UI/button/MyButton";
import {useNavigate} from "react-router-dom";
import {CATALOG_ROUTE, CONSTRUCTOR_ROUTE} from "../../../utils/consts";
import {Container} from "react-bootstrap";

const MainBoard = () => {

    const sliderImg = [
        {num:'1', src:'/img/main_img/slider/slide-1.jpg'},
        {num:'2', src:'/img/main_img/slider/slide-2.jpg'},
        {num:'3', src:'/img/main_img/slider/slide-3.jpg'},
        {num:'4', src:'/img/main_img/slider/slide-4.jpg'}
    ]

    const [currentSlide, setCurrentSlide] = useState(sliderImg[0])


    const navigate = useNavigate()
    return (
        <div className={styles.main_wrap}>
            <Container>
                <div className={styles.section + " " + styles.section_first}>
                    <h1 className={styles.section_first__title}>Добро пожаловать в DISCREET</h1>
                    <div className={styles.section__content + " " + styles.section_first__content}>
                        <p className={styles.section__text}>Здесь ты сможешь<br/>собрать свой<br/>уникальный образ</p>
                        <MyButton onClick={() => {
                            navigate(CONSTRUCTOR_ROUTE)
                        }}>Создать</MyButton>
                    </div>
                </div>
            </Container>
            <div className={styles.main__div}/>
            <Container>
                <div className={styles.section + " " + styles.section_second}>
                    <div className={styles.section__content + " " + styles.section_second__content}>
                        <div className={styles.section_second__slider}>
                            <img className={styles.slider__img} src={currentSlide.src} alt='slider'/>
                            <div className={styles.slider__selector}>
                                {
                                    sliderImg.map(item =>
                                        <span
                                            key={item.num}
                                            className={currentSlide.num === item.num ?
                                                styles.slider__selector_dot + ' ' + styles.active
                                                :
                                                styles.slider__selector_dot
                                            }
                                            onClick={() => setCurrentSlide(item)}
                                        />
                                    )
                                }
                            </div>
                        </div>
                        <div className={styles.section_second__desc}>
                            <p className={styles.section__text + " "+ styles.section_second__text}>В Каталоге ты<br/>можешь найти одежду<br/>по своему вкусу</p>
                            <MyButton styles={{margin:'auto'}} onClick={() => {
                                navigate(CATALOG_ROUTE)
                            }}>Перейти в каталог</MyButton>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default MainBoard;