const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE_USER = 'SET_PROFILE_USER';


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
    newPostText: "it-kamasutra",
    profile: null,
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                postsData: [...state.postsData, {id: 8, message: state.newPostText, countLikes: 122}],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newLetter
            };
        }
        case SET_PROFILE_USER: {
            return {
                ...state,
                profile: action.profile
            };
        }
        default:
            return state;
    }

};

export default profilePageReducer;


export const addPostActionCreator = () => ({type: ADD_POST});
export const setProfileUser = (profile) => ({type: SET_PROFILE_USER, profile});
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newLetter: text});

