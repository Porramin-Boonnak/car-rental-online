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
                            <img id="slide-1" src="https://images.unsplash.com/photo-1656464868371-602be27fd4c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" alt="3D rendering of an imaginary orange planet in space" />
                            <img id="slide-2" src="https://images.unsplash.com/photo-1657586640569-4a3d4577328c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" alt="3D rendering of an imaginary green planet in space" />
                            <img id="slide-3" src="https://images.unsplash.com/photo-1656077217715-bdaeb06bd01f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" alt="3D rendering of an imaginary blue planet in space" />
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