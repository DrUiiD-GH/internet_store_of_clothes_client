import React, {useContext} from 'react';
import styles from './ConstructorForm.module.css'
import MyButton from "../../UI/button/MyButton";
import DressedPosition from "../DressedPosition/DressedPosition";
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";

const ConstructorForm = observer(() => {
    const {constructor} = useContext(Context)

    const deleteFromModel = (id) =>{
        constructor.setProductsOnModel(constructor.productsOnModel.filter(i=>i.id!==id))
    }
    return (
        <div className={styles.form__wrap}>
            <div className={styles.form__model}>
                <img className={styles.model_img} src='/img/constructor/model.png' alt='model'/>
                {
                    constructor.productsOnModel.map(i=>
                        <img
                            key={i.id}
                            className={styles.dress_img}
                            src={i.imgModel?process.env.REACT_APP_API_URL+`constructor/${i.imgModel}`:''}
                            alt='dress'
                        />
                    )
                }

                {/*<img className={styles.dress_img} src='/img/constructor/catalog_50483.png' alt='dress'/>*/}

            </div>
            <div className={styles.form__panel}>
                <div className={styles.panel__top}>
                    <h2 className={styles.panel_title}>Надето</h2>
                </div>
                <div className={styles.panel__dressed}>
                    {constructor.productsOnModel.map(i=>
                        <DressedPosition key={i.id} product={i} onClickDelete={()=>deleteFromModel(i.id)}/>
                    )}
                </div>
                <div className={styles.panel__bottom}>
                    <MyButton className={styles.panel_btn}>Добавить в корзину</MyButton>
                </div>

            </div>
        </div>
    );
});

export default ConstructorForm;