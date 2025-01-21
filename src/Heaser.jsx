import React,{useState} from 'react';
import SideBar from './SideBar';

function Heaser() {
    let [side,setside]=useState(false);
    let[tab,settab]=useState(true);
    let sidecheck=()=>{
        setside(prev=>
            !prev
            

        )
        settab(prev=>!prev) 
        
    }
    return (<>
       
            <SideBar checkif={setside} check={side}/>
            {
        !side?
        
        <div className="container flex items-center justify-between py-3 px-4 bg-sky-100 mx-auto  sm:px-6 lg:px-8 max-w-7xl w-full" >
        <div className="flex gap-3">

        <div className="text-3xl" onClick={sidecheck}>&#8801;</div>
         <div className="logo flex justify-start items-center">
            <p className="text-slate-800 text-3xl font-semibold  text-start">L<span className="" style={{color:"#D38640"}}>Tempy</span></p>
    </div>
        </div>
    <div className="imageprof">
            <img src="profile.png" className="h-8 w-8"></img>
            </div>
    </div>
    :""}
    </> 
     );
}

export default Heaser;