import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profilePage-reducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {
    debugger;
    let state = props.store.getState();

    let addPost = () => {
        /*let text = newPostElement.current.value; можно так, но нет смысла отправлять текст,
         когда у нас хронится эта же строка в state newPostText
         */
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        let action = updateNewPostActionCreator(text);
        props.store.dispatch(action);
    };

    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost} postsData={state.profilePage.postsData}
        newPostText={state.profilePage.newPostText}/>
    )
};

export default MyPostsContainer;