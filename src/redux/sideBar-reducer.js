const THREE_FRIEND = "THREE_FRIEND";
let initialState = {
    friends: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Max'},
        {id: 3, name: 'Kura'}
    ]
};
const sideBarReducer = (state = initialState, action) => {
    /*switch (action.type){

        default:
            return state;
    }
*/
    return state;
};

export default sideBarReducer;