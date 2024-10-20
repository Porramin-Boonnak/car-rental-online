import './css/deletepage.css'
import { useEffect, useState,useRef } from 'react';
import axios from 'axios';
const url = "http://localhost:5000";
const Item=({ id, img, name, price, location,ondelete })=>{
    const Handleclick=(id)=>{
        axios.delete(url+'/api/car/'+id).then(response=>{
            ondelete(response.data);
        })
    }
    return (<div id='deleteitem' >
        <img src={img} id='carpictureslist' alt='car'/><br/>
        id: {id} <br/>
        Name: {name}<br/>
        Price: {price}<br/>
        location: {location}<br/>
        <button onClick={()=>Handleclick(id)}>REMOVE</button>
    </div>)
}
export default function Deletepage(){
    const [products,setProducts] = useState([])
    const [rent_car,setrent_car] = useState([])
    useEffect(()=>{
        axios.get(url+'/api/car').then(response=>{
            setProducts(response.data);
        }).catch(error=>{
            console.log("error");
        });

        axios.get("http://localhost:5000/api/rentcar").then(response=>{
            setrent_car(response.data);
        }).catch(error=>{
            console.log("error");
        });
        return ()=>{

        }
    },[])
    const updatedata=(newdata)=>{
        setProducts(newdata);
    }
    const id = useRef(null);
    const Handleclick=()=>{
        if(!rent_car.map(item => item.rent_car).includes(id.current.value)||rent_car.map(item => item.status).includes("return"))
        {
            axios.delete(url+'/api/car/'+id.current.value).then(response=>{
                setProducts(response.data);
            })
        }
        else{
            alert("This id is rent");
        }
    }
    var productlist=products.filter(item => !rent_car.some(rent => rent.rent_car == item.id&&rent.status==="rent")).map(item => <Item {...item} ondelete={updatedata}/>);
    return (<>
    <div id='deletepage'>
        <div id='deletesearch'>
            <input type='text' placeholder='delete id'ref={id}/>
            <input type='submit' value='delete' onClick={Handleclick}/>
        </div>
        <div id='deletecontent'>
            {productlist}
        </div>
    </div>
    </>)
}