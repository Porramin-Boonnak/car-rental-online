import '../css/returncar.css'
import { useEffect, useState,useRef } from 'react';
import axios from 'axios';
const url = "http://localhost:5000";
const Item=({ id, img, name, price, location,isCustomer,returnlocation,update,isshop})=>{
    const rent_late = useRef("");
    const hendleclick=(shop)=>{
        const data = {
            status : "return",
            rent_late : rent_late.current.value,
            returnlocation : returnlocation,
            car:id
        }
        axios.put(url+'/api/rentcar/'+shop,data).then(response=>{
            update(response.data);
        }).catch(error=>{
            console.log("error");
        });
    }
    return (<div id='rentcaritem' >
        <img src={img} id='carpictureslist' alt='car'/><br/>
        id: {id} <br/>
        Name: {name}<br/>
        Price: {price}<br/>
        location: {location}<br/>
        return_location: {returnlocation}<br/>
        customer: {isCustomer}<br/>
        <input type='number' placeholder='rent_late' ref={rent_late}/><br/>
        <input type='submit' value='returncar' onClick={()=>hendleclick(isshop)}/>
    </div>)
}
export default function Returncar(){
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
        }).catch(error=>{
            console.log("error");
        });
        return ()=>{

        }
    },[])
    const updatedata=(newdata)=>{
        setrent_car(newdata);
    }
    var productlist = rent_car
  .filter(rent => rent.status === "rent")
  .map(rent => {
    const car = products.find(product => product.id == rent.rent_car);
    return (
      <Item 
        {...car} 
        isshop={rent.id}
        isCustomer={rent.id_customer} 
        returnlocation={rent.return_location}
        update={updatedata}
      />
    );
  });
    return (<>
    <div id='rentcarpage'>
        <div id='rentcarcontent'>
            {productlist}
        </div>
    </div>
    </>)
}