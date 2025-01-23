import toast, { Toaster } from 'react-hot-toast';
function HeaderLanding() {

    let dev=(event)=>{
        toast.error("Options will be available soon",{duration:5000})
        event.preventDefault();
    }
    return ( <div className="nav h-[15%] py-5 items-center">
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

        <p className="text-4xl  sm:hidden">&#8801;</p>
        </div>
            </div>
        </div>
    </div>);
}

export default HeaderLanding;