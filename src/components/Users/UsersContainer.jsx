import React from 'react';
import {connect} from "react-redux";
import {
    getUsers, unfollow, follow
} from "../../redux/Users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        /*this.props.setValuePreloader(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setValuePreloader(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);

            }).catch(error => console.log(error));*/
    }

   /* componentWillUnmount() {
        alert("i'm dead");
    }*/

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };
    render = () => {
        return <>
            {(this.props.isFetching) ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   followingInProgress={this.props.followingInProgress}
            />
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
        followingInProgress: state.usersPage.followingInProgress,
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
    getUsers,
    unfollow,
    follow,
})(UsersContainer);