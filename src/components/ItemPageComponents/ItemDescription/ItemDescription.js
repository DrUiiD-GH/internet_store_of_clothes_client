import React from 'react';
import styles from './ItemDescription.module.css'

const ItemDescription = ({info, description}) => {

    return (
        <div className={styles.description__wrap}>
            <div className={styles.description__desc}>
                <h2 className={styles.desc_title}>Описание</h2>
                <p className={styles.desc_text}>
                    {description}
                </p>
            </div>
            <div className={styles.description__specific}>
                <h3 className={styles.specific_title}>Характеристики</h3>
                <ul className={styles.specific__list}>
                    {info.map(row =>
                        <li className={styles.list__row} key={row.id}>
                            <div className={styles.list__row_side + ' ' + styles.list__row_leftside}>
                                <div className={styles.list__row_title}>
                                    {row.title}
                                </div>
                                <div className={styles.list__row_div}/>
                            </div>
                            <div className={styles.list__row_side}>
                                <p className={styles.list__row_text}>
                                    {row.text}
                                </p>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ItemDescription;