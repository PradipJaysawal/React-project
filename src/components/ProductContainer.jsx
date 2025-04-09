import React, { useEffect, useState } from "react";
import ProductCart from "./ProductCart";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../constants/apiConstant";

function ProducutContainer(){
    const navigation = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get(`${API_URL}/latestproduct`)
        .then((response)=>{
            setProducts(response.data);
        })

    },[]);


    const handleClick = (id)=>{
        navigation(`/product/${id}`);
    }


    return(
        <div>
                <h1 className="text-center font-bold text-2xl mt-2">Our Products</h1>
            <div className="grid grid-cols-4 gap-4 px-20 py-6">
                {products.map((product)=>(
                    // <ProductCart key={product.id} productname={product.productname} price={product.price} description={product.description} /> //single product
                    <ProductCart key={product.id} product={product} onClick={()=> handleClick(product.id)} /> 
                ))}
            </div>
        </div>
    )
}

export default ProducutContainer