import {authAPI} from "../Api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email : null,
    login : null,
    isAuth: false
};
const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth : true,
            };
        }
        default:
            return state;
    }
};


export default authReducer;

export const setUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me()
            .then(response => {
                if(response.data.resultCode === 0) { // Если мы залогинены только тогда диппачем данные.
                    let {id, email, login} = response.data.data;
                    dispatch(setUserData(id, email, login));
                }
            }).catch(error => console.log(error));
}};
