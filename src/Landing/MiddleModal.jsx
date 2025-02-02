function MiddleModal() {
    return ( <div className="h-[100%] bg-slate-900 w-full">
        <div className="w-full h-[100%]">
          
            <div className="flex h-[100%]  sm:flex-row flex-col-reverse w-full">
                <div className=" sm:w-[40%] w-[100%] h-full px-6 flex gap-8 flex-col justify-center">
                <div className="Lap sm:w-[80%] w-[100%] flex flex-col">
                        <p className="text-3xl font-semibold my-4">Stuck Where To Start ?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, totam!</p>
                </div>
                <div className="Lap flex w-[80%] flex-col">
                        <p className="text-3xl font-semibold my-4">We got Your Tech Solution Covered</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, totam!</p>
                </div>
                </div>


                <div className="sm:w-[60%] w-[100%]   relative bottom-0 h-fit grid sm:hidden" style={{gridTemplateColumns:"repeat(9,1fr)",gridTemplateRows:"repeat(9  ,1fr)",height:"60%"}}>
            <div className="sm:border-[30px]  border-[25px] border-b-0 border-e-0 sm:border-t-0 border-t-0 sm:border-b-0 sm:border-e-0  border-yellow-300 h-full absolute w-full" style={{gridColumnStart:"10",gridColumnEnd:"3 ",gridRowStart:"10",gridRowEnd:" 1 ",alignSelf:"center",bottom:0}}>
            </div>
            <div className="sm:border-[30px]  border-[25px] border-b-0 border-e-0 sm:border-t-0 border-t-0 sm:border-b-0 sm:border-e-0  border-purple-600  h-full w-full  absolute" style={{gridColumnStart:"10",gridColumnEnd:"5",gridRowStart:"10",gridRowEnd:" 1",alignSelf:"center",bottom:0}}>
            </div>
            <div className="sm:border-[30px]  border-[25px]  border-b-0 border-e-0 sm:border-t-0 border-t-0 sm:border-b-0 sm:border-e-0  border-fuchsia-600  h-full  w-full absolute" style={{gridColumnStart:"10",gridColumnEnd:"4",gridRowStart:"10",gridRowEnd:"1",alignSelf:"center",bottom:0}}>
            </div>
            {/* <div  className="sm:shadow-2xl shadow-lg    z-10 h-[25vh]  w-fit rounded-3xl" style={{gridColumnStart:"7", gridColumnEnd:"2",gridRowStart:"8",gridRowEnd:"5    ",alignSelf:"center"}}> */}
                <img className=" h-[50vh] w-full object-contain shadow-2xl  rounded-3xl z-10"src="lap.png" style={{gridColumnStart:"8", gridColumnEnd:"1",gridRowStart:"10",gridRowEnd:"3   ",alignSelf:"center"}}></img>
            {/* </div> */}
            

           
        {/* // <p>Temper</p> */}
        </div>   




                <div className="sm:w-[60%] w-[100%] h-full hidden sm:block ">
                    <div className=" h-full grid relative" style={{gridTemplateColumns:"repeat(6,1fr)",gridTemplateRows:"repeat(5,1fr)"}}>
                        <div className="h-[100%] w-full  border-[30px] border-t-0 border-b-0 border-e-0 border-yellow-300 " style={{gridRowStart:"6",gridRowEnd:"1",gridColumnStart:"1",gridColumnEnd:"1",alignSelf:"center"}}>
                            
                        </div>
                        <div className="h-[100%] w-full  border-[30px] border-t-0 border-b-0 border-e-0 border-fuchsia-600 " style={{gridRowStart:"6",gridRowEnd:"1",gridColumnStart:"2",gridColumnEnd:"2",alignSelf:"center"}}>
                            
                        </div>
                        <div className="h-[100%] w-full  border-[30px] border-t-0 border-b-0 border-e-0 border-purple-600 " style={{gridRowStart:"6",gridRowEnd:"1",gridColumnStart:"3",gridColumnEnd:"3",alignSelf:"center"}}>
                            
                        </div>
                        <div className="h-fit w-fit " style={{gridRowStart:"1", gridRowEnd:"6",gridColumnStart:"1",gridColumnEnd:"6",alignSelf:"center"}}>
                            <img className=" h-[100%] object-contain " src="lap.png"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> );
}

export default MiddleModal;