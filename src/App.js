import React from 'react';
import './App.css';
import Header from "./components/Header/Header.js";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar />
                <div className="app-wrapper-content">
                    <Route path="/Dialogs" render={ () => <DialogsContainer />}/>
                    <Route path="/Profile" render={ () => <Profile />}/>
                    <Route path="/News" render={ () => <News/>}/>
                    <Route path="/Music" render={ () => <Music/>}/>
                    <Route path="/Setting" render={ () => <Setting/>}/>
                    <Route path="/Users" render={ () => <UsersContainer/>}/>
                </div>
            </div>
    );
};

export default App;