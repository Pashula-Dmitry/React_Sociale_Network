import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileUser} from "../../redux/profilePage-reducer";
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
        /*usersAPI.getProfile(userId)
            .then(response => {
                this.props.setProfileUser(response.data);
                console.log(response.data);
            }).catch(error => console.log(error));*/
    }

    render = () => {

        return <Profile {...this.props}/>;
    }
}

 const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
 });




export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getProfileUser})
)(ProfileContainer);