import '../css/status.css'
export default function status() {
    return (<>
        <div id='mainstaus'>
            <div id = "borderstatus">
            <img id="picprostatus" src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt='car'/>
            </div>

            <label id = "namestatus">name: </label>
            <label id = "realnamestatus">....</label>

            <div id = "bigbox">
            <img id="carselect" src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt='car'/>


            </div>
            <div id = "bigbox2">
            
            </div>
            <label id = "come">สถานที่รับ:</label><br/>
            <label id = "out">สถานที่คืน:</label><br/>
            <label id = "comedate">label</label>
            <label id = "outdate">label</label>
            <div id = "comeoutdate"><input type="date" placeholder="MM/DD/YYYY" className='InputDate'></input></div>
            <div id = "comeoutdate1"><input type="date" placeholder="MM/DD/YYYY" className='InputDate'></input></div>
            <img id = "checkpic"src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png" alt="Document Icon"/>
            <div id = "rounded-rectangle"></div>
            <img id = "checkpic1"src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png" alt="Document Icon"/>
            <div id = "rounded-rectangle1"></div>
            <img id = "checkpic2"src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png" alt="Document Icon"/>
            <label id = "textlastlabel">label</label>
            

            
        </div>
    </>)
}