import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost, updateNewPostText} from "../../redux/state";

const  Profile  = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.localState.postsData}
                     dispatch={props.dispatch}
                     newPostText={props.localState.newPostText}/>
        </div>
    )
};

export default Profile;