import React from 'react';
import s from './Dialogs.module.css';
import {NavLink, Redirect} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ErrorMessage, Field, Form, Formik} from "formik";

const Dialogs = (props) => {
let state = props.dialogsPage;
    const DialogItems = state.dialogsData.map(el => <DialogItem name={el.name} key={el.id} id={el.id}/>);
    const Messages = state.messagesData.map(el => <Message text={el.message} key={el.id}/>);
    const newMessageBody = state.newMessageText;


    //let newRefTextarea = React.createRef(); не делай так, у событий есть event.target

    let addMessage = () => {
        props.addMessage();
    };

        if(!props.isAuth) return <Redirect to={"/login"}/>;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogItems}
            </div>
            <div className={s.messages}>
                {Messages}
                <MessageForm addMessage={props.addMessage}/>
                {/*<textarea onChange={onMessageChange}  value={state.newMessageText}></textarea>
                <button onClick={addMessage}>Send </button>*/}

            </div>
        </div>
    );
};

const MessageForm = (props) => {

    const submitFormik = (values, {setSubmitting}) => {
        alert(JSON.stringify(values.textarea));
        setSubmitting(false);
        props.addMessage(values.textarea);
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


export default Dialogs;