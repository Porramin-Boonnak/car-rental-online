import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/login.css'
import axios from 'axios';
export default function Login() {
    const url = "http://52.187.25.101:5000";
    const username = useRef(null);
    const password = useRef(null);
    const usernameadmin = "admin-car-rental";
    const passwordadmin = "1212312121";
    const navigate = useNavigate();
    const Handleclick=()=>{
        const data = {
            username : username.current.value,
            password : password.current.value
        }
        axios.post(url+'/api/customerlogin',data).then(response=>{
            localStorage.setItem('token', response.data)
            navigate('/list');
        }).catch(error=>{
            alert("Username and password do not match")
        });
        
    }
    const adminaccess=()=>{
        if(username.current.value === usernameadmin && password.current.value ===passwordadmin)
        {
            navigate('/admin', { state: { username: usernameadmin,password:passwordadmin} });
        }
        else{
            alert("usernameAdmin or passwordAdmin not match");
        }
    }
    return (<>
        <div id='mainlogin'>
            <div id="bluebox">
                <div id="username">
                    <label>USERNAME/EMAIL</label>
                    <input type="text" ref={username}/>
                </div>
                <div id="password">
                    <label>Password</label><br />
                    <input type="text" ref={password}/>
                </div>


                <div id="signup">
                <a href="/signup" target="_self">Signup</a>    
                </div>
                <button id = "adminb" onClick={adminaccess}>Admin</button>
                <input id="blogin" type='submit' onClick={Handleclick} value='login'/>
                
                
            </div>
        </div>
    </>)
}