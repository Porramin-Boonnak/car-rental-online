import { useState } from 'react'
import '../css/signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Carbg from '../carbg.png'
export default function Signup() {
    const navigate = useNavigate();
    const url = "52.187.25.101:5000";
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
        if(username!==undefined&&password!==undefined&&email!==undefined)
        {
            axios.post(url+'/api/customer',customer).then(response=>{
                localStorage.setItem('token', response.data);
                 navigate('/list')
            }).catch(error=>{
                console.log(error)
                alert("username ซ้ำ")
            });
        }
        else{
            alert("Please fill in complete information.")
        }
    }
    return (<>
        <div id='mainsignup'>
            <div id="aablueboxsignup">           
                <label id = "sign">Sign up</label><br/>
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