import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const [userName, setUsername] = useState('')

    return (
        <div className="center container">
            <div className="card flex p-3">
                <div className="card-title" align="center"><h1>Log in </h1></div>
                <div className="card-body">
                    <div>
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" value={userName} onChange={(e) => { setUsername(e.target.value) }} aria-describedby="emailHelp" />
                    </div>
                    <div>
                        <label for="exampleInputEmail1" className="form-label">Enter Password</label>
                        <input type="password" className="form-control" id="password" aria-describedby="emailHelp" />
                    </div>
                    <button className='btn btn-primary mt-2' align="center">Submit</button>
                    <div>
                        <label htmlFor="">new to JuniorDevHub? <Link to={"/signup"}>Click here to SignUp</Link></label>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Login;