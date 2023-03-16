import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';



const Login = () => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const handelSubmit = () => {
        let formstatus = true;
        // This code is useless since you might have an Api to control the login
        
        /* let epattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!epattern.test(userName)) {
            formstatus = false;
            setEmailError("Invalid email id");
        } else {
            setEmailError("");
        }
        if (password.length < 8) {
            formstatus = false;
            setPasswordError("Invalid password");
        } else {
            setPasswordError("");
        } */

        // do not change the bellow content
        if (formstatus == true) {
            toast.success('Form Submited');
        } else {
            toast.warn('Enter valid input')
        }
    }

    return (
        <div className="center container">
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <div className="card flex p-3">

                <div className="card-title" align="center"><h1>Log in </h1></div>
                <div className="card-body">
                    <div>
                        <label htmlFor="exampleInputEmail1" className="form-label">Email Id</label>
                        <input type="email" className="form-control" id="email" value={userName} onChange={(e) => { setUsername(e.target.value) }} aria-describedby="emailHelp" pattern='/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;' />
                        <small className='text-danger'>{emailError}</small>
                    </div>
                    <div>
                        <label htmlFor="exampleInputEmail1" className="form-label"> Password</label>
                        <input type="password" className="form-control" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} aria-describedby="emailHelp" />
                        <small className='text-danger'>{passwordError}</small>
                    </div>
                    <button onClick={handelSubmit} className='btn btn-primary mt-2' align="center">Submit</button>
                    <div>
                        <label htmlFor="">new to JuniorDevHub? <Link to={"/signup"}>Click here to SignUp</Link></label>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Login;