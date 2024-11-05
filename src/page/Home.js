import '../css/Home.css'
import logo from '../carlogo.png'
export default function Home() {
    return (
            <>
            <div id="container">
                <div id= "logologin "></div>
                <img src={logo} id="logohome" />
                <section class="slider-container">
                    <div class="slider-wrapper">
                        <div class="slider">
                            <img id="slide-1" src="https://www-asia.nissan-cdn.net/content/dam/Nissan/th/vehicles/VLP/almera-my23/thumbnail/almera-model.jpg" alt="3D rendering of an imaginary orange planet in space" />
                            <img id="slide-2" src="https://cf.autodeft2.pw/uploads/images/2014/Honda%20Jazz%20EU/2015-Honda-Jazz-1.jpg" alt="3D rendering of an imaginary green planet in space" />
                            <img id="slide-3" src="https://app.exclusive.co.th/file/car/H.png" alt="3D rendering of an imaginary blue planet in space" />
                        </div>
                        <div class="slider-nav">
                            <a href="#slide-1"></a>
                            <a href="#slide-2"></a>
                            <a href="#slide-3"></a>
                        </div>
                    </div>
                </section>
                    <br/>
                        <div id = "groupinput">
                            
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
                            <label id="date1text">Start:</label>
                            <input id="date2" type="date" placeholder="MM/DD/YYYY" ></input>
                            <label id="date2text" >End:</label>
                            <button id="buttonSearch">Search your car</button>
                        </div>
                    
                      
            </div>
            </>
    )
}