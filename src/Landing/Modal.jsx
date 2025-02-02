import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function Modal() {
    let temp1=0;
    useEffect(()=>{
        toast.success("Would be Online very Soon !!",{duration:5000})
        
        // toast.success("We are under Development",{duration:5000})
    },[temp1])
    let dev=(event)=>{
        toast.error("Options will be available soon",{duration:5000})
        event.preventDefault();
    }

    return (<div className=" w-full  h-[85%]" >
        <Toaster />
        <div className="flex h-[100%] items-center flex-col sm:flex-row  ">

        <div className=" flex flex-col  gap-10 justify-center sm:px-14 px-10 w-[100%] sm:w-[40%] h-[40%]" >

        <div className=" justify-center flex flex-col gap-3">

        <p className="sm:text-6xl text-3xl font-semibold">EduTech Brew</p>
        <p className="text-xl font-semibold">For iOS & Android</p>
        </div>
        <div>

        <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eos ea quis, exercitationem laboriosam natus nulla quo id voluptate, sint soluta, quisquam doloribus. Modi deleniti et quo voluptatibus magnam provident!</p>
        </div>
        <div className=" flex gap-6 items-center">
            <button onClick={dev} className="border-2 px-6 bg-white p-3 rounded-full text-slate-900 sm:text-base text-sm font-semibold ">Publish App</button>
            <button onClick={dev} className="flex gap-2 items-center" >
            <svg class="sm:w-6 s:h-6 w-4 h-4 text-white border-2 border-white rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 18V6l8 6-8 6Z"/>
</svg>

                View Demo</button>
        </div>
        </div>


        <div className="sm:w-[60%] w-[100%]   relative bottom-0  h-full hidden   " style={{gridTemplateColumns:"repeat(6,1fr)",gridTemplateRows:"repeat(1,1fr)",height:"100%"}}>
            <div className="sm:border-[30px]  border-[15px] border-b-0 border-e-0 sm:border-b-0 sm:border-e-0 rounded-ss-3xl border-yellow-300 h-[100%] absolute w-full" style={{gridColumnStart:"7",gridColumnEnd:"1 ",gridRowStart:"6",gridRowEnd:" 4 ",alignSelf:"center",bottom:0}}>
            </div>
            <div className="sm:border-[30px]  border-[15px] border-b-0 border-e-0 sm:border-b-0 sm:border-e-0 rounded-ss-3xl border-purple-600  h-[100%] absolute w-full" style={{gridColumnStart:"7",gridColumnEnd:"3 ",gridRowStart:"6",gridRowEnd:" 2",alignSelf:"center"}}>
            </div>
            <div className="sm:border-[30px]  border-[15px]  border-b-0 border-e-0 sm:border-b-0 sm:border-e-0 rounded-ss-3xl border-fuchsia-600  h-full absolute w-full" style={{gridColumnStart:"7",gridColumnEnd:"2",gridRowStart:"6",gridRowEnd:"3",alignSelf:"center"}}>
            </div>
            <div  className="sm:shadow-2xl shadow-lg   shadow-black z-10 h-fit sm:h-fit w-fit rounded-3xl" style={{gridColumnStart:"6", gridColumnEnd:"4",gridRowStart:"5",gridRowEnd:"1",alignSelf:"center"}}>
                <img className=" h-full w-full object-contain  border-4 border-black rounded-3xl"src="phone.png"></img>
            </div>
            
        {/* // <p>Temper</p> */}
        </div>

            <div class="sm:w-[60%] w-[100%] hidden  sm:grid relative bottom-0 " style={{gridTemplateColumns: "repeat(6, 1fr)" ,gridTemplateRows: "repeat(5, 1fr)", height: "100%"}}>
                <div class="sm:border-[30px]  border-[15px] border-b-0 border-e-0 sm:border-b-0 sm:border-e-0 rounded-ss-3xl border-yellow-300 h-[100%] absolute w-full" style={{gridColumnStart:"7",gridColumnEnd:"1 ",gridRowStart:"6",gridRowEnd:" 4 ",alignSelf:"center",bottom:0}}></div>
                <div class="sm:border-[30px]  border-[15px] border-b-0 border-e-0 sm:border-b-0 sm:border-e-0 rounded-ss-3xl border-purple-600  h-[100%] absolute w-full" style={{gridColumnStart:"7",gridColumnEnd:"3 ",gridRowStart:"6",gridRowEnd:" 2",alignSelf:"center"}}></div>
                <div class="sm:border-[30px]  border-[15px]  border-b-0 border-e-0 sm:border-b-0 sm:border-e-0 rounded-ss-3xl border-fuchsia-600  h-[100%] absolute w-full" style={{gridColumnStart:"7",gridColumnEnd:"2",gridRowStart:"6",gridRowEnd:"3",alignSelf:"center"}}></div>
                <div class="shadow-2xl   shadow-black z-10 h-[30vh] sm:h-[70vh] w-fit rounded-3xl" style={{gridArea: "5 / 6 / 1 / 4", alignSelf: "center"}}>
                <img class=" h-full w-full object-contain   rounded-3xl" src="phone.png"/>
                </div>
                </div>
           
        <div className="sm:w-[60%] w-[100%]  relative bottom-0 h-fit sm:hidden grid " style={{gridTemplateColumns:"repeat(9,1fr)",gridTemplateRows:"repeat(9  ,1fr)",height:"60%"}}>
            <div className="sm:border-[30px]  border-[25px] border-b-0 border-e-0 sm:border-b-0 sm:border-e-0 rounded-ss-3xl border-yellow-300 h-full absolute w-full" style={{gridColumnStart:"10",gridColumnEnd:"3 ",gridRowStart:"10",gridRowEnd:" 3 ",alignSelf:"center",bottom:0}}>
            </div>
            <div className="sm:border-[30px]  border-[25px] border-b-0 border-e-0 sm:border-b-0 sm:border-e-0 rounded-ss-3xl border-purple-600  h-full w-full  absolute" style={{gridColumnStart:"10",gridColumnEnd:"5",gridRowStart:"10",gridRowEnd:" 1",alignSelf:"center",bottom:0}}>
            </div>
            <div className="sm:border-[30px]  border-[25px]  border-b-0 border-e-0 sm:border-b-0 sm:border-e-0 rounded-ss-3xl border-fuchsia-600  h-full  w-full absolute" style={{gridColumnStart:"10",gridColumnEnd:"4",gridRowStart:"10",gridRowEnd:"2",alignSelf:"center",bottom:0}}>
            </div>
            {/* <div  className="sm:shadow-2xl shadow-lg    z-10 h-[25vh]  w-fit rounded-3xl" style={{gridColumnStart:"7", gridColumnEnd:"2",gridRowStart:"8",gridRowEnd:"5    ",alignSelf:"center"}}> */}
                <img className=" h-fit  object-contain shadow-2xl  rounded-3xl z-10"src="phone.png" style={{gridColumnStart:"6", gridColumnEnd:"2",gridRowStart:"9",gridRowEnd:"5   ",alignSelf:"center"}}></img>
            {/* </div> */}
            

           
        {/* // <p>Temper</p> */}
        </div>



        </div>
    </div> );
}

export default Modal;