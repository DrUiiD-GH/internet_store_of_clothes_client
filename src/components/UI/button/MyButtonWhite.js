import React from 'react';
import styles from "./MyButton.module.css";

const MyButtonWhite = ({children, className, ...props}) => {

    return (
        <button className={styles.myBtn + ' ' +styles.myBtn_wh + ' ' + className} {...props}>
            {children}
        </button>
    );
};

export default MyButtonWhite;