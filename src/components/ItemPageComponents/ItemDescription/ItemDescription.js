import React from 'react';
import styles from './ItemDescription.module.css'

const ItemDescription = () => {
    const itmDesc = [
        {id:'1', title:'Состав', text:'Хлопок - 66%, Полиэфир - 34%'},
        {id:'2', title:'Длина', text:'70 см'},
        {id:'3', title:'Длина рукава', text:'25 см'},
        {id:'4', title:'Сезон', text:'Мульти'},
        {id:'5', title:'Цвет', text:'Голубой'},
    ]

    return (
        <div className={styles.description__wrap}>
            <div className={styles.description__desc}>
                <h2 className={styles.desc_title}>Описание</h2>
                <p className={styles.desc_text}>
                    Футболка DRY выполнена из быстросохнущего материала,
                    который прекрасно отводит влагу и обеспечивает
                    ощущение комфорта даже в жаркую погоду.
                    Благодаря универсальному круглому вырезу и
                    прямому крою можно носить отдельно или в составе
                    многослойных образов.
                </p>
            </div>
            <div className={styles.description__specific}>
                <h3 className={styles.specific_title}>Характеристики</h3>
                <ul className={styles.specific__list}>
                    {itmDesc.map(row =>
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