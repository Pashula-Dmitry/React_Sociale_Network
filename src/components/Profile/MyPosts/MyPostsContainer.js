import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profilePage-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

/*const MyPostsContainer = (props) => {

    //let state = props.store.getState();

   /!* let addPost = () => {
        /!*let text = newPostElement.current.value; можно так, но нет смысла отправлять текст,
         когда у нас хронится эта же строка в state newPostText
         *!/
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        let action = updateNewPostActionCreator(text);
        props.store.dispatch(action);
    };*!/

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState();
                let addPost = () => {
                    /!*let text = newPostElement.current.value; можно так, но нет смысла отправлять текст,
                     когда у нас хронится эта же строка в state newPostText
                     *!/
                    store.dispatch(addPostActionCreator());
                };
                let onPostChange = (text) => {
                    let action = updateNewPostActionCreator(text);
                    store.dispatch(action);
                };

              return  <MyPosts updateNewPostText={onPostChange}
                         addPost={addPost}
                         postsData={state.profilePage.postsData}
                         newPostText={state.profilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    )
};*/

let mapStateToProps = (state) => {
    debugger;
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => { dispatch(addPostActionCreator()); },
        updateNewPostText: (text) => {
            let action = updateNewPostActionCreator(text);
            dispatch(action);
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;