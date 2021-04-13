const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profilePageReducer = (state, action) => {
    debugger;
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

