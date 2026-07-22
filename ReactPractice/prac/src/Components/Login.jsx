
import React from 'react';
import { useState } from 'react';

function Login(){
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [submit, setSubmit] = useState(false);

    const submitBtn =(e)=>{
        e.preventDefault();
        setSubmit(true);
        if(name && password.length >= 6){
           alert("Submitted Successfully")
        }
    }

   return( 
        <div className='loginPage' style={{backgroundColor: 'lightblue'}}>  
            <h1>Login Page</h1>
            <div className='loginLayout'>
                User Name: <input value={name} type="text" onChange={(e) => setName(e.target.value)} /><br/>
                {submit && !name && (<p style={{color:'red'}}>Name is Required</p>)}
                <br/>
                Password: <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} /><br/>
                {submit && !password && (<p style={{color:'red'}}>Password is Required</p>)}
                 {submit && password && password.length < 6 && (<p style={{color:'red'}}>Password greater thean 6 letters</p>)}
                <br/>
                <button style={{width:'100px',margin:'10px',padding:'10px'}} onClick={submitBtn}>Submit</button>
            </div>
        </div>
    )
}

export default Login;