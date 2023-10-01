import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../redux/action/action";
import { VscDebugDisconnect } from 'react-icons/vsc'
import 'animate.css';

const Post = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.allPosts);
    const user = useSelector(state => state.userstate);

    useEffect(() => {
        dispatch(getPost());
    }, [dispatch]);

    if (!Array.isArray(posts)) {

        return (
            <div className=' flex flex-col justify-center items-center h-screen' >
                <VscDebugDisconnect className='mb-7 ' color='black' size={95}/>
                <h1 className='font-bold text-5xl'>Not posts yet.</h1>
            </div>

        )
    }

    return (
        <div className='border'>
            {posts.length === 0 ? (
                <div>
                    <p>Not posts yet.</p>
                    <h1 className='color-red'>{user.username}</h1>
                </div>
            ) : (
                posts.map(post => (
                    <div key={post.PostId}>
                        <div className='flex border'><h5>{user.username}</h5></div>
                        <div><img src={`http://localhost:3000/Posts/getImage/${post.image}`} className="w-64" alt={`Post ${post.id}`} /></div>
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
