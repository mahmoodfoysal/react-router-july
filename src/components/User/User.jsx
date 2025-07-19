import React from 'react';

const user = ({user}) => {
    const {id, name, email, phone}= user;
    const userStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
    }
        return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>ID: {id}</p>
        </div>
    );
};

export default user;