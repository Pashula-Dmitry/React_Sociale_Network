import {authAPI} from "../Api";

const SET_USER_DATA = 'auth/SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};
const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            };
        }
        default:
            return state;
    }
};


export default authReducer;

export const setUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});
export const getAuthUserData = () => {
    return async (dispatch) => {
        try {
            const response = await authAPI.me();
            if (response.data.resultCode === 0) { // Если мы залогинены только тогда диппачем данные.
                let {id, email, login} = response.data.data;
                dispatch(setUserData(id, email, login, true));
            }
        } catch (error) {
            return console.log(error);
        }

    }
};

export const login = (email, password, rememberMe, setStatus, setSubmitting) => {
    return async (dispatch) => {
        try {
        const response = await authAPI.login(email, password, rememberMe);
            if (response.data.resultCode === 0) { // Если мы залогинены только тогда диппачем данные.
                dispatch(getAuthUserData());
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                setSubmitting(false);
                setStatus({message});
            }
        } catch (error) {
            return console.log(error)
        }
    }
};

export const logout = () => {
    return async (dispatch) => {
        try {
            const response = await authAPI.logout();
            if (response.data.resultCode === 0) { // Если мы залогинены только тогда диппачем данные.
                dispatch(setUserData(null, null, null, false));
            }
        } catch(error) {
            return console.log(error)
        }
    }
};