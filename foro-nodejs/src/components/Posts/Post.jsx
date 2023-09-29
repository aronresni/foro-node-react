import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getPost} from "../../redux/action/action"

const Post = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.allPosts)
const user = useSelector(state=> state.userstate)
    useEffect(() => {
        dispatch(getPost())
    }, [dispatch]);



    if (!Array.isArray(posts)) {
        return <p>Not posts yet.</p>;
    }
console.log(user);

    return (
        <div>
      
        {posts.length === 0 ? (
            <div>

            <p>Not posts yet.</p>
            <h1 className='color-red'>{user.username}</h1>
            </div>
        ) : (
            posts.map(post => (
                <div key={post.PostId}>
                    <div><img src={post.image} alt={`Post ${post.id}`} /></div>
                    <div>
                        <p>{post.description}</p>
                    </div>
                </div>
            ))
        )}
    </div>
    );
};

export default Post;

