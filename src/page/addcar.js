import axios from "axios";
import { useRef } from "react"
export default function Addcar(){
    const name=useRef();
    const price=useRef();
    const seat=useRef();
    const detail=useRef();
    const type=useRef();
    const location=useRef();
    const img=useRef();
    const url = "http://52.187.25.101:5000";
    const handleclick=()=>{
        const data = {
            name:name.current.value,
            price:price.current.value,
            seat:seat.current.value,
            detail:detail.current.value,
            type:type.current.value,
            location:location.current.value,
            img:img.current.value
        }
        axios.post(url+'/api/car',data).then(()=>{
            alert("Successfully")
        })
    }
    return(<>
        <div id='boxinputaddcar'>
            <input type="text" placeholder="name" ref={name}/><br/>
            <input type="number" placeholder="price" ref={price}/><br/>
            <input type="number" placeholder="seat" ref={seat}/><br/>
            <input type="text" placeholder="detail" ref={detail}/><br/>
            <input type="text" placeholder="type" ref={type}/><br/>
            <input type="text" placeholder="location" ref={location}/><br/>
            <input type="text" placeholder="img" ref={img}/><br/>
            <input type="submit" value="ADD" onClick={handleclick}/>
        </div>
    </>)
}