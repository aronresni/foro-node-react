import React, { useState, useContext } from 'react'
import { useDispatch } from 'react-redux'
import { postPost } from '../../redux/action/action';
import  UserContext  from '../../state/userContextProvider';

const CreatePost = () => {
    const  user  = useContext(UserContext)
    const dispatch = useDispatch();
    const [userPost, setUserPost] = useState({
        description: "",
        image: ""
    })
    console.log(userPost);
    const handleDescriptionChange = (e) => {
        setUserPost({
            ...userPost,
            description: e.target.value
        })
    }

    const handleImageChange = (e) => {
        setUserPost({
            ...userPost,
            image: e.target.value
        })
    }
    const handleSubmitPost = async (e) => {
        e.preventDefault()
        dispatch(postPost())
    }


    return (

        <form onSubmit={handleSubmitPost}>
            <h1>{user.username}</h1>
            <label>
                Description:
                <input value={userPost.description} onChange={handleDescriptionChange} />
            </label>
            <label>
                Image:
                <input type="file" value={userPost.image} onChange={handleImageChange}
                />
            </label>

            <button type='submit'>Create Post</button>
        </form>

    )
}

export default CreatePost
