import SideMainContent from "./SideMainContent";

function SideMainDest() {
    return (  <>
        <div className="side-nav  w-[100%] sm:w-[20%]  bg-sky-100 hidden sm:block "  >
    
        
    <div className="md:flex flex-col items-center " >

    <div className="logo sm:flex justify-start hidden ">
            <p className="text-slate-800 text-3xl font-semibold mb-6 text-start">L<span className="" style={{color:"#D38640"}}>Tempy</span></p>
    </div>


    <div className="btn flex flex-col items-center sm:w-full gap-5  mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-[70%]  ">
        <button className="flex justify-start items-center bg-slate-700 text-white p-2 w-full sm:text-sm text-xl  rounded-lg gap-4"><svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
</svg> Home</button>



        <button className="flex justify-start items-center  bg-white p-2 w-full text-xl sm:text-sm   rounded-lg gap-4"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/>
</svg>

 Inbox</button>



        <button className="flex justify-start items-center  bg-white p-2 w-full sm:text-sm text-xl  rounded-lg gap-4"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"/>
</svg>
 Class</button>
        <button className="flex justify-start items-center  bg-white p-2 w-full sm:text-sm text-xl  rounded-lg gap-4"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v15a1 1 0 0 0 1 1h15M8 16l2.5-5.5 3 3L17.273 7 20 9.667"/>
</svg>
 My Status <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Pro</span></button>
        <button className="flex justify-start items-center  bg-white p-2 w-full sm:text-sm text-xl  rounded-lg gap-4"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-width="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"/>
</svg>
 Reviews <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Pro</span></button>
        <button className="flex justify-start items-center  bg-white p-2 w-full sm:text-sm text-xl  rounded-lg gap-4"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
</svg>
 My Accounts </button>


     {/* premium */}

    <div className="premium p-2 bg-yellow-100 flex flex-col gap-7 rounded-lg mb-6">
        <img className="h-30 w-30   " src="/premium.png" alt="premi"></img>
        <div className="content flex flex-col items-center justify-center">
            <p className="text-base font-bold">Get Premium Now!</p>
            <p className="text-gray-400 text-xs text-center mt-2">Explore our new features by subscribing our package</p>

        <div className="premi-sub mt-4">
            <button className="bg-orange-400 text-white p-2 rounded px-6">Subscribe</button>
        </div>
        </div>
    </div>


    </div>


    </div>
</div>

        </>);
}

export default SideMainDest;