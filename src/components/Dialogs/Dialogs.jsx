import React from 'react';
import s from './Dialogs.module.css';
import {Redirect} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";
import {ValidationForm} from "../../helpers/validator";

const Dialogs = (props) => {
let state = props.dialogsPage;
    const DialogItems = state.dialogsData.map(el => <DialogItem name={el.name} key={el.id} id={el.id}/>);
    const Messages = state.messagesData.map(el => <Message text={el.message} key={el.id}/>);


    //let newRefTextarea = React.createRef(); не делай так, у событий есть event.target

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
    const [countLetters, setCountLetters] = React.useState(200);

    const validationsSchema = yup.object().shape({
        textarea: yup.string().typeError('Должно быть строкой').max(200, "Нельзя вводить больше 200 символов!"),
    });



    const submitFormik = (values, {setSubmitting, resetForm}) => {
        alert(JSON.stringify(values.textarea));
        setSubmitting(false);
        props.addMessage(values.textarea);
        resetForm();
        setCountLetters(() => 200)
    };
    const handleCount = (event, prevCount) => {
        let input = event.target.value;
        if(input.length > prevCount.length)
            setCountLetters((prevState) => prevState - 1);
        else
            setCountLetters((prevState) => prevState + 1);
    };

    return (
        <Formik
            initialValues={{textarea: '' , }}
            onSubmit={submitFormik}
            validateOnBlur
            validationSchema={validationsSchema}
        >
            {({isSubmitting, isValid, dirty, handleChange, values}) => (
                <Form>
                    <div>
                        <Field maxLength={'200'}  as={'textarea'} name="textarea"  onChange={function (e) {
                                handleCount(e, values.textarea);
                                handleChange(e);
                        }}/>
                        <ErrorMessage name="textarea" component={ValidationForm}/>
                    </div>
                    <div>
                        <button type="submit" disabled={isSubmitting && !isValid && !dirty}>
                            Send
                        </button>
                        <span>{countLetters}</span>
                    </div>
                </Form>
            )
            }
        </Formik>
    );
};


export default Dialogs;