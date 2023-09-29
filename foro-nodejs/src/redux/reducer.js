import { GET_POST, GET_POST_BY_DESCRIPTION, LOGOUT, POST_POST, POST_EDIT_POST, POST_DELETE_POST, GET_USERS, SET_USER } from "./action/constants"


const initialstate = {
    allPosts: [],
    post: [],
    userPosts: [],
    users: [],
    userstate: []
}

const rootReducer = (state = initialstate, action) => {

    switch (action.type) {

        case GET_POST:
            return {
                ...state,
                allPosts: action.payload,
                post: action.payload,
            }

        case GET_POST_BY_DESCRIPTION:
            return {
                ...state,
                post: action.payload,
            }
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case SET_USER:
            return {
                ...state,
                userstate: action.payload

            }


        default:
            return { ...state }
    }
}



export default rootReducer