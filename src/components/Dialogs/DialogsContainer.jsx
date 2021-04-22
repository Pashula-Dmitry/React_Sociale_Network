import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/messagesPage-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// const DialogsContainer = (props) => {
//     /*   let state = props.store.getState().messagesPage;
//        console.log(state);
//        //let newRefTextarea = React.createRef(); не делай так, у событий есть event.target
//
//        let addMessage = () => {
//          props.dispatch(addMessageActionCreator());
//        };
//
//        let onMessageChange = (out) => {
//            //let out  = newRefTextarea.current.value;
//            props.dispatch(updateNewMessageActionCreator(out));
//        };*/
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState().messagesPage;
//                     console.log(state);
//                     //let newRefTextarea = React.createRef(); не делай так, у событий есть event.target
//
//                     let addMessage = () => {
//                         store.dispatch(addMessageActionCreator());
//                     };
//
//                     let onMessageChange = (out) => {
//                         //let out  = newRefTextarea.current.value;
//                         store.dispatch(updateNewMessageActionCreator(out));
//                     };
//                     return <Dialogs updateNewMessage={onMessageChange} addMessage={addMessage} dialogsPage={store.getState().messagesPage}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// };




let mapStateToProps = (state) => {
    return {
        dialogsPage: state.messagesPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (out) => {
            dispatch(updateNewMessageActionCreator(out));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
};

const  DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;