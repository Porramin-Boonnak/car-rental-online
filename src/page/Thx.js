import '../css/Thx.css'
import { useLocation,useNavigate } from 'react-router-dom';
export default function Thx() {
    const location = useLocation();
    const navigate = useNavigate();
    const { item } = location.state;
    const hendleclick=()=>{
        navigate('/');
    }
    return (<>
    <div id='mainpageThx'>
        <div id = "carThx">
            <img id = "carpicThx"src = {item.img}/>
        </div>
        
        <span id = "B">Success Booking</span>
        <span id = "S">♥Have a nice trip♥</span>

        <button id = "BookingThx" onClick={hendleclick}>Home</button>


    </div>
    </>)
}