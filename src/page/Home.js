import '../css/Home.css'
import logo from '../carlogo.png'
export default function Home() {
    return (
            <>
            <div id="container">
                <div id= "logologin "></div>
                
                <div id= "image"></div>
                    <br/>
                        <div id = "groupinput">
                            <img src={logo} id="logohome" />
                            <select id="locationhome" >
                                <option value="empty">--Please choose a location--</option>
                                <option value="bangkok">Bangkok</option>
                                <option value="chiang Mai">Chiang Mai</option>
                                <option value="chonburi">Chonburi</option>
                                <option value="phuket">Phuket</option>
                                <option value="ubon Ratchathani">Ubon Ratchathani</option>
                                <option value="songkhla">Songkhla</option>
                            </select>
                            
                            <input id="date1" type="date" placeholder="MM/DD/YYYY" ></input>
                            <label id="date1">-Start-</label>
                            <input id="date2" type="date" placeholder="MM/DD/YYYY" ></input>
                            <label id="date2">-End-</label>
                            <button id="buttonSearch">Search your car</button>
                        </div>
                    
                      
            </div>
            </>
    )
}