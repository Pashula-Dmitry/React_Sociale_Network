import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const  MyPosts  = (props) => {
    return (
            <div>my posts
                <div>new post</div>
                <div>
                    <Post count="39" message="I fucked maxim's mom"/>
                    <Post count="32" message="I fucked maxim's father"/>
                    <Post count="31" message="I fucked maxim's brother"/>
                </div>
            </div>
    )
};

export default MyPosts;