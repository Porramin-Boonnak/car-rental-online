import { useState,useEffect} from 'react'
import './css/admin.css'
import Deletepage from './deletepage'
export default function Admin(){
    const [page,setpage] = useState();
    useEffect(()=>{
        setpage(<Deletepage />);
    },[])
    return (<>
    <div id='adminpage'>
        <div id='admincontent'>
            {page}
        </div>
        <div id='sidebaradmin'>
            
        </div>
    </div>
    </>)
}