
import { GET_POST, GET_POST_BY_DESCRIPTION, LOGOUT, LOGIN, POST_POST, POST_EDIT_POST, POST_DELETE_POST, GET_USERS } from "./action/constants"

const initialstate = {
    allPosts: [],
    post: [],
    userPosts: [],
    users: [],
    user: [],
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
        case LOGIN:
            return {
                ...state,
                user: action.payload
            }


        default:
            return { ...state }
    }
}



export default rootReducer