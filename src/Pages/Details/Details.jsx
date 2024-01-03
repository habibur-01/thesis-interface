import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className='my-20 w-3/5 space-y-4 mx-auto text-center'>
            <div className='border'>
              <h1 className='py-3 border-b-2'>{data.title}</h1>
              <p className='py-3'>{data.description}</p>
              
            </div>
            <div className='border'>
              <h1 className='py-3 border-b-2'>{data.title}</h1>
              <p className='py-3'>{data.description}</p>
              
            </div>
            <div className='border'>
              <h1 className='py-3 border-b-2'>{data.title}</h1>
              <p className='py-3'>{data.description}</p>
              
            </div>
            
        </div>
    );
};

export default Details;