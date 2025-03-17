import React from "react";

function ProductCart({product,onClick}){
    return(
        <div onClick={onClick}>
        <a href="" className="bg-white p-4 rounded-lg shadow-lg block hover:shadow-xl hover:-translate-y-1 transition duration-200">
        <img src={product.image }alt="product" className="h-64 w-full object-cover" />
        <h2 className="text-lg font-semibold mt-4">{product.title}</h2>
        <h2 className="text-lg mt-4 line-clamp-2">{product.description}</h2>
        <h2 className="text-lg font-semibold mt-4">${product.price}</h2>
        </a>
        </div>
    )
}
export default ProductCart