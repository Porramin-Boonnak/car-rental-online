import Router from "./Router"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../css/navbar.css'

export default function Nevbar(){
    const url = "https://obscure-orbit-j67gj67vx4g3pqq9-5000.app.github.dev";
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
                                                <button id="user">
                                                    <label id="iduserNav">{customer[0].username}</label>
                                                    <FontAwesomeIcon id="userNav" icon={faUser} />
                                                </button>
                                                </> 
                                                : <a id="grouploginNav" href="/login">
                                                    <h1 id="textloginNav">LOGIN</h1>
                                                    <FontAwesomeIcon id="logologinNav" icon={faRightToBracket} />
                                                    </a>;
    return (<>
        <a className="containernavbar" href="/">
            <FontAwesomeIcon id="logohomeNav" icon={faHome} />
            {customerstatus}
            
        </a>
        <Router />
        
    </>)
}