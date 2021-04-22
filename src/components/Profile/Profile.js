import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost, updateNewPostText} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const  Profile  = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
};

export default Profile;