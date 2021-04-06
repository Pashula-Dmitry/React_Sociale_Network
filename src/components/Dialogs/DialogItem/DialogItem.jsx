import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = `/Dialogs/${props.id}`;
    return (
        <div className={`${s.dialog}  ${s.active}`}>
            <div><img src="https://logodix.com/logo/1727545.png" alt=""/>
                <NavLink to={path}>{props.name}</NavLink></div>
        </div>
    )
};



export default DialogItem;