import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import StatusWithHooks from "./Status/StatusWithHooks";


const ProfileInfo = ({profile, status, updateUserStatus}) => {
    if(!profile){
        return <Preloader/>
    }
console.log(profile, status, updateUserStatus)
    return (
        <div>
            <div>
                <StatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
            </div>
            <div className={classes.desctriptionBlock}>
                <img src={profile.photos.large} alt=""/>
                <p> Name: {profile.fullName}</p>
                <p>lookingForAJob = {profile.lookingForAJob}</p>
                <p>aboutMe = {profile.aboutMe}</p>
            </div>
        </div>
    )
};

export default ProfileInfo;