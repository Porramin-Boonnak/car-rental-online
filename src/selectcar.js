import './css/selectcar.css'
import { useLocation } from 'react-router-dom';
export default function Selectcar() {
    const location = useLocation();
    const { item } = location.state;
    return (<>
    <div id='mainpage'>
        <img id='carpictures' src={item.img}/>
        <span id='textbox'>
            <label id='price'>{item.price} /day</label>
            <label id='receive'>สถานที่รับ {item.location}</label>
            <label id='return'>สถานที่คืน {item.location}</label>
        </span>
        <label id='detail' >ข้อมูลโดยระเอียด {item.detail}</label>
        <img id='logo' src='https://w7.pngwing.com/pngs/471/300/png-transparent-rolls-royce-hd-logo-thumbnail.png'/>
        <label id='location'>location rent car {item.location}</label>
        <label id='textstart'>Start</label>
        <input
            type="datetime-local"
            id='start'
             />
        <label id='textend'>End</label>
        <input
            type="datetime-local"
            id='end'
             />
        <input id='Booking' type="button" value="Booking" />
        <div id='space'></div>

    </div>
    </>)
}