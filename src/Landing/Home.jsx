// import { Modal } from "flowbite-react";
import HeaderLanding from "./Header-Landing";
import MiddleModal from "./MiddleModal";
import Modal from "./Modal";

function Home() {
    return ( <div className="bg-slate-900 text-white h-[100%] ">
        <div className=" w-full mx-auto h-[100%] ">

        <HeaderLanding/>
       <Modal/>
       <MiddleModal/>
       </div>
    </div> );
}

export default Home;