import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';



const Signup = () => {
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [conformPassword, setConformpassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [conformpasswordError, setConformpasswordError] = useState('')

    const handelSubmit = () => {
        let formstatus = true;
        let epattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
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
        }
        if (password != conformPassword) {
            formstatus = false;
            setConformpasswordError("Password does not match");
        } else {
            setConformpasswordError("");
        }
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
                <div className="card-title" align="center"><h1>Sign up </h1></div>
                <div className="card-body">
                    <div>
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" value={userName} onChange={(e) => { setUsername(e.target.value) }} aria-describedby="emailHelp" />
                        <small className='text-danger'>{emailError}</small>
                    </div>
                    <div>
                        <label for="exampleInputEmail1" className="form-label">Enter Password</label>
                        <input type="password" className="form-control" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} aria-describedby="emailHelp" />
                        <small className='text-danger'>{passwordError}</small>
                    </div>
                    <div>
                        <label for="exampleInputEmail1" className="form-label">Conform Password</label>
                        <input type="password" className="form-control" id="password" value={conformPassword} onChange={(e) => { setConformpassword(e.target.value) }} aria-describedby="emailHelp" />
                        <small className='text-danger'>{conformpasswordError}</small>
                    </div>
                    <button className='btn btn-primary mt-2' onClick={handelSubmit} align="center">Submit</button>
                    <div>
                        <label htmlFor="">already have an account! <Link to={"/login"}>Click here to Login</Link></label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;