import './css/admin.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
const url = "http://localhost:5000";
const Item=({ id, img, name, price, location,ondelete })=>{
    const Handleclick=(id)=>{
        axios.delete(url+'/api/car/'+id).then(response=>{
            ondelete(response.data);
        })
    }
    return (<div id='adminitem' >
        <img src={img} id='carpictureslist' alt='car'/><br/>
        id: {id} <br/>
        Name: {name}<br/>
        Price: {price}<br/>
        location: {location}<br/>
        <button onClick={()=>Handleclick(id)}>REMOVE</button>
    </div>)
}
export default function Admin(){
    const [products,setProducts] = useState([])
    useEffect(()=>{
        axios.get(url+'/api/car').then(response=>{
            setProducts(response.data);
        }).catch(error=>{
            console.log("error");
        });
        return ()=>{

        }
    },[])
    const updatedata=(newdata)=>{
        setProducts(newdata);
    }
    var productlist=products.map(item => <Item {...item} ondelete={updatedata}/>);
    return (<>
    <div id='adminpage'>
        {productlist}
    </div>
    </>)
}