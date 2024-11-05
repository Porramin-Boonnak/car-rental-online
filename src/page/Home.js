import '../css/Home.css'
import logo from '../carlogo.png'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
export default function Home() {
    const navigate = useNavigate();
    const start_ref = useRef(null);
    const end_ref = useRef(null);
    const location_ref = useRef(null);
    const hendleclick = () =>{
        const startValue = start_ref.current.value;
        const endValue = end_ref.current.value;
        const locationValue = location_ref.current.value;

        if (startValue && endValue && locationValue !== null) {
            navigate('/list', { state: { startfromhome: startValue, endfromhome: endValue, locationfromhome: locationValue } });
        } else {
            alert("Please select start date, end date, and location.");
        }
        
        
    }
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
                            
                            <select id="locationhome" ref={location_ref}>
                                <option value="empty">--Please choose a location--</option>
                                <option value="bangkok">Bangkok</option>
                                <option value="chiang Mai">Chiang Mai</option>
                                <option value="chonburi">Chonburi</option>
                                <option value="phuket">Phuket</option>
                                <option value="ubon Ratchathani">Ubon Ratchathani</option>
                                <option value="songkhla">Songkhla</option>
                            </select>
                            
                            <input id="date1" type="date" placeholder="MM/DD/YYYY" ref={start_ref}></input>
                            <label id="date1text">Start:</label>
                            <input id="date2" type="date" placeholder="MM/DD/YYYY" ref={end_ref}></input>
                            <label id="date2text" >End:</label>
                            <button id="buttonSearch" onClick={hendleclick}>Search your car</button>
                        </div>
                    
                      
            </div>
            </>
    )
}