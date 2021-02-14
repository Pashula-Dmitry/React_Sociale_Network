import React from 'react';
import classes from './Profile.module.css';

const  Profile  = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://strana.ua/img/article/2625/70_main.jpeg" alt=""/>
            </div>
            <div>ava + description</div>
            <div>my posts</div>
            <div>new post</div>
            <div>
                <div className={classes.item}>poost 1</div>
                <div className={classes.item}>poost 2</div>
            </div>
        </div>
    )
};

export default Profile;