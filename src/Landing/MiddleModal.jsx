function MiddleModal() {
    return ( <div className="h-[100%] bg-slate-900 w-full">
        <div className="w-full h-[100%]">
          
            <div className="flex h-[100%] w-full">
                <div className=" w-[40%] h-full px-6 flex gap-8 flex-col justify-center">
                <div className="Lap w-[80%] flex flex-col">
                        <p className="text-3xl font-semibold">Stuck Where To Start ?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, totam!</p>
                </div>
                <div className="Lap flex w-[80%] flex-col">
                        <p className="text-3xl font-semibold">We got Your Tech Solution Covered</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, totam!</p>
                </div>
                </div>
                <div className="w-[60%] h-full">
                    <div className=" h-full grid relative" style={{gridTemplateColumns:"repeat(6,1fr)",gridTemplateRows:"repeat(5,1fr)"}}>
                        <div className="h-[100%] w-full  border-[30px] border-t-0 border-b-0 border-e-0 border-yellow-300 " style={{gridRowStart:"6",gridRowEnd:"1",gridColumnStart:"1",gridColumnEnd:"1",alignSelf:"center"}}>
                            
                        </div>
                        <div className="h-[100%] w-full  border-[30px] border-t-0 border-b-0 border-e-0 border-fuchsia-600 " style={{gridRowStart:"6",gridRowEnd:"1",gridColumnStart:"2",gridColumnEnd:"2",alignSelf:"center"}}>
                            
                        </div>
                        <div className="h-[100%] w-full  border-[30px] border-t-0 border-b-0 border-e-0 border-purple-600 " style={{gridRowStart:"6",gridRowEnd:"1",gridColumnStart:"3",gridColumnEnd:"3",alignSelf:"center"}}>
                            
                        </div>
                        <div className="h-[80%] w-fit " style={{gridRowStart:"1", gridRowEnd:"6",gridColumnStart:"1",gridColumnEnd:"6",alignSelf:"center"}}>
                            <img className=" h-[100%] object-contain " src="lap.png"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> );
}

export default MiddleModal;