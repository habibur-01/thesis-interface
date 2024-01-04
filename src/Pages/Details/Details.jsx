import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
  const data = useLoaderData()
  console.log(data)
  return (
    <div className='my-20 w-3/5 space-y-4 mx-auto text-center'>
      <h1 className='text-2xl font-medium border-b-4 w-64 mx-auto'>Details of Data</h1>
      <div className='grid grid-cols-3 gap-8'>
        <div className='border'>
          <h1 className='py-3 border-b-2 bg-sky-500'>pH</h1>
          <p className='py-3 bg-blue-300'>{data.pH}</p>

        </div>
        <div className='border'>
          <h1 className='py-3 border-b-2 bg-sky-500'>Temp</h1>
          <p className='py-3 bg-blue-300'>{data.Temp}</p>

        </div>
        <div className='border'>
          <h1 className='py-3 border-b-2 bg-sky-500'>TDS</h1>
          <p className='py-3 bg-blue-300'>{data.TDS}</p>

        </div>
        <div className='border'>
          <h1 className='py-3 border-b-2 bg-sky-500'>EC1</h1>
          <p className='py-3 bg-blue-300'>{data.EC1}</p>

        </div>
        <div className='border'>
          <h1 className='py-3 border-b-2 bg-sky-500'>EC2</h1>
          <p className='py-3 bg-blue-300'>{data.EC2}</p>

        </div>
        <div className='border'>
          <h1 className='py-3 border-b-2 bg-sky-500'>Salt1</h1>
          <p className='py-3 bg-blue-300'>{data.Salt1}</p>

        </div>
        <div className='border'>
          <h1 className='py-3 border-b-2 bg-sky-500'>Salt2</h1>
          <p className='py-3 bg-blue-300'>{data.Salt2}</p>

        </div>
      </div>

    </div>
  );
};

export default Details;