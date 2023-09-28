import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../redux/action/action"

const Post = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.allPosts)

    useEffect(() => {
        dispatch(getPost())
    }, [dispatch]);
    return (
        <div>
            {posts.map(post => (
                <div key={post.PostId}>
                    <div><img src={post.image} alt={`Post ${post.id}`} /></div>
                    <div>
                        <p>{post.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Post;

