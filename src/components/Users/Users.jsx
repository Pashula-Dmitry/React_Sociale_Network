import React from "react";
import userPhoto from "../../assets/images/user.png";
import classes from "./users.module.css";
import {NavLink} from "react-router-dom";



const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (<div>
        <div>
            {pages.map((current, index) => (current > 60) ? undefined : <span onClick={(event) => {
                props.onPageChanged(current)
            }} className={props.currentPage === current && classes.selectedPage}>
                    {current} </span>)
            }

        </div>
        {props.users.map((u) => <div key={u.id}>
        <span>
            <div>
                <NavLink to={'/Profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""
                         style={{width: "100px", height: "125px"}}/>
                </NavLink>
            </div>
            <div>
                {
                    u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.unfollow(u.id); }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.follow(u.id);
                        }}>Follow</button>
                }
            </div>
        </span>
            <span>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
            <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
            </span>
        </span>
        </div>)}

    </div>)
};

export default Users;