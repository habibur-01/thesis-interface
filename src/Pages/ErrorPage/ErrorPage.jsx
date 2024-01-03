import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center h-[600px]'>
            <div className='space-y-6 text-center'>
                <h1 className='text-3xl font-semibold'>404</h1>
                <p className='text-base'>Sorry! No Page is Found</p>
                <Link to={'/'}><button className='btn btn-primary mt-6 '>Go Home</button></Link>
            </div>
            
        </div>
    );
};

export default ErrorPage;