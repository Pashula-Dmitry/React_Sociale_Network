import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    const DialogItems = props.localState.dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>);
    const Messages = props.localState.messagesData.map(el => <Message text={el.message}/>);


    let newRefTextarea = React.createRef();
    let textAr = () => {
      let out  = newRefTextarea.current.value;
      alert(out);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogItems}
            </div>
            <div className={s.messages}>
                {Messages}
                <textarea ref={newRefTextarea}></textarea>
                <button onClick={textAr}>Send </button>
            </div>
        </div>
    );
}

export default Dialogs;