import './css/selectcar.css'
export default function home() {
    return (<>
    <div id='mainpage'>
        <img id='carpictures' src='https://images3.alphacoders.com/134/1342988.png'/>
        <span id='textbox'>
            <label id='price'>10,000 /day</label>
            <label id='receive'>สถานที่รับ</label>
            <label id='return'>สถานที่คืน</label>
        </span>
        <label id='detail' >ข้อมูลโดยระเอียด</label>
        <img id='logo' src='https://w7.pngwing.com/pngs/471/300/png-transparent-rolls-royce-hd-logo-thumbnail.png'/>
        <label id='location'>location rent car</label>
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