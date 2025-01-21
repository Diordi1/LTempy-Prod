function CourseTable() {
    return (  
        <div className="sm:w-[48%] w-[100%]   flex flex-col items-center">
        <div><p className="font-semibold text-xl mb-4">Weekly Sale Stats</p></div>
        <div class="relative overflow-x-auto  sm:rounded-lg w-fit">
            <table class="sm:w-[48%] w-[100%] text-xs sm:text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-2 sm:px-6 py-3 text-gray-400 font-semibold ">
                           
                            Course
                        </th>
                        <th scope="col" class="px-2 sm:px-6 py-3 text-gray-400 font-semibold">
                            Sale
                        </th>
                        <th scope="col" class="px-2 sm:px-6 py-3 text-gray-400 font-semibold">
                            Earnings
                        </th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="px-2 sm:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="flex sm:gap-4 gap-2">
                                <div className="pic p-3 rounded bg-stone-700 text-white h-12 text-xl font-bold w-12 text-center">P</div>
                                <div className="content flex flex-wrap leading-4"> Apple MacBook Pro</div>
                            </div>
                           
                        </th>
                       
                        <td class="px-6 py-4">
                            10
                        </td>
                        <td class="px-2 sm:px-6 py-4 text-right">
                        <span class="bg-green-100 text-green-500 text-xs sm:text-sm font-medium  sm:px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-200">$150.5</span>
                         </td>
                    </tr>
                   
                    <tr class="bg-white  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="px-2 sm:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="flex gap-4  ">
                                <div className="pic p-3 rounded bg-green-400 text-white h-12 text-xl font-bold w-12 text-center"><img src="book.png"></img></div>
                                <div className="content flex flex-wrap leading-4"> Book Purchase</div>
                            </div>
                           
                        </th>
                       
                        <td class="px-6 py-4">
                            10
                        </td>
                        <td class="px-2 sm:px-6 py-4 text-right">
                        <span class="bg-green-100 text-green-500 sm:text-sm text-xs font-medium  sm:px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-200">$150.5</span>
                         </td>
                    </tr>
                   
                   
                </tbody>
            </table>
        </div>
        </div>
        );
}

export default CourseTable;