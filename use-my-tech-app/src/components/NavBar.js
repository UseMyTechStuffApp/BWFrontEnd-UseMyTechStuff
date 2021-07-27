import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(){
    return(
        <div className="NavBar">
            <div className='links'>
            <Link to="/">Log In</Link>
            <Link>Sign Up</Link>
            <Link to='/itemList'>Rent Items</Link>
            </div>
        </div>
    )
}