import Router from "./Router"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

import '../css/navbar.css'

export default function Nevbar(){
    return (<>
        <div className="containernavbar">
            <FontAwesomeIcon id="logohomeNav" icon={faHome} />
            {/*<button id="grouploginNav">
                <h1 id="textloginNav">LOGIN</h1>
                <FontAwesomeIcon id="logologinNav" icon={faRightToBracket} />
            </button>*/}
            <button id="grouplogoutNav">
                <h1 id="textlogoutNav">LOGOUT</h1>
                <FontAwesomeIcon id="logologoutNav" icon={faRightFromBracket} />
            </button>
            <button id="user">
                <label id="iduserNav">userid</label>
                <FontAwesomeIcon id="userNav" icon={faUser} />
            </button>
        </div>
        <Router />
        
    </>)
}