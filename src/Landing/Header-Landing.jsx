import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
function HeaderLanding() {
    let [srop,setsrop]=useState(true);

    let dev=(event)=>{
        toast.error("Options will be available soon",{duration:5000})
        event.preventDefault();
    }
    return ( <div className="nav sm:h-[15%] h-[10%] py-7 items-center">
        <Toaster />
        <div>
            <div className="flex justify-between px-14">


        <div className="flex gap-9 items-center sm:w-[70%]">

        <p className="sm:text-4xl text-4xl font-semibold">L<span>Tempy</span></p>
        <ul className="sm:flex gap-6 hidden ">
            <li onClick={dev} className="text-base border-b-2 cursor-pointer">Home</li>
            <li onClick={dev} className="text-base cursor-pointer">Solutions</li>
            <li onClick={dev} className="text-base cursor-pointer">Pricing</li>
            <li onClick={dev} className="text-base cursor-pointer">Developers</li>

        </ul>
        </div>
        <div className="sm:flex gap-8 justify-end sm:w-[30%] hidden">
            <button onClick={dev} className="border-2 px-6 bg-transparent p-3 rounded-full text-base hover:bg-white hover:text-slate-900">Log in</button>
            <button onClick={dev} className="border-2 px-6 bg-white p-3 rounded-full text-slate-900 text-base font-semibold">Deploy App</button>
        </div>
        <div className="flex justify-end">

        <p className="text-4xl  sm:hidden" onClick={()=>{
            setsrop(!srop);

        }}>&#8801;</p>
        <div className='sm:hidden absolute z-20 bg-gray-100 top-0 right-0 rounded-lg w-[60%] mt-[19%] me-[14%] p-10 text-black ' hidden={srop}>
            <ul className=''>
                <li className='text-2xl font-bold mb-3 text-center flex gap-3 items-center border-b-2 pb-2 border-black'><svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
</svg>
 Profile</li>
                <li className='text-2xl font-bold mb-3 text-center flex gap-3 items-center'><svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
</svg>
 Login</li>
                <li className='text-2xl font-bold text-center flex gap-3 items-center'><svg class="w-8 h-8   text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.737 8.737a21.49 21.49 0 0 1 3.308-2.724m0 0c3.063-2.026 5.99-2.641 7.331-1.3 1.827 1.828.026 6.591-4.023 10.64-4.049 4.049-8.812 5.85-10.64 4.023-1.33-1.33-.736-4.218 1.249-7.253m6.083-6.11c-3.063-2.026-5.99-2.641-7.331-1.3-1.827 1.828-.026 6.591 4.023 10.64m3.308-9.34a21.497 21.497 0 0 1 3.308 2.724m2.775 3.386c1.985 3.035 2.579 5.923 1.248 7.253-1.336 1.337-4.245.732-7.295-1.275M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
</svg>
 Signup</li>
            </ul>
        </div>
        </div>
            </div>
        </div>
    </div>);
}

export default HeaderLanding;