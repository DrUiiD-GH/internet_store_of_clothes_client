import React from 'react';
import styles from './ConstructorCatalog.module.css'
import {Form} from "react-bootstrap";
import ConstructorCard from "../ConstructorCard/ConstructorCard";


const ConstructorCatalog = () => {
    return (
        <div className={styles.catalog__wrap}>
            <div className={styles.catalog__title}>
                <Form.Select className={styles.selector}>
                    <option>Категория</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                <Form.Select className={styles.selector}>
                    <option>Подкатегория</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </div>
            <div className={styles.catalog__list}>
                <ConstructorCard/>
                <ConstructorCard/>
                <ConstructorCard/>
                <ConstructorCard/>

            </div>

        </div>
    );
};

export default ConstructorCatalog;