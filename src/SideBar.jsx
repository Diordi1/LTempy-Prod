import { Button } from "flowbite-react";
import React ,{useState}from 'react';
import SideMainContent from "./SideMainContent";

function SideBar(props) {

    let[hidden,checkHidden]=useState(true);

    return ( <>
    <div className="hidden sm:block">
        <SideMainContent/>  
    </div >
    {
        props.check?
        <div className="flex flex-col">
        <div className="flex bg-sky-100 justify-between  items-center h-[40%] mx-auto px-6 sm:px-6 lg:px-8 max-w-7xl w-full pb-8 pt-4 ">

        <div className="md:hidden">
        <p className="text-2xl " onClick={()=>{
            props.checkif(false)
        }}>
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
</svg>

        </p>
        </div>
        <div className="logo sm:flex justify-start  ">
            <p className="text-slate-800 text-3xl font-semibold  text-start">L<span className="" style={{color:"#D38640"}}>Tempy</span></p>
    </div>

        </div>
        <SideMainContent/>
    



        </div>
:""
}
    </>);
}

export default SideBar;