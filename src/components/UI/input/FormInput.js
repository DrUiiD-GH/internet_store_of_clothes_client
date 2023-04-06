import React from 'react';
import styles from './FormInput.module.css'

const FormInput = ({...props}) => {
    return (
        <input className={styles.form_input} {...props}/>
    );
};

export default FormInput;