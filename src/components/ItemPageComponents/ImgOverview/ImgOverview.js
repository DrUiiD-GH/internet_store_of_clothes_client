import React, {useState} from 'react';
import styles from './ImgOverview.module.css'
import {observer} from "mobx-react-lite";

const ImgOverview = observer(() => {

    const img = [
        {id:1, img:'/img/pic/item-pic-1.png'},
        {id:2, img:'/img/pic/item-pic-2.png'},
        {id:3, img:'/img/pic/item-pic-3.png'},
        {id:4, img:'/img/pic/item-pic-4.png'}
    ]

    const [currentPic, setCurrentPic] = useState(img[0])


    return (
        <div className={styles.overview__wrap}>
            <div className={styles.overview__selector}>
                <ul className={styles.selector__list}>
                    {img.map(pic =>
                        <li
                            className={styles.selector__item}
                            key={pic.id}
                            onClick={()=>setCurrentPic(pic)}
                        >
                            <img
                                className={styles.selector__item_img}
                                alt={pic.id}
                                src={pic.img}
                            />
                        </li>
                    )}
                </ul>
            </div>
            <div className={styles.overview__current}>
                <img className={styles.overview__current_img} alt='overview' src={currentPic.img}/>
            </div>
        </div>
    );
});


export default ImgOverview;