import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/messagesPage-reducer";
import Dialogs from "./Dialogs";



const DialogsContainer = (props) => {
    let state = props.store.getState().messagesPage;
    console.log(state);
    //let newRefTextarea = React.createRef(); не делай так, у событий есть event.target

    let addMessage = () => {
      props.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (out) => {
        //let out  = newRefTextarea.current.value;
        props.dispatch(updateNewMessageActionCreator(out));
    };

    return (
        <Dialogs  updateNewMessage={onMessageChange} addMessage={addMessage} dialogsPage={state}/>
    );
};

export default DialogsContainer;