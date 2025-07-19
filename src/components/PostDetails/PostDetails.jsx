import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const postDetail = useLoaderData();
    const {id, title, body} = postDetail 
    return (
        <div>
            <h3>Post Details: {id}</h3>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
        </div>
    );
};

export default PostDetails;