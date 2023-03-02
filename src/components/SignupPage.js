import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';


const Signup = () => {
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [conformPassword, setConformpassword] = useState('')

    return (
        <div className="center container">
            <div className="card flex p-3">
                <div className="card-title" align="center"><h1>Sign up </h1></div>
                <div className="card-body">
                    <div>
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" value={userName} onChange={(e) => { setUsername(e.target.value) }} aria-describedby="emailHelp" />
                    </div>
                    <div>
                        <label for="exampleInputEmail1" className="form-label">Enter Password</label>
                        <input type="password" className="form-control" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} aria-describedby="emailHelp" />
                    </div>
                    <div>
                        <label for="exampleInputEmail1" className="form-label">Conform Password</label>
                        <input type="password" className="form-control" id="password" value={conformPassword} onChange={(e) => { setConformpassword(e.target.value) }} aria-describedby="emailHelp" />
                    </div>
                    <button className='btn btn-primary mt-2' align="center">Submit</button>
                    <div>
                        <label htmlFor="">already have an account! <Link to={"/login"}>Click here to Login</Link></label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;