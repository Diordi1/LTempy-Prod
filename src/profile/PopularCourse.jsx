function PopularCourse() {
    return ( <div className="flex flex-col gap-4 mt-6">

<div className="head1">
    <p className="font-semibold">Popular Courses</p>
</div>
    <div className="mt-4 flex justify-between items-center">

    {/* singlecomponet     */}
        <div className="flex gap-2">
            <div className="imageprof rounded-full p-2 bg-yellow-300">
            <img src="spring.png" className="h-6 w-6 "></img>
            </div>
            <div className="prof-content">
                <p className="font-sm">Spring Boot</p>
                <p className="text-xs text-gray-400">30+ Courses</p>
            </div>
        </div>
            <div className="btn"><button className="bg-yellow-100 p-2 text-sm rounded-lg">View Courses</button></div>
    </div>

    <div className="mt-4 flex justify-between items-center">

    {/* singlecomponet     */}
        <div className="flex gap-2">
            <div className="imageprof rounded-full p-2 bg-red-400">
            <img src="market.png" className="h-6 w-6 "></img>
            </div>
            <div className="prof-content">
                <p className="font-sm">Spring Boot</p>
                <p className="text-xs text-gray-400">30+ Courses</p>
            </div>
        </div>
            <div className="btn"><button className="bg-red-100 p-2 text-sm rounded-lg">View Courses</button></div>
    </div>



    <div className="mt-4 flex justify-between items-center">

    {/* singlecomponet     */}
        <div className="flex gap-2">
            <div className="imageprof rounded-full p-2 bg-green-400">
            <img src="web.png" className="h-6 w-6 "></img>
            </div>
            <div className="prof-content">
                <p className="font-sm">Spring Boot</p>
                <p className="text-xs text-gray-400">30+ Courses</p>
            </div>
        </div>
            <div className="btn"><button className="bg-green-100 p-2 text-sm rounded-lg">View Courses</button></div>
    </div>


            </div> );
}

export default PopularCourse;