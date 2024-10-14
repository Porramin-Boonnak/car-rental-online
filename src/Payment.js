import './css/Payment.css'
import { useLocation,useNavigate } from 'react-router-dom';
import Img from './Tag.jpg'
export default function Payment() {
    const location = useLocation();
    const navigate = useNavigate();
    const { item } = location.state;
    const {locationreturn} = location.state;
    const {date_start} = location.state;
    const {date_end} = location.state;
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
        navigate('/Thx', { state: { item: item} });
    }
    return (<>
    <div id='mainpagePayment'>
        <img id='carpicturesPayment' src={item.img}/>
        <span id='textboxPayment'>
            <label id='pricePayments'>{item.price} /day</label>
            <label id='receivePayment'>สถานที่รับ </label>
            <label id='receivePayments'>{item.location} </label>
            <label id='returnPayment'>สถานที่คืน </label>
            <label id='returnlocation'>{locationreturn} </label>
        </span>
        <label id='locationPayment'>location rent car {item.location}</label>
        <div id='dateboxPayment'>
            <label id='textstart'>Start</label>
            <label id='start'>{formatDate(date_start)}</label>
            <label id='textend'>End</label>
            <label id='end'>{formatDate(date_end)}</label>
        </div>

             <img id = "imgscan"src = {Img}/>
             <div id = "pricepaymentss">
             <label> ยอดที่ต้องจ่าย </label>
                <ul>
                    <li>None</li>
                </ul>
            <label>all price</label>
            <label id = "allprice">{item.price}</label>
             </div>
        <input id='BookingPayment' type="button" value="Booking" onClick={hendleclick}/>
        <div id='spacePayment'></div>

    </div>
    </>)
}