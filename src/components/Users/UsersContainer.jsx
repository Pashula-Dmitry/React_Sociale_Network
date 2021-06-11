import React from 'react';
import {connect} from "react-redux";
import {
    setCurrentPage,
    followAC,
    setUsers,
    unFollowAC,
    setTotalUsersCount,
    setValuePreloader
} from "../../redux/Users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setValuePreloader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setValuePreloader(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);

            }).catch(error => console.log(error));
    }

   /* componentWillUnmount() {
        alert("i'm dead");
    }*/

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setValuePreloader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setValuePreloader(false);
                console.log(response);
                this.props.setUsers(response.data.items);

            }).catch(error => console.log(error));
    };
    render = () => {
        return <>
            {(this.props.isFetching) ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage}
                   Unfollow={this.props.Unfollow}
                   Follow={this.props.Follow}
                   users={this.props.users}/>
        </>
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
};


/*const mapDispatchToProps = (dispatch) => {
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
        setCurrentPage: (current) => {
            dispatch(setCurrentPageAC(current))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        setValuePrealoader: (isPrealoader) => {
            dispatch(setValuePrealoaderAC(isPrealoader));
        }
    }
};*/


export default connect(mapStateToProps, {
    Follow: followAC,
    Unfollow: unFollowAC,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setValuePreloader
})(UsersContainer);