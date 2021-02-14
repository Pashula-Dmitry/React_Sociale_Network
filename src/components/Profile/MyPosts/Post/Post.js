import React from 'react';
import classes from './Post.module.css';

const  Post  = (props) => {
    return (
                    <div className={classes.item}>
                        <img src="https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg" alt=""/>
                        {props.message}
                        <span> like: {props.count}</span>
                    </div>

    )
};

export default Post;