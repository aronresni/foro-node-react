import { GET_POST, GET_POST_BY_NAME, POST_POST, POST_EDIT_POST, POST_DELETE_POST } from "./constants"
import axios, { AxiosHeaders } from "axios"

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

export const postPost = (payload) => {
    return async function (dispatch) {
        const json = await axios.post("/Posts/createpost", payload)
        const post = json.data
        return dispatch({
            type: POST_POST,
            payload: post
        })
    }
}

export const getPostByName = (name) => {
    return async function (dispatch) {
        try {

        } catch (error) {

        }
    }

}