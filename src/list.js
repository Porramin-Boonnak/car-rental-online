import './css/list.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
const Item=(props)=>{
    return (<div>
        <img src={props.img} id='carpictureslist'/><br/>
        id: {props.id}<br/>
        Name: {props.name}<br/>
        Price: {props.price}<br/>
    </div>)
}
export default function List(){
    const [products,setProducts] = useState([])
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
    const productlist=products.map(item=><Item {...item}/>)
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
        <input id='locationlist' type='text' placeholder='location rent car'/>
        <div id='sidebar'>
            <label>รถ2ประตู</label>
            <label>รถ4ประตู</label>
        </div>
        <input id='Start_search' type="button" value="Start search" />
        <div id='content'>
            {productlist}
        </div>
    </div>
    </>)
}