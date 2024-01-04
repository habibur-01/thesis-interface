import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const { userSignIn } =useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const user = { email, password }
        console.log(user)

        userSignIn(email, password)
        .then(result => {
            console.log(result.user)
            
            navigate("/")
            Swal.fire({
                position: "center",
                icon: "success",
                title: 'Login Successfull',
                showConfirmButton: false,
                timer: 1500
              });
        })
        .catch(error => {
            console.error(error)
            
        })
    }

    return (
        <div className='flex justify-center items-center h-[700px]'>

            <div className='w-1/2 border rounded-lg'>
                <form className="card-body w-3/4 mx-auto" onSubmit={handleLogin}>
                
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <label className="label">
                        <Link to={"/register"} className="label-text-alt link link-hover">Already have an account? Please <span className='text-indigo-700'>Register</span></Link>
                    </label>
                </form>

            </div>

        </div>
    );
};

export default Login;