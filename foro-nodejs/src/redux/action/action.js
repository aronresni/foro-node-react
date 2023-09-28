import { GET_POST, GET_POST_BY_DESCRIPTION, POST_POST, LOGIN, POST_EDIT_POST, POST_DELETE_POST, GET_USERS, LOGOUT } from "./constants"
import axios from "axios"


export const getUsers = () => {
    return async function (dispatch) {
        try {
            const res = await axios.get("http://localhost:3000/Users/users")
            return dispatch({
                type: GET_USERS,
                payload: res.data
            })
        } catch (error) {
            return error
        }
    }
}
export const login = (userLogin) => {
    return async function (dispatch) {
        const response = await axios.post(`http://localhost:3000/Users/login`, userLogin)
        const user = response.data
        dispatch({
            type: LOGIN,
            payload: user

        })
        return { user, response }
    }
}




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
        const json = await axios.post(`http://localhost:3000/Posts/createpost`, payload)
        const post = json.data
        return dispatch({
            type: POST_POST,
            payload: post
        })
    }
}

export const getPostByDescription = (description) => {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${URL_POSTS}/description?description=${description}`)
            return dispatch({
                type: GET_POST_BY_DESCRIPTION,
                payload: res.data,
            })
        } catch (error) {
            return error
        }
    }
}

