import profilePageReducer from "./profilePage-reducer";
import messagesPageReducer from "./messagesPage-reducer";

let store = {
    _state: {
        profilePage: {
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
        },
        messagesPage: {
            dialogsData: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Valary'}
            ],
            messagesData: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'How is your it-kamasutra'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
                {id: 6, message: 'Yo'}
            ],
            newMessageText: 'newString'
        },
        sideBar: {
            friends: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Max'},
                {id: 3, name: 'Kura'}
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },


    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    /* addPost() {
     },
     updateNewPostText(newLetter) {
     },*/
    /*addMessage() {
    },
    updateNewMessageText(newLetter) {
    },*/
    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesPageReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);
    }

};

export default store;

window.store = store;