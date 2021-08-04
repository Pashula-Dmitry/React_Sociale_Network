import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, unfollow, follow, followingInProgress, ...props}) => {

    return (<div>
                <Paginator currentPage={currentPage}
                           onPageChanged={onPageChanged}
                           totalUsersCount={totalUsersCount}
                           pageSize={pageSize}/>
                {users.map((u) => <User key={u.id}
                                        user={u}
                                        unfollow={unfollow}
                                        follow={follow}
                                        followingInProgress={followingInProgress}/>
                )}
            </div>)
};

export default Users;