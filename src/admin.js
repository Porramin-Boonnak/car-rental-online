import { useState,useEffect} from 'react'
import './css/admin.css'
import Deletepage from './deletepage'
import Rentcar from './rentcar';
import Returncar from './returncar'
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
            <input type='submit'value='delete' onClick={()=>setpage(<Deletepage />)}/>
            <input type='submit'value='rent' onClick={()=>setpage(<Rentcar />)}/>
            <input type='submit'value='returncar' onClick={()=>setpage(<Returncar />)}/>
        </div>
    </div>
    </>)
}