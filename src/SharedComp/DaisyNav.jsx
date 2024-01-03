import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const DaisyNav = () => {
    const {user, userSignOut} = useContext(AuthContext)

    const handleSiognOut = () => {
        userSignOut()
        .then(result => {
            console.log(result)
            Swal.fire({
                position: "center",
                icon: "success",
                title: 'Logout Successfully',
                showConfirmButton: false,
                timer: 1500
              });
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to={'/'}><li>Home</li></NavLink>
                            <NavLink to={'/dashboard'}><li>Dashboard </li></NavLink>
                            <NavLink to={'/register'}><li >Register</li></NavLink>
                            <NavLink to={'/login'}><li>Login</li></NavLink>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden  lg:flex">
                    <ul className="menu menu-horizontal gap-6 px-1">
                        <NavLink to={'/'}><li>Home</li></NavLink>
                        <NavLink to={'/dashboard'}><li className={`${user? 'block' : 'hidden'}`}>Dashboard </li></NavLink>
                        <NavLink to={'/register'}><li className={`${user? 'hidden' : 'block'}`}>Register</li></NavLink>
                        <NavLink to={'/login'}>{
                            user? <li onClick={handleSiognOut}>Logout</li> : <li>Login</li>
                        }</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user? <p><button className='btn'>{user?.displayName.split(' ')[0]}</button></p>:<p><button className='btn'>No User</button></p>
                    }
                </div>
            </div>

        </div>
    );
};

export default DaisyNav;