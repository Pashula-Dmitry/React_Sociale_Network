import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import Status from "./Status/Status";


const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>
                <img src="https://strana.ua/img/article/2625/70_main.jpeg" alt=""/>
            </div>*/}
            <div>
                <Status status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
            <div className={classes.desctriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                <p> Name: {props.profile.fullName}</p>
                <p>lookingForAJob = {props.profile.lookingForAJob}</p>
                <p>aboutMe = {props.profile.aboutMe}</p>
            </div>
        </div>
    )
};

export default ProfileInfo;