import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import ImgAndName from "./ImgAndName/ImgAndName";
import Post from "../Profile/MyPosts/Post/Post";

const Navbar = (props) => {


    //const friends = props.localState.friends.map(el => <ImgAndName id={el.id} name={el.name}/>);
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/Profile" activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/Dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/News" activeClassName={classes.activeLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/Music" activeClassName={classes.activeLink}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/Setting" activeClassName={classes.activeLink}>Settings</NavLink>
            </div>
            <div className={classes.item}>
                    <h2>Friends</h2>
                <div className={classes.flexx}>
                    {/*{friends}*/}
                </div>

            </div>
        </nav>
    )
};

export default Navbar;