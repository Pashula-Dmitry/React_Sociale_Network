const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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
    ]
};


const messagesPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
             return {
                ...state,
                messagesData: [...state.messagesData, {id: 8, message: action.newMassageBody}],
            };
        }

        default:
            return state;
    }
};


export default messagesPageReducer;


export const addMessageActionCreator = (newMassageBody) => ({type: ADD_MESSAGE , newMassageBody});