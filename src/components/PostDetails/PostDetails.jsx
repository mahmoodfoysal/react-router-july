import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';

const PostDetails = () => {
    const postDetail = useLoaderData();
    const navigate = useNavigate();
    const {id, title, body} = postDetail;
    const {postId} = useParams()
    console.log(postId)

    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h3>Post Details: {id}</h3>

            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;