import React from "react";
import ProductCart from "./ProductCart";
import { useNavigate } from "react-router-dom";

function ProducutContainer(){
    const navigation = useNavigate();
    const products = [
        {
            id: 1,
            productname: "product 1",
            description: "this is description",
            price:100,
            image:'https://picsum.photos/200'
        },

        {
            id: 2,
            productname: "product 2",
            description: "This is about id:2",
            price:200,
            image:'https://picsum.photos/300'
        },

        {
            id: 3,
            productname: "product 3",
            description: "This is about id:3",
            price:300,
            image:'https://picsum.photos/400'
        },

        {
            id: 4,
            productname: "product 4",
            description: "This is about id:4",
            price:400,
            image:'https://picsum.photos/600'
        },
    ]

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