import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate()
        const postStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
    }
    const handleShowDetail = () => {
        navigate(`/postDetails/${id}`)
    }
    return (
        <div style={postStyle}>
            <h4>Post of ID: {id} </h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

export default Post;