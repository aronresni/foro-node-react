import { GET_POST, GET_POST_BY_NAME, POST_POST, POST_EDIT_POST, POST_DELETE_POST } from "./constants"
import axios from "axios"

const URL_POSTS = "http://localhost:3000/Posts"

export const getPost = () => {
    return async function (dispatch) {
        try {
            const res = await axios.get(`http://localhost:3000/Posts/posts`);
            return dispatch({
                type: GET_POST,
                payload: res.data
            })

        } catch (error) {
            return error
        }
    }
}