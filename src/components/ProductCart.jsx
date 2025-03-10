import React from "react";

function ProductCart({product,onClick}){
    return(
        <div onClick={onClick}>
        <a href="" className="bg-white p-4 rounded-lg shadow-lg block hover:shadow-xl hover:-translate-y-1 transition duration-200">
        <img src={product.image }alt="product" className="h-40 w-full object-cover" />
        <h2 className="text-lg font-semibold mt4-">{product.productname}</h2>
        <h2 className="text-lg mt4-">{product.description}</h2>
        <h2 className="text-lg font-semibold mt4-">${product.price}</h2>
        </a>
        </div>
    )
}
export default ProductCart