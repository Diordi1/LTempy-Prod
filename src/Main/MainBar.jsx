import Chart from "./Chart";
import CourseStats from "./CourseStats";
import CourseTable from "./CourseTable";
import Intro from "./Intro";
import IntroCard from "./IntroCard";

function MainBar() {
    return (<div className="sm:w-[60%] w-[100%]my-10">
        <Intro/>
        <IntroCard/>
        <Chart/>
        <div className="flex flex-col sm:flex-row sm:ms-14">

        <CourseStats/>
        <CourseTable/>
        </div>
       
    </div>);
}

export default MainBar;