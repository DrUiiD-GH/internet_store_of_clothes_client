import React, {useContext} from 'react';
import styles from './Position.module.css'
import {useNavigate} from "react-router-dom";
import {ITEM_ROUTE} from "../../../utils/consts";
import {updateBasket} from "../../../http/basketApi";
import {Context} from "../../../index";

const Position = ({position}) => {
    const navigate = useNavigate()
    const {basket} = useContext(Context)

    const incrementCount=()=>{
        updateBasket({
            productId:position.product.id,
            count:position.count+1
        }).then(data=>basket.setBasket(data))
    }
    const decrementCount=()=>{
        updateBasket({
            productId:position.product.id,
            count:position.count-1
        }).then(data=>basket.setBasket(data))
    }

    const deletePosition = ()=>{
        updateBasket({
            productId:position.product.id,
            count:0
        }).then(data=>basket.setBasket(data))
    }

    return (
        <div className={styles.position__wrap}>
            <div className={styles.side +' '+styles.side_left}>
                <img
                    className={styles.previewImg}
                    src={position.product.img_for_catalogs[0]?
                        process.env.REACT_APP_API_URL+'catalog/'+position.product.img_for_catalogs[0].src
                        :
                        '/img/pic/noImg.png'
                    }
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
                        onClick={decrementCount}
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
                        onClick={incrementCount}
                    >

                    </img>
                </div>
            </div>
            <div className={styles.side +' '+styles.side_right}>
                <p className={styles.price}>{position.product.price*position.count} ₽</p>
                <img className={styles.trash_btn}
                     src='/img/icons/trash.svg'
                     alt='delete'
                     onClick={deletePosition}
                />
            </div>
        </div>
    );
};

export default Position;