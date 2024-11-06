import '../css/status.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Imgrent from '../4965302.png'
import Imgreturn from '../car-return.png'
export default function Status() {
    const url = "https://obscure-orbit-j67gj67vx4g3pqq9-5000.app.github.dev";
    const [rentcar,setrentcar] = useState([]);
    const [products,setProducts] = useState([])
    useEffect(()=>{

        axios.post(url+'/api/customer/status',{token : localStorage.getItem('token')}).then(response=>{
            console.log(response.data)
            setrentcar(response.data);
        }).catch(error=>{
            alert("please login ");
        });
        axios.get(url+'/api/car').then(response=>{
            setProducts(response.data);
        }).catch(error=>{
            console.log("error");
        });
    },[])

    const userstatus = rentcar.length > 0 ? rentcar[0].username : 'await';

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

    const statusList = products
    .filter(item => rentcar.some(rent => parseInt(rent.rent_car) === item.id))
    .map(item => {
        const rent = rentcar.find(rent => parseInt(rent.rent_car) === item.id);
        return (
            <>
                <img id='imgcarrent' src={item.img} alt="Car" />
                <div id='boxdetail'>
                    <label id='status_receive'>สถานที่รับ: {rent.location}</label>
                    <label id='status_return'>สถานที่คืน: {rent.return_location}</label>
                    <label id='status_start'>Start <br/>{formatDate(rent.date_start)}</label>
                    <label id='status_end'>End <br/>{formatDate(rent.date_end)}</label>
                    {rent.status === "rent" ? (
                        <>
                            <img className='img_status' src={Imgrent} style={{ backgroundColor: 'aquamarine' }}/>
                            <label id='status_label' style={{color: 'rgb(0, 196, 33)'}}>กำลังยืม</label>
                        </>
                    ) : <>
                        <img className='img_status' src={Imgreturn} style={{ backgroundColor: 'rgba(255, 0, 0, 0.554)' }}/>
                        <label id='status_label' style={{color: 'rgba(255, 0, 0, 0.554)'}}>คืนแล้ว</label>
                    </>}
        
                </div>
            </>
        );
    });
    return (<>
        <div id='mainstaus'>
            <div id='rentcarlist'>
                {statusList}
            </div>
        </div>
    </>)
}