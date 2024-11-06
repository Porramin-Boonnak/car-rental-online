import Router from "./Router"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../css/navbar.css'

export default function Nevbar(){
    const url = "http://52.187.25.101:5000";
    const [customer,setcustomer] = useState([]);
    useEffect(()=>{

        axios.post(url+'/api/customer/status/login',{token : localStorage.getItem('token')}).then(response=>{
            setcustomer(response.data);
        }).catch(error=>{
            alert("please login ");
        });
    },[])
    const customerstatus = customer.length > 0 ? <>
                                                <button id="grouplogoutNav" onClick={()=>localStorage.removeItem('token')}>
                                                    <h1 id="textlogoutNav">LOGOUT</h1>
                                                    <FontAwesomeIcon id="logologoutNav" icon={faRightFromBracket} />
                                                </button>
                                                <a id="user" href="/status">
                                                    <label id="iduserNav">{customer[0].username}</label>
                                                    <FontAwesomeIcon id="userNav" icon={faUser} />
                                                </a>
                                                </> 
                                                : <a id="grouploginNav" href="/login">
                                                    <h1 id="textloginNav">LOGIN</h1>
                                                    <FontAwesomeIcon id="logologinNav" icon={faRightToBracket} />
                                                    </a>;
    return (<div id="contentcomponent">
        <a className="containernavbar" href="/">
            <FontAwesomeIcon id="logohomeNav" icon={faHome} />
            {customerstatus}
            
        </a>
        <div id="component">
        <Router />
        </div>
        
    </div>)
}