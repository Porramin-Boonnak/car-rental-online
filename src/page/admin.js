import { useState,useEffect} from 'react'
import '../css/admin.css'
import Deletepage from './deletepage'
import Returncar from './returncar'
import Addcar from './addcar'
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
            <input type='submit'value='returncar' onClick={()=>setpage(<Returncar />)}/>
            <input type='submit'value='Addcar' onClick={()=>setpage(<Addcar />)}/>
        </div>
    </div>
    </>)
}