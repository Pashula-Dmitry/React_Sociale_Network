import React from "react";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";



const User = ({user, unfollow, follow, followingInProgress }) => {
    return (<div>
        <div>
        <span>
            <div>
                <NavLink to={'/Profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=""
                         style={{width: "100px", height: "125px"}}/>
                </NavLink>
            </div>
            <div>
                {
                    user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id);
                        }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id);
                        }}>Follow</button>
                }
            </div>
        </span>
            <span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>{"user.location.country"}</div>
                <div>{"user.location.city"}</div>
            </span>
        </span>
        </div>
    </div>)
};

export default User;