import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {setProfileUser} from "../../redux/profilePage-reducer";
import {setValuePreloader} from "../../redux/Users-reducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
        debugger;
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setProfileUser(response.data);
                console.log(response.data);

            }).catch(error => console.log(error));
    }

    render = () => {
        return <Profile {...this.props}/>
    }
};


 const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
 });


 const withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setProfileUser})(withUrlDataContainerComponent);