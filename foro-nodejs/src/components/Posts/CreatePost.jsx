import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';
import { getPost, postPost, activeuser } from '../../redux/action/action'; 
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

const CreatePost = () => {
    useEffect(() => {
        dispatch(activeuser(username))
    }, []);
    const username = sessionStorage.getItem(`username`)
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const user = useSelector(state => state.userstate)
    console.log(user.username);
    const [userPost, setUserPost] = useState({
        description: "",
        image: null,
        username: username,
    })
    console.log(userPost);
    const handleDescriptionChange = (e) => {
        setUserPost({
            ...userPost,
            description: e.target.value
        })
    }


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setUserPost({
            ...userPost,
            image: file,
        });
    };


    const handleSubmitPost = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('description', userPost.description);
        formData.append('image', userPost.image);
        formData.append('username', username);
        dispatch(postPost(formData));
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    };

    return (

        <form onSubmit={handleSubmitPost} encType="multipart/form-data">

            <label>
                Description:
                <input value={userPost.description} onChange={handleDescriptionChange} />
            </label>
            <label>
                Image:
                <input type="file" name='image' onChange={handleImageChange}
                />
            </label>

            <button type='submit'>Create Post</button>
        </form>

    )
}

export default CreatePost
