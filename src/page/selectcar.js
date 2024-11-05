import { useState } from 'react';
import '../css/selectcar.css'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Selectcar() {
    const navigate = useNavigate();
    const location = useLocation();
    const { item } = location.state;
    const {date_start} = location.state;
    const {date_end} = location.state;
    const [locationreturn,setlocationreturn] = useState();
    function formatDate(dateString) {
        const date = new Date(dateString);
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
        const dayOfWeek = days[date.getDay()]; 
        const day = date.getDate(); 
        const month = months[date.getMonth()]; 
        const year = date.getFullYear(); 
    
        return `${dayOfWeek} ${day} ${month} ${year}`;
    }
    const hendleclick=()=>{
        if (locationreturn !== undefined) {
            navigate('/Payment', { state: { item: item,locationreturn:locationreturn,date_start:date_start,date_end:date_end } });
        } else {
            alert("Please select return location.");
        }
    }
    const hendlechange=(event)=>{
        setlocationreturn(event.target.value)
    }
    return (<>
    <div id='mainpage'>
        <img id='carpictures' src={item.img}/>
        <span id='textbox'>
            <label id='price'>{item.price} /day</label>
            <label id='receive'>สถานที่รับ </label>
            <label id='receivelocation'>{item.location}</label>
            <label id='return'>สถานที่คืน </label>
            <select id="locationselectcar" onChange={hendlechange}>
            <option value="empty">--Please choose a location--</option>
            <option value="bangkok">Bangkok</option>
            <option value="chiang Mai">Chiang Mai</option>
            <option value="chonburi">Chonburi</option>
            <option value="phuket">Phuket</option>
            <option value="ubon Ratchathani">Ubon Ratchathani</option>
            <option value="songkhla">Songkhla</option>
        </select>
        </span>
        <label id='detail' >ข้อมูลโดยระเอียด {item.detail}</label>
        <img id='logo' src='https://w7.pngwing.com/pngs/471/300/png-transparent-rolls-royce-hd-logo-thumbnail.png'/>
        <label id='location'>location rent car {item.location}</label>
        <div id='datebox'>
            <label id='textstart'>Start</label>
            <label id='start'>{formatDate(date_start)}</label>
            <label id='textend'>End</label>
            <label id='end'>{formatDate(date_end)}</label>
        </div>
        <input id='Booking' type="button" value="Booking" onClick={hendleclick}/>
        <div id='space'></div>

    </div>
    </>)
}