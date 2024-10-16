import './css/login.css'
import { useLocation } from 'react-router-dom';
export default function login() {
    return (<>
        <div id='mainlogin'>
            <img id="logopiclogin" src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" />
            <div id="bluebox">
                <div id="username">
                    <label>USERNAME/EMAIL</label>
                    <input type="text" />

                </div>

                <div id="password">
                    <label>Password</label><br />
                    <input type="text" />
                </div>
                <div id="signup">
                    <label>Signup</label>
                </div>
                <div id="blogin">login</div>
            </div>



        </div>












    </>)
}