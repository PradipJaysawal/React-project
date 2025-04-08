import React, { useEffect, useState } from 'react'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../constants/apiConstant'
import ProductCart from '../components/ProductCart'

function CategoryProducts () {
    const {id} =useParams();
    const [products, setCategoryProducts] = useState([]);

    useEffect(()=>{
        axios.get(`${API_URL}/categoryproduct/${id}`)
        .then((response)=>{
            setCategoryProducts(response.data);
        })

    },[id]);

    const handleClick=(product)=>{
        NavigationActivation(`/product/${product.id}`,{state: {product}});
    }


  return (
    <div>
        <TopBar/>
        <Navbar/>

        <div className="grid grid-cols-4 gap-4 px-20 py-6">
                {products.map((product)=>(

                    <ProductCart key={product.id} product={product} onClick={()=> handleClick(product)} /> 
                ))}
            </div>
            
        <Footer/>
    </div>
  )
}

export default CategoryProducts
