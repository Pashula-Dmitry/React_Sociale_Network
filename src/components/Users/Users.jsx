import React from "react";
import * as axios from "axios";
import userPhoto from "../../assets/images/user.png";
import classes from "./users.module.css";


const Users = (props) => {
    console.log(props);
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (<div>
        <div>
            {pages.map((current, index) => (current > 10) ? undefined : <span onClick={(event) => {
                props.onPageChanged(current)
            }} className={props.currentPage === current && classes.selectedPage}>
                    {current} </span>)
            }

        </div>
        {props.users.map((u) => <div key={u.id}>
        <span>
            <div>
                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""
                     style={{width: "100px", height: "125px"}}/>
            </div>
            <div>
                {
                    u.followed
                        ? <button onClick={() => {
                            props.Unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.Follow(u.id)
                        }}>Follow</button>}

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