function HeaderBottom() {
    return ( <div className="h-[100%] bg-slate-900 w-full text-white">
            <div className="h-full w-full flex">
                <div className="h-full w-[62%] ">
                    <div className="h-[100%] grid w-full" style={{gridTemplateRows:"repeat(6,1fr)",gridTemplateColumns:"repeat(25,1fr)"}}>
                        <div className="h-[100%] w-full border-[30px] border-purple-600 rounded-e-3xl rounded-t-none border-t-0 border-s-0" style={{gridColumnStart:"26",gridColumnEnd:"1",gridRowStart:"1",gridRowEnd:"3",alignSelf:"center"}}>

                        </div>
                        <div className="h-[100%] w-full border-[30px] border-yellow-300   rounded-e-3xl rounded-t-none      border-t-0 border-s-0 " style={{gridColumnStart:"18",gridColumnEnd:"1",gridRowStart:"5",gridRowEnd:"1",alignSelf:"center"}}>

                        </div>
                        
                        <div className="h-[100%] w-full border-[30px] border-fuchsia-600 rounded-e-3xl rounded-t-none border-t-0 border-s-0" style={{gridColumnStart:"22   ",gridColumnEnd:"1",gridRowStart:"1",gridRowEnd:"4",alignSelf:"center"}}>

                        </div>
                        <div className="h-[80%] w-fit" style={{gridColumnEnd:"5" ,gridColumnStart:"24",gridRowStart:"8",gridRowEnd:"2"}}>
                            <img className="h-[100%] w-[100%] object-contain" src="phone.png"></img>
                        </div>
                    </div>
                </div>
                <div className="h-full w-[38%] flex justify-center">
                    <div className="flex flex-col px-6 gap-6 justify-center">
                        <p className="text-3xl  font-semibold w-[80%]">Build it Here Deploy Everywhere</p>
                        <p className="w-[80%] text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet deserunt perferendis atque ipsa molestiae magnam. Ipsam error vitae laboriosam facere, esse quo corrupti dignissimos quisquam eius consectetur alias nulla aut.</p>
                        <div className=" flex gap-6 items-center">
            <button  className="border-2 px-6 bg-white p-3 rounded-full text-slate-900 text-base font-semibold ">Publish App</button>
            <button  className="flex gap-2" >
            <svg class="w-6 h-6 text-white border-2 border-white rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 18V6l8 6-8 6Z"/>
</svg>

                View Demo</button>
        </div>
                    </div>
                </div>

            </div>
    </div> );
}

export default HeaderBottom;