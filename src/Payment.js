import './css/Payment.css'
import { useLocation } from 'react-router-dom';
export default function Payment() {
    return (<>
    <div id='mainpagePayment'>
        <img id='carpicturesPayment' src="https://w7.pngwing.com/pngs/471/300/png-transparent-rolls-royce-hd-logo-thumbnail.png"/>
        <span id='textboxPayment'>
            <label id='pricePayment'> /day</label>
            <label id='receivePayment'>สถานที่รับ </label>
            <label id='returnPayment'>สถานที่คืน </label>
        </span>
        <label id='locationPayment'>location rent car </label>
        <label id='textstartPayment'>Start</label>
        <input
            type="datetime-local"
            id='startPayment'
             />
        <label id='textendPayment'>End</label>
        <input
            type="datetime-local"
            id='endPayment'
             />

             <img id = "imgscan"src = "https://w7.pngwing.com/pngs/471/300/png-transparent-rolls-royce-hd-logo-thumbnail.png"/>
             <div id = "pricepayment">
             <label> test </label>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            <label>all price</label>
            <label id = "allprice">69420</label>
             </div>
        <input id='BookingPayment' type="button" value="Booking" />
        <div id='spacePayment'></div>

    </div>
    </>)
}