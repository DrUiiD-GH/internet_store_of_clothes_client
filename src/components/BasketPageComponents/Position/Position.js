import React from 'react';
import styles from './Position.module.css'
import {useNavigate} from "react-router-dom";
import {ITEM_ROUTE} from "../../../utils/consts";
import {observer} from "mobx-react-lite";

const Position = observer(({position}) => {
    const navigate = useNavigate()


    return (
        <div className={styles.position__wrap}>
            <div className={styles.side +' '+styles.side_left}>
                <img
                    src='/img/basket/pic-1.png'
                    alt='pic'
                    onClick={()=>navigate(ITEM_ROUTE+'/'+position.product.id)}
                />
            </div>
            <div className={styles.side +' '+styles.side_center}>
                <h4 className={styles.name}>{position.product.name}</h4>
                <p className={styles.category}>{position.product.subcategory.name || 'ytn'}</p>
                <div className={styles.counter}>
                    <img
                        alt='-'
                        className={styles.counter_symbol}
                        src='/img/icons/minus.svg'
                    />
                    <span
                        className={styles.counter_num}
                    >
                        {position.count}
                    </span>
                    <img
                        alt='+'
                        className={styles.counter_symbol}
                        src='/img/icons/plus.svg'
                    >

                    </img>
                </div>
            </div>
            <div className={styles.side +' '+styles.side_right}>
                <p className={styles.price}>{position.product.price*position.count} ₽</p>
                <img className={styles.trash_btn} src='/img/icons/trash.svg' alt='delete'/>
            </div>
        </div>
    );
});

export default Position;