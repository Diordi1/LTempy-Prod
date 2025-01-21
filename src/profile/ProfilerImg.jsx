import Card from "./Card";
import Checker from "./Checker";
import PopularCourse from "./PopularCourse";
import Temper from "./Temper";
import TopStudent from "./TopStudentLocation";

function ProfilerImg() {
    return ( 
        <div className="flex flex-col mt-4 w-[20%] px-4 rounded-lg h-fit shadow-lg py-6">

        <div className="head1"><p className="font-semibold text-xl">Profile</p></div>
        {/* profile */}
            <div className="mt-4">

        
        <div className="flex gap-2">
            <div className="imageprof">
            <img src="profile.png" className="h-12 w-12"></img>
            </div>
            <div className="prof-content">
                <p className="font-medium">Ralph</p>
                <p>Course Provider</p>
            </div>
        </div>
            </div>
        <Card/>
            <PopularCourse/>
            <hr className="mt-5"></hr>
            {/* <TopStudent/> */}
            {/* <Temper/> */}
           
            <Checker/>
            {/* <p className="flex  mt-32 justify-center">Craft</p> */}
           <div>
           </div>
        </div>
     );
}

export default ProfilerImg;