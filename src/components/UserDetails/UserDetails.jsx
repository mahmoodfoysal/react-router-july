import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const details = useLoaderData();
    const {name, website} = details;
    return (
        <div>

            <h2>User Details</h2>
            <p>User Name: {name}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;