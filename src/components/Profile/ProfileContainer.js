import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileUser} from "../../redux/profilePage-reducer";
import {Redirect, withRouter} from "react-router-dom";



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        this.props.getProfileUser(userId);
        /*usersAPI.getProfile(userId)
            .then(response => {
                this.props.setProfileUser(response.data);
                console.log(response.data);
            }).catch(error => console.log(error));*/
    }

    render = () => {
        if(!this.props.isAuth) return <Redirect to={"/login"} />;
        return <Profile {...this.props}/>;
    }
};

 const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
 });

 const withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getProfileUser})(withUrlDataContainerComponent);