const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
    newPostText: "it-kamasutra"
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: let newPost = {
                id: 8,
                message: state.newPostText,
                countLikes: 122
            };
            state.postsData.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
                state.newPostText = action.newLetter;
                return state;
        default: return state;
    }

};

export default profilePageReducer;


export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newLetter: text});

