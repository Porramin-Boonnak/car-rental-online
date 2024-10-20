import './css/deletepage.css'
import { useEffect, useState,useRef } from 'react';
import axios from 'axios';
const url = "http://localhost:5000";
const Item=({ id, img, name, price, location,ondelete,seat,detail,type,onupdate })=>{
    const Handleclick=(id)=>{
        axios.delete(url+'/api/car/'+id).then(response=>{
            ondelete(response.data);
        })
    }
    const updateitem=()=>{
        onupdate({ id, img, name, price, location,seat,detail,type });
    }
    return (<div id='deleteitem' onClick={updateitem}>
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
    var id_ref;
    const img_ref = useRef(null);
    const name_ref = useRef(null);
    const price_ref = useRef(null);
    const location_ref = useRef(null);
    const seat_ref = useRef(null);
    const detail_ref = useRef(null);
    const type_ref = useRef(null);
    const update=({id,img, name, price, location,seat,detail,type })=>{
        id_ref=id;
        img_ref.current.value=img;
        name_ref.current.value=name;
        price_ref.current.value=price;
        location_ref.current.value=location;
        seat_ref.current.value=seat;
        detail_ref.current.value=detail;
        type_ref.current.value=type;
    }
    const id = useRef(null);
    const Handleclick=()=>{
        if(!rent_car.map(item => item.rent_car).includes(id.current.value)||!rent_car.map(item => item.status).includes("rent"))
        {
            axios.delete(url+'/api/car/'+id.current.value).then(response=>{
                setProducts(response.data);
            })
        }
        else{
            alert("This id is rent");
        }
    }
    const updateclick=()=>{
        const data ={
            img:img_ref.current.value,
            name:name_ref.current.value,
            price:price_ref.current.value,
            location:location_ref.current.value,
            seat:seat_ref.current.value,
            detail:detail_ref.current.value,
            type:type_ref.current.value
        }
        axios.put(url+'/api/car/'+id_ref,data).then(response=>{
                setProducts(response.data)
        }).catch(error=>{
            console.log("error");
        });
    }
    var productlist=products.filter(item => !rent_car.some(rent => rent.rent_car == item.id&&rent.status==="rent")).map(item => <Item {...item} ondelete={updatedata} onupdate={update}/>);
    return (<>
    <div id='deletepage'>
        <div id='deletesearch'>
            <input type='text' placeholder='name'ref={name_ref}/>
            <input type='number' placeholder='price'ref={price_ref}/>
            <input type='number' placeholder='seat'ref={seat_ref}/>
            <input type='text' placeholder='detail'ref={detail_ref}/>
            <input type='text' placeholder='type'ref={type_ref}/>
            <input type='text' placeholder='location'ref={location_ref}/>
            <input type='text' placeholder='img'ref={img_ref}/>
            <input type='text' placeholder='delete id'ref={id}/>
            <input type='submit' value='update' onClick={updateclick}/>
            <input type='submit' value='delete' onClick={Handleclick}/>
        </div>
        <div id='deletecontent'>
            {productlist}
        </div>
    </div>
    </>)
}