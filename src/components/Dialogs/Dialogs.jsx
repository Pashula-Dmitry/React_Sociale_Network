import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/messagesPage-reducer";



const Dialogs = (props) => {
let state = props.dialogsPage;
    const DialogItems = state.dialogsData.map(el => <DialogItem name={el.name} key={el.id} id={el.id}/>);
    const Messages = state.messagesData.map(el => <Message text={el.message} key={el.id}/>);

    //let newRefTextarea = React.createRef(); не делай так, у событий есть event.target

    let addMessage = () => {
        props.addMessage();
    };

    let onMessageChange = (event) => {
        //let out  = newRefTextarea.current.value;
        let out = event.target.value;
        props.updateNewMessage(out);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogItems}
            </div>
            <div className={s.messages}>
                {Messages}
                <textarea onChange={onMessageChange}  value={state.newMessageText}></textarea>
                <button onClick={addMessage}>Send </button>
            </div>
        </div>
    );
};

export default Dialogs;