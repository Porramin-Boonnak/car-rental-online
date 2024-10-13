import './css/list.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
const Item=(props)=>{
    return (<div>
        <img src={props.img} id='carpictureslist'/><br/>
        id: {props.id}<br/>
        Name: {props.name}<br/>
        Price: {props.price}<br/>
        location: {props.location}<br/>
    </div>)
}
export default function List(){
    const [products,setProducts] = useState([])
    const [location,setlocation] = useState("empty");
    const [types,settypes] = useState("empty");
    const url = "http://localhost:5000";
    useEffect(()=>{
        axios.get(url+'/api/car').then(response=>{
            setProducts(response.data);
        }).catch(error=>{
            console.log("error");
        });
        return ()=>{

        }
    },[])
    var productlist=products.filter(item => (item.location === location || location === "empty") && (item.type === types || types === "empty")).map(item => <Item {...item} />);
    const hendlechange=(event)=>{
        setlocation(event.target.value);
    }
    const hendleclick=(event)=>{
        settypes(event.target.value);
    }
    return (<>
    <div id='main'>
        <label id='textstartlist'>Start</label>
            <input
                type="datetime-local"
                id='startlist'
                />
            <label id='textendlist'>End</label>
            <input
                type="datetime-local"
                id='endlist'
                />
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
            <button value="empty" onClick={hendleclick}>Reset</button>
            <button value="3 door" onClick={hendleclick}>รถ3ประตู</button>
            <button  value="4 door" onClick={hendleclick}>รถ4ประตู</button>
            <button  value="5 door" onClick={hendleclick}>รถ5ประตู</button>
            
        </div>
        <div id='content'>
            {productlist}
        </div>
    </div>
    </>)
}