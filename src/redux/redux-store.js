import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePage-reducer";
import messagesPageReducer from "./messagesPage-reducer";
import sideBarReducer from "./sideBar-reducer";
import usersPageReducer from "./Users-reducer";

let reducers = combineReducers({
    profilePage  : profilePageReducer,
    messagesPage : messagesPageReducer,
    sideBar      : sideBarReducer,
    usersPage    : usersPageReducer
});

let store = createStore(reducers);

window.store = store;

export default store;