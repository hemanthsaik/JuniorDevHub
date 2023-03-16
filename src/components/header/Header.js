import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import React from 'react';


export default function Header() {
  return (
      <Navbar className="navbar bg-light ">
        <div className="container m-auto  p-2">
          <Link className="navbar-brand mb-0 h1" to="/">JuniorDevHub</Link>
        </div>
        <div>
          <Link to="/login" className="navbar-brand px-2">
            Login
          </Link>
          <Link to="/signup" className="navbar-brand px-2 ">
            SignUp
          </Link>
        </div>
      </Navbar>
  )
}
