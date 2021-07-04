import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileUser, getUserStatus, updateUserStatus} from "../../redux/profilePage-reducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        this.props.getProfileUser(userId);
        this.props.getUserStatus(userId);
    }

    render = () => {

        return <Profile {...this.props}/>;
    }
}

 const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
 });




export default compose(
    /*withAuthRedirect,*/
    withRouter,
    connect(mapStateToProps, {getProfileUser, getUserStatus, updateUserStatus})
)(ProfileContainer);