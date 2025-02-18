import smclogo from'../assets/smclogo.png';
function Navbar(){
    return(
        <div>
        <nav className="flex justify-between items-center px-15 py-2 bg-gray-100">
            <img src={smclogo} alt="logo" className="h-20"/>
            <ul className="flex justify-center space-x-4">
                <li><a href="#" className="text-blue-500">Home</a></li>
                <li><a href="#" className="text-blue-500">About</a></li>
                <li><a href="#" className="text-blue-500">Service</a></li>
                <li><a href="#" className="text-blue-500">Contact</a></li>
            </ul>
        </nav>
        </div>
    )
}
export default Navbar;