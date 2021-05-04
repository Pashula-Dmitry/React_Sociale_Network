import React from 'react';
import {connect} from "react-redux";

import {setCurrentPageAC, followAC, setUsersAC, unFollowAC, setTotalUsersCountAC} from "../../redux/Users-reducer";
import * as axios from "axios";
import classes from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import Users from "./Users";


class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                console.log(response);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);

            }).catch(error => console.log(error));
    }


    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                console.log(response);
                this.props.setUsers(response.data.items);

            }).catch(error => console.log(error));
    };
    render = () => {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      onPageChanged={this.onPageChanged}
                      currentPage={this.props.currentPage}
                      Unfollow={this.props.Unfollow}
                      Follow={this.props.Follow}
                      users={this.props.users}/>
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        setCurrentPage : (current) => {
            dispatch(setCurrentPageAC(current))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
    }
};



export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer);