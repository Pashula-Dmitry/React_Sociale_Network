import React from 'react';
import  classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const  Header  = (props) => {
    return (
        <header className={classes.header}>
            <img src="data:image/jpeg;base64,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" alt=""/>
            <div className={classes.loginBlock}>
                {props.isAuth? props.login : <NavLink to={`/login`}>Login</NavLink> }
            </div>
        </header>
    )
};

export default Header;