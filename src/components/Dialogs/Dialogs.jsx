import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/messagesPage-reducer";



const Dialogs = (props) => {

    const DialogItems = props.localState.dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>);
    const Messages = props.localState.messagesData.map(el => <Message text={el.message}/>);

    //let newRefTextarea = React.createRef(); не делай так, у событий есть event.target

    let addMessage = () => {
      props.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (event) => {
        //let out  = newRefTextarea.current.value;
        let out = event.target.value;
        props.dispatch(updateNewMessageActionCreator(out));
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogItems}
            </div>
            <div className={s.messages}>
                {Messages}
                <textarea onChange={onMessageChange}  value={props.localState.newMessageText}></textarea>
                <button onClick={addMessage}>Send </button>
            </div>
        </div>
    );
}

export default Dialogs;