import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profilePage-reducer";



const MyPosts = (props) => {

    const postsElements = props.postsData.map(el => <Post countLikes={el.countLikes} message={el.message}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        /*let text = newPostElement.current.value; можно так, но нет смысла отправлять текст,
         когда у нас хронится эта же строка в state newPostText
         */
        props.addPost();
    };

    let onPostChange = (event) => {
        let text = event.target.value;
        props.updateNewPostText(text);
        //let action = updateNewPostActionCreator(text);
        //props.dispatch(action);
    };

    return (
        <div className={classes.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}  value={props.newPostText}/>
                </div>
                <div>
                <button onClick={ onAddPost }>Add post</button>
                </div>
            </div>

            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;