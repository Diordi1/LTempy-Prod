function Card() {
    return (<div className=" text-white p-4 rounded-xl mt-10" style={{backgroundImage:"linear-gradient(to bottom right, orange, green)"}}>
        <div className="head1">
        <p>Total Earnings</p>
    
        </div>

        <div className="lis1 flex flex-row items-center justify-between flex-wrap gap-2 p-2">
            <div className="content1 flex flex-col gap-1 w-fit">
                <p className="text-gray-500 text-xs">Today Earnings</p>
                <p className="">$19,010</p>
            </div>
            <div className="content1 flex flex-col gap-1 w-fit">
                <p className="text-gray-500 text-xs">Pending</p>
                <p className="">$19,010</p>
            </div>
            <div className="content1 flex flex-col gap-1 w-fit">
                <p className="text-gray-500 text-xs">In Review</p>
                <p className="">$19,010</p>
            </div>
            <div className="content1 flex flex-col gap-1 w-fit">
                <p className="text-gray-500 text-xs">Available</p>
                <p className="">$19,010</p>
            </div>
            <div className="btn">
                <button className="rounded-lg border p-2 ms-3 px-4 example-2 " style={{backgroundColor:"rgba(0,0,0,0.2)"}}>Withdraw</button>
            </div>
        </div>
    </div> );
}

export default Card;