import React from "react";


const Users = (props) => {
    if(props.users.length === 0) {
        props.setUsers([{
            id: 1,
            photoURL: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg",
            followed: true,
            fullName: "Dmitry",
            status: "I'm cool person who learns a react!",
            location: {city: "Dnepr", country: "Ukraine"}
        },
            {
                id: 2,
                photoURL: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg",
                followed: false,
                fullName: "Yan",
                status: "I'm cool person who learns a react too!",
                location: {city: "Dnepr", country: "Ukraine"}
            },
            {
                id: 3,
                photoURL: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg",
                followed: true,
                fullName: "Maxim",
                status: "I'm stupid person who nothing learns =(",
                location: {city: "Dnepr", country: "Ukraine"}
            },
            {
                id: 4,
                photoURL: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg",
                followed: false,
                fullName: "Olesha",
                status: "I'm cool person who learns a Angular!",
                location: {city: "Dnepr", country: "Ukraine"}
            },]);
    }
    return (<div>
        {props.users.map((u) => <div key={u.id}>
        <span>
            <div>
                <img src={u.photoURL} alt="" style={ {width: "100px", height: "125px"} }/>
            </div>
            <div>
                {
                    u.followed
                        ? <button onClick={() => { props.Unfollow(u.id) }}>Unfollow</button>
                        : <button onClick={() => {props.Follow(u.id)}}>Follow</button>}

            </div>
        </span>
        <span>
            <span>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
            </span>
            <span>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
            </span>
        </span>
        </div>)}

    </div>);
};
export default Users;