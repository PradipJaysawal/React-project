import React from "react";
import { API_URL_PRODUCT } from "../constants/apiConstant";

function ProductCart({product,onClick}){
    return(
        <div onClick={onClick}>
        <a className="bg-white p-4 rounded-lg shadow-lg block hover:shadow-xl hover:-translate-y-1 transition duration-200 cursor-pointer">
        <img src={API_URL_PRODUCT+product.photopath} alt="product" className="h-64 w-full object-cover" />
        <h2 className="text-lg font-semibold mt-4  line-clamp-1">{product.name}</h2>
        <h2 className="text-lg mt-4 line-clamp-1">{product.description}</h2>
        {product.discounted_price && Number(product.discounted_price) > 0 ? (
            <p className="text-blue-900 font-bold text-lg">
                <span className="mr-2">Rs. {product.discounted_price}</span>
                <span className="line-through font-thin text-sm text-red-600">
                Rs. {product.price}
                </span>
            </p>
            ) : (
            <p className="text-blue-900 font-bold text-lg">Rs. {product.price}</p>
            )}
        
        </a>
        </div>
    )
}
export default ProductCart