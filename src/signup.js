import './css/signup.css'
import { useLocation } from 'react-router-dom';
export default function signup() {
    return (<>
        <div id='mainsignup'>
        <img id="logopicsignup" src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" />
            <div id="bluebox">
                
                <label id = "sign">Sign up</label>
                <div id="usernamesignup">
                    <label>Username</label>
                    <input type="text" />

                </div>

                <div id="passwordsignup">
                    <label>Password</label><br />
                    <input type="text" />
                </div>

                <div id="emailsignup">
                    <label>Email</label><br />
                    <input type="text" />
                </div>

                
                
                    <button id = "submit"type = "submit"> submit</button>
                    
                
            </div>
            



        </div>












    </>)
}