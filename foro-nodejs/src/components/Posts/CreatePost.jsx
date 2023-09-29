import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postPost } from '../../redux/action/action';

const CreatePost = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.userstate)
    const [userPost, setUserPost] = useState({
        description: "",
        image: null,
        username: "",
    })
    console.log(user);
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
        formData.append('username', user.username);

        dispatch(postPost(formData));
    };

    return (

        <form onSubmit={handleSubmitPost} encType="multipart/form-data">

            <label>
                Description:
                <input value={userPost.description} onChange={handleDescriptionChange} />
            </label>
            <label>
                Image:
                <input type="file" onChange={handleImageChange}
                />
            </label>

            <button type='submit'>Create Post</button>
        </form>

    )
}

export default CreatePost
