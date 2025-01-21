import { useEffect } from 'react';
// import { Line } from 'react-chartjs-2';
import Check1 from './chart1';
import Temp from './Temp';
import { LineChart,Legend, Line, CartesianGrid, XAxis, YAxis,Bar,BarChart,Tooltip, ResponsiveContainer } from 'recharts';
// import { Tooltip } from 'chart.js';
function Chart() {
  
  const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},{name: 'Page A', uv: 300, pv: 2400, amt: 2400},{name: 'Page A', uv: 300, pv: 2400, amt: 2400},{name: 'Page A', uv: 300, pv: 2400, amt: 2400},{name: 'Page A', uv: 300, pv: 2400, amt: 2400},{name: 'Page A', uv: 300, pv: 2400, amt: 2400},{name: 'Page A', uv: 300, pv: 2400, amt: 2400}];
  return(
    <>
    
    <div className='mt-14 mb-4'><h1 className='font-bold text-xl text-start ms-20'>Course Overview</h1></div>
    <div className='sm:h-[40%] sm:w-[100%] w-full h-[25%] sm:p-3 sm:mx-4'>

    <ResponsiveContainer width="95%" height="80%">  
   <BarChart width={40} height={50} data={data}>
         
    <CartesianGrid strokeDasharray="3 3"/>
    <XAxis dataKey={"name"}/>
    <YAxis dataKey={"pv"}/>
    <Tooltip/>
    <Legend />
    <Bar dataKey="uv" fill='#84B99E'></Bar>
    <Bar dataKey="pv" fill='#E69A54'></Bar>
   </BarChart>
   </ResponsiveContainer>
    </ div>
{/* <Check1/> */}
{/* <Temp/> */}
    
    </>
  )
}

export default Chart;