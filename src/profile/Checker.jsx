import Chart from 'react-apexcharts'
function Checker() {
    // const chartData = { series: [{ name: 'Students', data: [3551, 2951, 2125] }], options: { chart: { type: 'bar' }, plotOptions: { bar: { horizontal: false, }, }, dataLabels: { enabled: false }, xaxis: { categories: ['Germany', 'Australia', 'United States'], }, colors: ['#1E3A8A', '#10B981', '#F59E0B'],   
    // const chartData = { series: [{ name: 'Students', data: [3551, 2951, 2125] }], options: { chart: { type: 'bar' }, plotOptions: { bar: { horizontal: false, }, }, dataLabels: { enabled: false }, xaxis: { categories: ['Germany', 'Australia', 'United States'], }, colors: ['#1E3A8A', '#10B981', '#F59E0B'],
    const chartData = { series: [{ name: 'Students', data: [3551, 2951, 2125] }], options: { chart: { type: 'bar' }, plotOptions: { bar: { horizontal: false, }, }, dataLabels: { enabled: false }, xaxis: { categories: ['Germany', 'Australia', 'United States'], }, colors: ['#1E3A8A', '#10B981', '#F59E0B'], }, };


    return (
        <div className='mt-8'>
            <p className='font-semibold mb-6'>Top Student Location</p>
        <div className=' flex flex-col gap-4'>
            {/* singlecomponet */}
        <div className=' flex items-center justify-between'>
        <div className='pointer-1 flex justify-between p-3 rounded-lg ' style={{width:"85%",backgroundImage:"linear-gradient(to right, rgba(255,0,0,0), rgba(219,240,237,1))"}} >  
            <div className="point-start flex items-center gap-2">

            <div className="img-cont">
                <img src="germany.png" className="h-4 w-4"></img>
            </div>
            <div className="content text-sm">Germany</div>

            </div>



            <div className="enrolled flex items-center gap-1">
                <img src="person.png" className=' h-4 w-4'></img>
                <p className='text-sm'>2,551</p>
            </div>
        </div>
        <div className='text-sm text-gray-400'>30%</div>
        </div>



        <div className=' flex items-center justify-between'>
        <div className='pointer-1 flex justify-between p-3 rounded-lg ' style={{width:"70%",backgroundImage:"linear-gradient(to right, rgba(255,0,0,0), rgba(219,240,237,1))"}} >  
            <div className="point-start flex items-center gap-2">

            <div className="img-cont">
                <img src="germany.png" className="h-4 w-4"></img>
            </div>
            <div className="content text-sm">Germany</div>

            </div>



            <div className="enrolled flex items-center gap-1">
                <img src="person.png" className=' h-4 w-4'></img>
                <p className='text-sm'>2,551</p>
            </div>
        </div>
        <div className='text-sm text-gray-400'>30%</div>
        </div>



        <div className=' flex items-center justify-between'>
        <div className='pointer-1 flex justify-between p-3 rounded-lg ' style={{width:"60%",backgroundImage:"linear-gradient(to right, rgba(255,0,0,0), rgba(219,240,237,1))"}} >  
            <div className="point-start flex items-center gap-2">

            <div className="img-cont">
                <img src="germany.png" className="h-4 w-4"></img>
            </div>
            <div className="content text-sm">Germany</div>

            </div>



            <div className="enrolled flex items-center gap-1">
                <img src="person.png" className=' h-4 w-4'></img>
                <p className='text-sm'>2,551</p>
            </div>
        </div>
        <div className='text-sm text-gray-400'>30%</div>
        </div>


        </div>
    </div>);
}

export default Checker;