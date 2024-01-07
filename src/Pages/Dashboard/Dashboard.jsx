import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [allTask, setAllTask] = useState([])
    const url = 'https://thesis-final.vercel.app/data'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllTask(data))
    }, [])
    console.log(allTask)

    // const handleShowDetails = (_id) => {
    //     const id = _id;
    //     console.log(id)
    //     fetch(`http://localhost:4000/addproduct/${_id}`, {
    //         method: 'GET',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(id)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
            
    //     })
    // }
    
    return (
        <div className='flex justify-center item-center my-16'>
            
            <div>
                {
                    allTask.map((task, index) => <div key={task._id}>
                        <div className="flex justify-center gap-20 w-full rounded-lg p-4 border-b-2 border-t-2">
                            <h1 >{index=index+1}</h1>
                            <h1>{task.DateTime}</h1>
                            <h1><Link to={`/details/${task._id}`}><button className='btn' >show details</button></Link></h1>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Dashboard;