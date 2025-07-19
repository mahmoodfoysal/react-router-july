import React from 'react';
import User from '../user/user';
import { useLoaderData } from 'react-router';
import './Users.css';

const Users = () => {
    const users = useLoaderData()
    return (
        <div>
            <h2>Our users: {users.length}</h2>
            <p>Fantastic vodro user</p>
            <div className='users'>
                {
                    users.map((user, index) => <User
                    key={index}
                    user={user}
                    ></User>)
                }
            </div>
        </div>
    );
};

export default Users;