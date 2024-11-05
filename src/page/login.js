import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/login.css'
import axios from 'axios';
export default function Login() {
    const url = "http://localhost:5000";
    const username = useRef(null);
    const password = useRef(null);
    const navigate = useNavigate();
    const Handleclick=()=>{
        const data = {
            username : username.current.value,
            password : password.current.value
        }
        axios.post(url+'/api/customerlogin',data).then(response=>{
            if(response.data==="Successfully")
            {
                console.log(response.data)
                navigate('/list');
            }
        }).catch(error=>{
            alert("Username and password do not match")
        });
        
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
                    <label>Signup</label>
                </div>
                <input id="blogin" type='submit' onClick={Handleclick} value='login'/>
            </div>
        </div>
    </>)
}