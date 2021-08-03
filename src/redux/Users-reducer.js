import {followAPI, usersAPI} from "../Api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const SET_VALUE_PRELOADER = 'SET_VALUE_PRELOADER';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};
const usersPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map( (u) => {
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                }),
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                }),
            };
        }
        case SET_USERS: {
            return {...state, users: action.users};
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage};
        }
        case SET_USERS_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalCount};
        }
        case SET_VALUE_PRELOADER: {
            return {...state, isFetching: action.isPreloader};
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return   {...state,
                followingInProgress: action.isFetching? [...state.followingInProgress, action.idUser]
                                                        : state.followingInProgress.filter(id => id != action.idUser)}

        }
        default:
            return state;
    }
};


export default usersPageReducer;

export const followAC = (userId) => ({type: FOLLOW, userId: userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, totalCount});
export const setValuePreloader = (isPreloader) => ({type: SET_VALUE_PRELOADER, isPreloader});
export const toggleIsFetching = (isFetching, idUser) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, idUser});

// REDUX-THUNKS

export const requestUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(setValuePreloader(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setValuePreloader(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            }).catch(error => console.log(error));
    }
};
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true, userId));
        followAPI.unfollow(userId)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(unFollowAC(userId));
                }
                dispatch(toggleIsFetching(false, userId));
            });
    }
};

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true, userId));
        followAPI.follow(userId)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(followAC(userId));
                }
                dispatch(toggleIsFetching(false, userId));
            });
    }
};