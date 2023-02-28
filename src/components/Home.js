import React from 'react'
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Navbar className="navbar bg-gray">
                <div className="container-fluid  p-2">
                    <Link className="navbar-brand mb-0 h1" href="/">Navbar</Link>
                </div>
                <div>
                    <Link to="/login" className="navbar-brand">
                        Login
                    </Link>
                    <Link to="/signup" className="navbar-brand ">
                        SignUp
                    </Link>
                </div>
            </Navbar>
        </div>
    )
}

export default Home