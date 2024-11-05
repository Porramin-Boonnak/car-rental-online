import '../css/Home.css'
export default function Home() {
    return (<>

        <div>
            <div id="homebackG">

                <div id="tabbar">
                    <img src = "https://cdn-icons-png.flaticon.com/512/4254/4254068.png" alt = "Hamburger"/>
                    <img id="profileicon" src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" width="45" height="47" alt="Profile Icon" />
                </div>
                <img id="logoicon" src="https://pngimg.com/uploads/Mclaren/Mclaren_PNG2.png" width="280" height="150" alt="McLaren Logo" />
                <div id="center">
                    
                    
                    <br/>
                    <span id = "test">
                    
                        <span id = "groupinput">
                        <div id = "check"><input type = "text" placeholder="Location" id = "Locate"></input></div>
                        <input type="date" placeholder="MM/DD/YYYY" className='InputDate'></input>
                        <input type="date" placeholder="MM/DD/YYYY" className='InputDate'></input>
                        </span>
                        
                    </span>
                    <span>
                        <img src = "https://www.headlightmag.com/hlmwp/wp-content/uploads/2023/04/Mclaren-750S_01.jpg" width="300" height="180"/>
                        </span>

                    




                </div>
            </div>
        </div>
    </>)
}