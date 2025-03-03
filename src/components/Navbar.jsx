import lion from'../assets/lion.png';
function Navbar(){
    return(
        <>
        {/* <div className="fixed top-0 right-0 w-full bg-yellow-200 shawod-md">
                <div className="flex justify-between px-15">
                    <p>081/06/11, 8:30 PM</p>
                    <p>98********</p>
                </div>
        </div> */}

         <div>
        <nav className="flex justify-between items-center px-15 py-2 bg-gray-100">
            <img src={lion} alt="logo" className="h-12"/>
            <ul className="flex justify-center space-x-4">
                <li><a href="#" className="text-blue-500 font-bold">Home</a></li>
                <li><a href="#" className="text-blue-500 font-bold">About</a></li>
                <li><a href="#" className="text-blue-500 font-bold">Service</a></li>
                <li><a href="#" className="text-blue-500 font-bold">Contact</a></li>
            </ul>
        </nav>
        </div> 
        </>
    )
}
export default Navbar;