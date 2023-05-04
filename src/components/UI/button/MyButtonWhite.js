import React from 'react';
import styles from "./MyButton.module.css";

const MyButtonWhite = ({children, className, onClick,  ...props}) => {

    return (
        <button className={styles.myBtn + ' ' +styles.myBtn_wh + ' ' + className} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default MyButtonWhite;