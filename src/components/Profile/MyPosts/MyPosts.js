import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, Form, Formik} from "formik";


const MyPosts = React.memo((props) => {
        console.log("RENDER MyPosts");
        const postsElements = props.postsData.map((el, index) => <Post countLikes={el.countLikes} key={index + `${el}`} message={el.message}/>);

        return (
            <div className={classes.postsBlock}>
                <h3>my posts</h3>
                <FormPost addPost={props.addPost}/>
                <div className={classes.posts}>
                    {postsElements}
                </div>
            </div>
        )
    }
);

const FormPost = (props) => {
    console.log("RENDER FormPost");
    const submitFormik = (values, {setSubmitting}) => {
        alert(JSON.stringify(values.textarea));
        setSubmitting(false);
        props.addPost(values.textarea);
    };

    return (
        <Formik
            initialValues={{textarea: ''}}
            onSubmit={submitFormik}
            validateOnBlur
        >
            {({isSubmitting, isValid, dirty}) => (
                <Form>
                    <div>
                        <Field as={'textarea'} name="textarea"/>
                    </div>
                    <div>
                        <button type="submit" disabled={isSubmitting && !isValid && !dirty}>
                            Send
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};


export default MyPosts;