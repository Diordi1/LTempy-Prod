import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'flowbite-react'
import SideBar from './SideBar'
import MainBar from './Main/MainBar'
import RightSideBar from './RightSideBar'
import Heaser from './Heaser'
import SideMainContent from './SideMainContent'
import SideMainDest from './SideMainDes'
import axios from 'axios'
import EmailEditor from './profile/TempChecker'
import Home from './Landing/Home'
function App() {
  const [count, setCount] = useState();

  useEffect(()=>{
    axios.get("http://localhost:8080/getupload/cfb85cd3-2bf8-4e53-8921-28f9981ccc74")
    .then(res=>{
      console.log(res.data)
      setCount(eval(res.data))

    }).catch(err=>{
      console.log(err)
    })
  })
  return (
    <div className='h-[100%]'>
    {/* {count}
     */}
     {/* <EmailEditor/> */}
    
     <Home/>
    <div className=' sm:hidden'>

      {/* <Heaser/> */}
     
    </div>
    <div className='flex  mx-auto '>
      {/* < className='hidden sm:block'> */}

      
    

      {/* <SideMainDest/> */}
    

      
      
      {/* <MainBar/> */}
      {/* <RightSideBar/> */}
      
    </div>
    </div>
  )
}

export default App
