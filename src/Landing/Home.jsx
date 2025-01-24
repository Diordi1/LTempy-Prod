// import { Modal } from "flowbite-react";
import FooterLanding from "./Footer";
import HeaderBottom from "./Header-Bottm";
import HeaderLanding from "./Header-Landing";
import MiddleModal from "./MiddleModal";
import Modal from "./Modal";
import Partner from "./Partner";

function Home() {
    return ( <div className="bg-slate-900 text-white h-[100%] ">
        <div className=" w-full mx-auto h-[100%] ">

        <HeaderLanding/>
       <Modal/>
       <MiddleModal/>
       <HeaderBottom/>
       <Partner/>
       <FooterLanding/>
       </div>
    </div> );
}

export default Home;