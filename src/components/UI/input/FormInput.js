import React from 'react';
import styles from './FormInput.module.css'

const FormInput = ({value, onChange, ...props}) => {
    return (
        <input className={styles.form_input} {...props} value={value} onChange={onChange}/>
    );
};

export default FormInput;