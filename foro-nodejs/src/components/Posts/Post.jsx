import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Post = () => {
    const [posts, setPosts] = useState([]); // State to hold the posts data

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:3000/Posts/posts');
                setPosts(res.data); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); 
    }, []);

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




