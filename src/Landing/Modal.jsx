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

        <div className=" flex flex-col  gap-10 justify-center px-14  w-[100%] sm:w-[40%] h-[100%]" >

        <div className=" justify-center flex flex-col gap-3">

        <p className="text-6xl font-semibold">EduTech Brew</p>
        <p className="text-2xl font-semibold">For iOS & Android</p>
        </div>
        <div>

        <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eos ea quis, exercitationem laboriosam natus nulla quo id voluptate, sint soluta, quisquam doloribus. Modi deleniti et quo voluptatibus magnam provident!</p>
        </div>
        <div className=" flex gap-6 items-center">
            <button onClick={dev} className="border-2 px-6 bg-white p-3 rounded-full text-slate-900 text-base font-semibold ">Publish App</button>
            <button onClick={dev} className="flex gap-2" >
            <svg class="w-6 h-6 text-white border-2 border-white rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 18V6l8 6-8 6Z"/>
</svg>

                View Demo</button>
        </div>
        </div>


        <div className="sm:w-[60%] w-[100%]   grid relative bottom-0 " style={{gridTemplateColumns:"repeat(6,1fr)",gridTemplateRows:"repeat(5,1fr)",height:"100%"}}>
            <div className="sm:border-[30px]  border-[15px] border-b-0 border-e-0 sm:border-b-0 sm:border-e-0 rounded-ss-3xl border-yellow-300 h-[100%] absolute w-full" style={{gridColumnStart:"7",gridColumnEnd:"1 ",gridRowStart:"6",gridRowEnd:" 4 ",alignSelf:"center",bottom:0}}>
            </div>
            <div className="sm:border-[30px]  border-[15px] border-b-0 border-e-0 sm:border-b-0 sm:border-e-0 rounded-ss-3xl border-purple-600  h-[100%] absolute w-full" style={{gridColumnStart:"7",gridColumnEnd:"3 ",gridRowStart:"6",gridRowEnd:" 2",alignSelf:"center"}}>
            </div>
            <div className="sm:border-[30px]  border-[15px]  border-b-0 border-e-0 sm:border-b-0 sm:border-e-0 rounded-ss-3xl border-fuchsia-600  h-[100%] absolute w-full" style={{gridColumnStart:"7",gridColumnEnd:"2",gridRowStart:"6",gridRowEnd:"3",alignSelf:"center"}}>
            </div>
            <div  className="shadow-2xl   shadow-black z-10 h-[30vh] sm:h-[70vh] w-fit rounded-3xl" style={{gridColumnStart:"6", gridColumnEnd:"4",gridRowStart:"5",gridRowEnd:"1",alignSelf:"center"}}>
                <img className=" h-full w-full object-contain  border-4 border-black rounded-3xl"src="phone.png"></img>
            </div>
            


           
        {/* // <p>Temper</p> */}
        </div>



        </div>
    </div> );
}

export default Modal;