import styles from './validator.module.css'
import React from "react";

export const ValidationForm = (props) => {
    return <div className={styles.error}>{props.children}</div>
};