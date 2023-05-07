import React, {useState} from 'react';
import styles from './ImgOverview.module.css'


const ImgOverview = ({imgs}) => {
    const [currentPic, setCurrentPic] = useState(imgs[0])



    const renderImg = (src) =>{
        if(src){
            return process.env.REACT_APP_API_URL+'catalog/'+src
        }else {
            return '/img/pic/noImg.png'
        }
    }


    return (
        <div className={styles.overview__wrap}>
            <div className={styles.overview__selector}>
                <ul className={styles.selector__list}>
                    {imgs.map(pic =>
                        <li
                            className={styles.selector__item}
                            key={pic.id}
                            onClick={()=>setCurrentPic(pic)}
                        >
                            <img
                                className={styles.selector__item_img}
                                alt={pic.id}
                                src={renderImg(pic.src)}
                            />
                        </li>
                    )}
                </ul>
            </div>
            <div className={styles.overview__current}>
                <img className={styles.overview__current_img} alt={renderImg(currentPic.src)} src={renderImg(currentPic.src)}/>
            </div>
        </div>
    );
};


export default ImgOverview;