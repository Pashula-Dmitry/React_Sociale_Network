import React from 'react';
import  classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import Profile from "../Profile/Profile";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
        })
            .then(response => {
             if(response.data.resultCode === 0) { // Если мы залогинены только тогда диппачем данные.
                 let {id, email, login} = response.data.data;
                 debugger;
                 this.props.setUserData(id, email, login);
             }
            }).catch(error => console.log(error));
    }

    render = () => {
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state) => ({
    userid: state.auth.userid,
    email : state.auth.email,
    login : state.auth.login,
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {setUserData})(HeaderContainer);