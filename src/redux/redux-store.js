import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePage-reducer";
import messagesPageReducer from "./messagesPage-reducer";
import sideBarReducer from "./sideBar-reducer";

let reducers = combineReducers({
    profilePage  : profilePageReducer,
    messagesPage : messagesPageReducer,
    sideBar      : sideBarReducer
});

let store = createStore(reducers);

window.store = store;

export default store;