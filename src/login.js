import { useRef } from 'react'
import './css/login.css'
export default function Login() {
    const username = useRef(null);
    const password = useRef(null);
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
                <div id="blogin">login</div>
            </div>



        </div>












    </>)
}