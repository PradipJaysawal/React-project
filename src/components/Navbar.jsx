import { Link, NavLink } from 'react-router-dom';
import lion from'../assets/lion.png';
function Navbar(){ 
    return(
        <>

         <div>
        <nav className="flex justify-between items-center px-15 py-2 bg-gray-100">
            <img src={lion} alt="logo" className="h-12"/>
            <ul className="flex justify-center space-x-4">
                <li>
                    <NavLink to="/" className={({isActive}) => isActive ? "text-blue-600 font-bold underline" : " text-blue-500 "}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive}) => isActive ? "text-blue-600 font-bold underline" : " text-blue-500 "}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/services" className={({isActive}) => isActive ? "text-blue-600 font-bold underline" : " text-blue-500 "}>Services</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({isActive}) => isActive ? "text-blue-600 font-bold underline" : " text-blue-500 "}>Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/login" className={({isActive}) => isActive ? "text-blue-600 font-bold underline" : " text-blue-500 "}>Login</NavLink>
                </li>
            </ul>
        </nav>
        </div> 
        </>
    )
}
export default Navbar;