import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/login.css'
import axios from 'axios';
export default function Login() {
    const url = "https://obscure-orbit-j67gj67vx4g3pqq9-5000.app.github.dev";
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
            <img id="logopiclogin" src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt='car'/>
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