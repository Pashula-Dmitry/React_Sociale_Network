import React from 'react';
import './App.css';
import Header from "./components/Header/Header.js";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar localState={props.state.sideBar}/>
                <div className="app-wrapper-content">
                    <Route path="/Dialogs" render={ () => <Dialogs localState={props.state.messagesPage} />}/>
                    <Route path="/Profile" render={ () => <Profile localState={props.state.profilePage}/>}/>
                    <Route path="/News" render={ () => <News/>}/>
                    <Route path="/Music" render={ () => <Music/>}/>
                    <Route path="/Setting" render={ () => <Setting/>}/>
                </div>
            </div>
    );
};

export default App;