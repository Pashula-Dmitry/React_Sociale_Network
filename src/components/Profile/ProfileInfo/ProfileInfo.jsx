import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://strana.ua/img/article/2625/70_main.jpeg" alt=""/>
            </div>
            <div className={classes.desctriptionBlock}>ava + description</div>
        </div>
    )
};

export default ProfileInfo;