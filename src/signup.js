import { useState } from 'react'
import './css/signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export default function Signup() {
    const navigate = useNavigate();
    const url = "http://localhost:5000";
    const [username,setusername] = useState();
    const [password,setpassword] = useState();
    const [email,setemail] = useState();
    const customer= {
        username : username,
        password : password,
        email : email
    };
    const hendleusernames=(event)=>{
        setusername(event.target.value);
    }
    const hendlepassword=(event)=>{
        setpassword(event.target.value);
    }
    const hendleemail=(event)=>{
        setemail(event.target.value);
    }
    const hendleclick=()=>{
        if(username!=undefined&&password!=undefined&&email!=undefined)
        {
            axios.post(url+'/api/customer',customer).then(response=>{
                const {id} = response.data[0];
                localStorage.setItem('id', id);
                 navigate('/list')
            });
        }
        else{
            alert("Please fill in complete information.")
        }
    }
    return (<>
        <div id='mainsignup'>
        <img id="logopicsignup" src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt='car'/>
            <div id="bluebox">           
                <label id = "sign">Sign up</label>
                <div id="usernamesignup">
                    <label>Username</label>
                    <input type="text" onChange={hendleusernames}/>
                </div>
                <div id="passwordsignup">
                    <label>Password</label><br />
                    <input type="text" onChange={hendlepassword}/>
                </div>

                <div id="emailsignup">
                    <label>Email</label><br />
                    <input type="text" onChange={hendleemail}/>
                </div>
                    <button id = "submit"type = "submit" onClick={hendleclick}> submit</button>       
            </div>
        </div>
    </>)
}