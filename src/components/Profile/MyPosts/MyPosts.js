import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPost, updateNewPostText} from "../../../redux/state";

const MyPosts = (props) => {

    const postsElements = props.postsData.map(el => <Post countLikes={el.countLikes} message={el.message}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        /*let text = newPostElement.current.value; можно так, но нет смысла отправлять текст,
         когда у нас хронится эта же строка в state newPostText
         */
        props.dispatch({type: "ADD-POST"});
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", newLetter: text});
    };

    return (
        <div className={classes.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                <button onClick={ addPost }>Add post</button>
                </div>
            </div>

            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;