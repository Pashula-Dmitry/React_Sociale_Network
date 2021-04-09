import {rerenderEntireTree} from "../render";

const state = {
    profilePage: {
        postsData : [
            {id: 1,  countLikes: 1, message: "Hello i'm learning a React!"},
            {id: 2,  countLikes: 21, message: "i'm 19 y.o."},
            {id: 3,  countLikes: 200, message: "I'm from Ukraine, Dnipro city "},
            {id: 4,  countLikes: 0, message: "Have been starting to learn WEB since 16 y. o."},
            {id: 5,  countLikes: 4, message: "Also have skills communication with other"},
            {id: 6,  countLikes: 2000, message: "have nice day!"},
            {id: 7,  countLikes: 1, message: "Just for example comments"}
        ],
        newPostText: "it-kamasutra"
    },
    messagesPage: {
        dialogsData : [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valary'}
        ],
        messagesData : [
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
        friends : [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Max'},
            {id: 3, name: 'Kura'}
        ]
    }
};
window.state = state;

export let addPost = () => {
    let newPost = {
        id: 8,
        message: state.profilePage.newPostText,
        countLikes: 122
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
};

export let updateNewPostText = (newLetter) => {
    state.profilePage.newPostText = newLetter;
    rerenderEntireTree(state);
};





export let addMessage = () => {
    let newMessage = {
        id: 8,
        message: state.messagesPage.newMessageText,
    };
    state.messagesPage.messagesData.push(newMessage);
    state.messagesPage.newMessageText = "";
    rerenderEntireTree(state);
};

export let updateNewMessageText = (newLetter) => {
    state.messagesPage.newMessageText = newLetter;
    rerenderEntireTree(state);
};

export default state;