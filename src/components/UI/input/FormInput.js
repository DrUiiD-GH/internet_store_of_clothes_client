import React from 'react';
import styles from './FormInput.module.css'

const FormInput = ({value, className, onChange, ...props}) => {
    return (
        <input className={styles.form_input + ' '+ className} {...props} value={value} onChange={onChange}/>
    );
};

export default FormInput;