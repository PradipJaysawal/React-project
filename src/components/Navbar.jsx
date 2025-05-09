import { Link, NavLink } from 'react-router-dom';
import lion from'../assets/lion.png';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Navbar(){ 

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/categories')
        .then((response)=>{
            setCategories(response.data);
        })
},[]);

const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    location.href = '/';
}

    return(
        <>

         <div className='sticky top-0 z-50'>
        <nav className="flex justify-between items-center px-15 py-2 bg-gray-100 shadow-lg">
            <img src={lion} alt="logo" className="h-12"/>
            <ul className="flex justify-center space-x-4">
                <li>
                    <NavLink to="/" className={({isActive}) => isActive ? "text-blue-600 font-bold underline" : " text-blue-500 "}>Home</NavLink>
                </li>
                {categories.map((category)=>(
                    <li key={category.id} className='text-blue-500'>
                        <NavLink to={`/categoryproducts/${category.id}`} className={({isActive}) => isActive ? "text-blue-600 font-bold underline" : "text-blue-500"}>{category.name}</NavLink>
                    </li>
                ))}
                <li>
                    <NavLink to="/contact" className={({isActive}) => isActive ? "text-blue-600 font-bold underline" : " text-blue-500 "}>Contact</NavLink>
                </li>
                <li>
                    {localStorage.getItem('token') === null ? (
                    <NavLink to="/login" className={({isActive}) => isActive ? "text-blue-600 font-bold underline" : " text-blue-500 "}>Login</NavLink>
                ):(
                    <div className='flex items-center gap-2'>
                            <a className="text-blue-500 cursor-pointer" onClick={handleLogout}>Logout</a>
                            <NavLink to="/mycart" className={({isActive}) => isActive ? "text-blue-600 font-bold" : "text-blue-500"}>My Cart</NavLink>
                    </div>
                )}
                </li>
            </ul>
        </nav>
        </div> 
        </>
    )
}
export default Navbar;