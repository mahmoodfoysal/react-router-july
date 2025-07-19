import React from 'react';
import { useRouteError } from 'react-router';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h2>Opps!!!</h2>
            <h2>Page not found</h2>
            <p>{error.statusText || error.message}</p>
        </div>
    );
};

export default ErrorPage;