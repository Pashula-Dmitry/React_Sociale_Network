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
import DialogsContainer from "./components/Dialogs/DialogsContainer";


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
                </div>
            </div>
    );
};

export default App;