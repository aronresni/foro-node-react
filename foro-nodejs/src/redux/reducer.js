import { GET_POST, GET_POST_BY_NAME, POST_POST, POST_EDIT_POST, POST_DELETE_POST } from "./action/constants"

const initialstate = {
    allPosts: [],
    userPosts: [],
    users: [],
}
const rootReducer = (state = initialstate, action) => {
    switch (action.type) {
        case GET_POST:
            return {
                ...state,
                allPosts: action.payload
            }

        default:
            return { ...state }
    }
}



export default rootReducer