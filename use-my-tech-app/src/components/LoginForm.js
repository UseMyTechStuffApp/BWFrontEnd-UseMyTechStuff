import React, { useState } from 'react'


function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({
        username: '',
        password:''
    })

    const submitHandler = e => {
        e.preventDefault();

        Login(details)
    }
    

    return (
        <>
        <h1>Use My Tech Stuff</h1>
        <img src='https://media.istockphoto.com/photos/designer-workplace-with-graphic-tablet-and-laptop-picture-id961759418?k=6&m=961759418&s=612x612&w=0&h=p9cwuXpJBhp2uPdwP0rfE-tuixKWdkihQN_bcK_q0yk=' alt='tech equipment'/>
        <div className='page-div'>
        <form onSubmit={submitHandler}>
            <div className='form-inner'>
                <h2>Login</h2>
                {(error !=='') ? ( <div className='error' style={{ color:'red' }}>{error}</div> ) : ''}
                <div className='form-group'>
                    <label htmlFor='username' placeholder='Username or Email'>Username:</label>
                    <input type='username' name='username' id='username' onChange={e => setDetails({...details, username: e.target.value})} value={details.username}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='password' placeholder='password'>Password:</label>
                    <input type='password' name='password' id='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <input type='submit' value='LOGIN'/>
                <br/>
                <input type='submit' value='Sign Up'/>
            </div>
        </form>
        </div>
        </>
    )
}

export default LoginForm

