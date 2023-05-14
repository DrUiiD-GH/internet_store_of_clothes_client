import React from 'react';
import styles from './DressedPosition.module.css'

const DressedPosition = ({product, onClickDelete, onClickImg}) => {
    return (
        <div className={styles.position__wrap}>
            <button
                className={styles.position__shortImgBtn}
                onClick={onClickImg}
            >
                <img
                    src={product.imgPreview?
                        process.env.REACT_APP_API_URL+`catalog/${product.imgPreview}`
                        :
                        '/img/pic/noImg.png'
                    }
                    className={styles.position_shortImg}
                    alt='short'
                />
            </button>
            <div className={styles.position__middle}>
                <h4 className={styles.position_subcat}>{product.subcategoryName}</h4>
                <h5 className={styles.position_name}>{product.name}</h5>
                <span className={styles.position_price}>{`${product.price} ₽`}</span>
            </div>

            <img
                src='/img/icons/close.svg'
                className={styles.position_close}
                alt='close'
                onClick={onClickDelete}
            />

        </div>
    );
};

export default DressedPosition;