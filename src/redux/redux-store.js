import {applyMiddleware, combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePage-reducer";
import messagesPageReducer from "./messagesPage-reducer";
import sideBarReducer from "./sideBar-reducer";
import usersPageReducer from "./Users-reducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./appReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

let rootReducer = combineReducers({
    profilePage  : profilePageReducer,
    messagesPage : messagesPageReducer,
    sideBar      : sideBarReducer,
    usersPage    : usersPageReducer,
    auth         : authReducer,
    app          : appReducer,
});

let store = createStore(rootReducer, composeWithDevTools( applyMiddleware(thunkMiddleware) ));

window.store = store;

export default store;