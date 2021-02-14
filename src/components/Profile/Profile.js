import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const  Profile  = () => {
    return (
        <div>
            <div>
                <img src="https://strana.ua/img/article/2625/70_main.jpeg" alt=""/>
            </div>
            <div>ava + description</div>
            <MyPosts />
        </div>
    )
};

export default Profile;