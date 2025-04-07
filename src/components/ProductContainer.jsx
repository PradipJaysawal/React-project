import React, { useEffect, useState } from "react";
import ProductCart from "./ProductCart";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ProducutContainer(){
    const navigation = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/latestproduct')
        .then((response)=>{
            setProducts(response.data);
        })

    },[]);


    const handleClick = (product)=>{
        navigation(`/product/${product.id}`,{state:{product}});
    }


    return(
        <div>
                <h1 className="text-center font-bold text-2xl mt-2">Our Products</h1>
            <div className="grid grid-cols-4 gap-4 px-20 py-6">
                {products.map((product)=>(
                    // <ProductCart key={product.id} productname={product.productname} price={product.price} description={product.description} /> //single product
                    <ProductCart key={product.id} product={product} onClick={()=> handleClick(product)} /> 
                ))}
            </div>
        </div>
    )
}

export default ProducutContainer