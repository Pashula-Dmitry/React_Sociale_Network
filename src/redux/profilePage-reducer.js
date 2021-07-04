import {profileAPI, usersAPI} from "../Api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE_USER = 'SET_PROFILE_USER';
const SET_USER_STATUS = 'SET_USER_STATUS';


let initialState = {
    postsData: [
        {id: 1, countLikes: 1, message: "Hello i'm learning a React!"},
        {id: 2, countLikes: 21, message: "i'm 19 y.o."},
        {id: 3, countLikes: 200, message: "I'm from Ukraine, Dnipro city "},
        {id: 4, countLikes: 0, message: "Have been starting to learn WEB since 16 y. o."},
        {id: 5, countLikes: 4, message: "Also have skills communication with other"},
        {id: 6, countLikes: 2000, message: "have nice day!"},
        {id: 7, countLikes: 1, message: "Just for example comments"}
    ],
    profile: null,
    status: "",
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                postsData: [...state.postsData, {id: 8, message: action.newPostBody, countLikes: 122}],
            };
        }
        case SET_PROFILE_USER: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        default:
            return state;
    }

};

export default profilePageReducer;


export const addPostActionCreator = (newPostBody) => ({type: ADD_POST, newPostBody});
export const setProfileUser = (profile) => ({type: SET_PROFILE_USER, profile});
export const getProfileUser = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setProfileUser(response.data));
            }).catch(error => console.log(error));
    }
};
export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setUserStatus(response.data));
            }).catch(error => console.log(error));
    }
};
export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0)
                dispatch(setUserStatus(status));
            }).catch(error => console.log(error));
    }
};
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status});

