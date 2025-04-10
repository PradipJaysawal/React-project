import React from "react";
import { API_URL_PRODUCT } from "../constants/apiConstant";

function ProductCart({product,onClick}){
    return(
        <div onClick={onClick}>
        <a className="bg-white p-4 rounded-lg shadow-lg block hover:shadow-xl hover:-translate-y-1 transition duration-200 cursor-pointer">
        <img src={API_URL_PRODUCT+product.photopath} alt="product" className="h-64 w-full object-cover" />
        <h2 className="text-lg font-semibold mt-4  line-clamp-1">{product.name}</h2>
        <h2 className="text-lg mt-4 line-clamp-1">{product.description}</h2>
        <h2 className="text-lg font-semibold mt-4">${product.price}</h2>
        
        </a>
        </div>
    )
}
export default ProductCart