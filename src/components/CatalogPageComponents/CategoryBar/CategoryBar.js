import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import styles from './CategoryBar.module.css'
import {Context} from "../../../index";

const CategoryBar = observer(() => {
    const {category} = useContext(Context)

    const openCategory = (categoryId) => {
        category.setSelectedCategoryId(categoryId)
    }
    const chooseCategory = (categoryId)=>{
        openCategory(categoryId)
        category.setSelectedSubcategoryId('')
    }

    return (
        <div className={styles.categoryBar__wrap}>
            {category.categories.map(categoryItem =>
                <div className={styles.category}>
                    <div className={styles.category__item}>
                        <div
                            className={styles.category__item_title}
                            onClick={()=>chooseCategory(categoryItem.id)}
                        >
                            {categoryItem.name}
                        </div>
                        <img
                            className={
                                category.selectedCategoryId === categoryItem.id ?
                                    styles.category__item_arrow_active
                                    :
                                    styles.category__item_arrow
                            }
                            onClick={() => openCategory(categoryItem.id)}
                            src='/img/icons/select-arrow.svg'
                            alt='>'
                        />
                    </div>

                    <ul
                        key={categoryItem.id}
                        className={
                            category.selectedCategoryId === categoryItem.id ?
                                styles.subcategory__list_active
                                :
                                styles.subcategory__list}
                    >
                        {categoryItem.subcategories.map(subcategoryItem =>
                            <li
                                key={subcategoryItem.id}
                                className={
                                    subcategoryItem.id === category.selectedSubcategoryId ?
                                        styles.subcategory__list_item + " " + styles.subcategory__list_item_active
                                        :
                                        styles.subcategory__list_item
                                }
                                onClick={()=>category.setSelectedSubcategoryId(subcategoryItem.id)}
                            >
                                {subcategoryItem.name}
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
});

export default CategoryBar;