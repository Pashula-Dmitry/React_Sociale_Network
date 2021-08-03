import profilePageReducer, {addPostActionCreator, deletePost} from "./profilePage-reducer";

let state = {
    postsData: [
        {id: 1, countLikes: 1, message: "Hello i'm learning a React!"},
        {id: 2, countLikes: 21, message: "i'm 19 y.o."},
        {id: 3, countLikes: 200, message: "I'm from Ukraine, Dnipro city "},
        {id: 4, countLikes: 0, message: "Have been starting to learn WEB since 16 y. o."},
        {id: 5, countLikes: 4, message: "Also have skills communication with other"},
        {id: 6, countLikes: 2000, message: "have nice day!"},
        {id: 7, countLikes: 1, message: "Just for example comments"}
    ],
};


it('length of posts should be incremented', () => {
    // set of data
    const action = addPostActionCreator("React is cool technology");
    // action
    const newState = profilePageReducer(state, action)
    // expectation
    expect(newState.postsData.length).toBe(8);
});

it('message of post should be correct', () => {
    // set of data
    const action = addPostActionCreator("React is cool technology");
    // action
    const newState = profilePageReducer(state, action)
    // expectation
    expect(newState.postsData[7].message).toBe("React is cool technology");
});

it('list of posts should be incremented', () => {
    // set of data
    const action = deletePost(1);
    // action
    const newState = profilePageReducer(state, action)
    // expectation
    expect(newState.postsData.length).toBe(6);
});