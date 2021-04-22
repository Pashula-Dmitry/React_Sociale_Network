import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unFollowAC} from "../../redux/Users-reducer";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        Follow: (userId) => {
            dispatch(followAC(userId));
        },
        Unfollow: (userId) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
    }
};

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer;