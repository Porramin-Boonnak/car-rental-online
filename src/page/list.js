import '../css/list.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Item=({props,start,end})=>{
    const navigate = useNavigate();
    const selectcar = () => {
        navigate('/selectcar', { state: { item: props,date_start:start,date_end:end } });
      };
    return (<div id='item' onClick={() => {
        if (start != undefined && end != undefined) {
            selectcar();
        } else {
            alert("Please select start and end dates.");
        }}}>
        <img src={props.img} id='carpictureslist'/><br/>
        Name: {props.name}<br/>
        Price: {props.price}<br/>
        location: {props.location}<br/>
    </div>)
}
export default function List(){
    const [products,setProducts] = useState([])
    const [location,setlocation] = useState("empty");
    const [types,settypes] = useState("empty");
    const [start,setstart] = useState();
    const [end,setend] = useState();
    const [rent_car,setrent_car] = useState([])
    const url = "https://obscure-orbit-j67gj67vx4g3pqq9-5000.app.github.dev";
    useEffect(()=>{
        axios.get(url+'/api/car').then(response=>{
            setProducts(response.data);
        }).catch(error=>{
            console.log("error");
        });
        axios.get(url+'/api/rentcar').then(response=>{
            setrent_car(response.data);
        }).catch(error=>{
            console.log("error");
        });
        return ()=>{

        }
    },[])
    function checkDateOverlap(startDate1, endDate1, startDate2, endDate2) {
    return startDate1 < endDate2 && startDate2 < endDate1;
}
var productlist = products
.filter(product => 
  (product.location === location || location === "empty") &&
  (product.type === types || types === "empty")
)
.filter(product => {
  const isRented = rent_car
    .filter(rent => rent.status === "rent" && rent.rent_car === product.id.toString())
    .some(rent => {
      const rentalStart = new Date(rent.date_start);
      const rentalEnd = new Date(rent.date_end);
      const selectedStart = new Date(start);
      const selectedEnd = new Date(end);
      return checkDateOverlap(rentalStart, rentalEnd, selectedStart, selectedEnd);
    });
  return !isRented;
})
.map(product => (
  <Item 
    props={product} 
    start={start} 
    end={end} 
  />
));

    const hendlechange=(event)=>{
        setlocation(event.target.value);
    }
    const hendleclick=(event)=>{
        settypes(event.target.value);
    }
    const date_start=(event)=>{
        setstart(event.target.value)
    }
    const date_end=(event)=>{
        setend(event.target.value)
    }
    return (<>
    <div id='main'>
        
        <input
            type="date"
            id='startlist'
            onChange={date_start}/>
        <label id='textstartlist'>Start</label>
        <input
            type="date"
            id='endlist'
            onChange={date_end}/>
        <label id='textendlist'>End</label>
        <select id="locationlist" onChange={hendlechange}>
            <option value="empty">--Please choose a location--</option>
            <option value="bangkok">Bangkok</option>
            <option value="chiang Mai">Chiang Mai</option>
            <option value="chonburi">Chonburi</option>
            <option value="phuket">Phuket</option>
            <option value="ubon Ratchathani">Ubon Ratchathani</option>
            <option value="songkhla">Songkhla</option>
        </select>
        <div id='sidebar'>
            <button value="empty" id='buttoncar'onClick={hendleclick}>All Model</button>
            <button value="PersonalCars" id='buttoncar' onClick={hendleclick}>
                <img src='https://www.toyota.co.th/media/product/car_types/passenger.webp'/>
                Personal Cars 
            </button>
            <button  value="SUV" id='buttoncar' onClick={hendleclick}>
                <img src='https://www.toyota.co.th/media/product/car_types/suv.webp'/>
                SUV&PPV
            </button>
            <button  value="MPV" id='buttoncar' onClick={hendleclick}>
                <img src='https://www.toyota.co.th/media/product/car_types/mpv.webp'/>
                MPV
            </button>
            <button  value="Commercial Cars" id='buttoncar' onClick={hendleclick}>
                <img src='https://www.toyota.co.th/media/product/car_types/commercial.webp'/>
                Commercial Cars
            </button>
            
        </div>
        <div id='content'>
            {productlist}
        </div>
    </div>
    </>)
}