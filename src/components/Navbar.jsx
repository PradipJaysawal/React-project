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

console.log(categories);

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
                    <NavLink to="/login" className={({isActive}) => isActive ? "text-blue-600 font-bold underline" : " text-blue-500 "}>Login</NavLink>
                </li>
            </ul>
        </nav>
        </div> 
        </>
    )
}
export default Navbar;