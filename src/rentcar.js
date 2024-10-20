import './css/rentcar.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
const url = "http://localhost:5000";
const Item=({ id, img, name, price, location,isCustomer})=>{
    return (<div id='rentcaritem' >
        <img src={img} id='carpictureslist' alt='car'/><br/>
        id: {id} <br/>
        Name: {name}<br/>
        Price: {price}<br/>
        location: {location}<br/>
        customer: {isCustomer}<br/>
    </div>)
}
export default function Rentcar(){
    const [products,setProducts] = useState([])
    const [rent_car,setrent_car] = useState([])
    useEffect(()=>{
        axios.get(url+'/api/car').then(response=>{
            setProducts(response.data);
        }).catch(error=>{
            console.log("error");
        });

        axios.get(url+'/api/rentcar').then(response=>{
            setrent_car(response.data);
            console.log(response.data)
        }).catch(error=>{
            console.log("error");
        });
        return ()=>{

        }
    },[])
    var productlist = rent_car.map(rent => {
        const car = products.find(product => product.id === rent.rent_car);
        return <Item {...car} isCustomer={rent.id_customer}/>;
      });
    return (<>
    <div id='rentcarpage'>
        <div id='rentcarcontent'>
            {productlist}
        </div>
    </div>
    </>)
}