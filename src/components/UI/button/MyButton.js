import React from 'react';
import styles from './MyButton.module.css'

const MyButton = ({children, className, onClick, ...props}) => {
    return (
        <button className={styles.myBtn + ' '+ styles.myBtn_reg + ' ' + className} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default MyButton;