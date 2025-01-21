import { useState } from 'react'
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
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' sm:hidden'>

      <Heaser/>
    </div>
    <div className='flex  mx-auto '>
      {/* < className='hidden sm:block'> */}

      
    

      <SideMainDest/>
    

      
      
      <MainBar/>
      {/* <RightSideBar/> */}
      
    </div>
    </>
  )
}

export default App
