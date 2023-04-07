import React from 'react';
import styles from './MyButton.module.css'

const MyButton = ({children, className, ...props}) => {
    return (
        <button className={styles.myBtn + ' ' + className} {...props}>
            {children}
        </button>
    );
};

export default MyButton;