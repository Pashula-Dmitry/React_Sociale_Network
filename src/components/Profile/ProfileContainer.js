import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileUser, getUserStatus, updateUserStatus} from "../../redux/profilePage-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";



class ProfileContainer extends React.Component {

    componentDidMount() {
        console.log("----componentDidMoun-------");
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = this.props.authorizedUserId;
            if(!userId) {
                this.props.history.push("/login");
            }
        }

        this.props.getProfileUser(userId);
        this.props.getUserStatus(userId);
    }
    componentDidUpdate(prevProps, prevState) {

        if(prevProps.match.params.userId !== this.props.match.params.userId){
            console.log("----componentDidUpdate-------");
            this.props.getProfileUser(this.props.match.params.userId);
            this.props.getUserStatus(this.props.match.params.userId);
        }
    }


    render = () => {
        return <Profile {...this.props}/>;
    }
}

 const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
 });




export default compose(
    /*withAuthRedirect,*/
    withRouter,
    connect(mapStateToProps, {getProfileUser, getUserStatus, updateUserStatus})
)(ProfileContainer);