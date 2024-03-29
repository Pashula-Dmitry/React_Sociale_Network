import React from 'react';
import classes from './ImgAndName.module.css';
import {NavLink} from "react-router-dom";

const  ImgAndName  = (props) => {
    return (
        <div className={classes.flexx}>
            <div className={classes.friends}>
                <NavLink to={'/Profile/' + props.id} activeClassName={classes.activeLink}>
                <img  src="https://upload.wikimedia.org/wikipedia/en/4/4f/Green-tinged_avatar.jpg" alt="not found"/>
                <h3>{props.name}</h3>
                </NavLink>
            </div>
        </div>

    )};

export default ImgAndName;