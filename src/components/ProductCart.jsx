import React from "react";

function ProductCart(){
    return(
        <div>
        <a href="" className="bg-white p-4 rounded-lg shadow-lg block hover:shadow-xl hover:-translate-y-1 transition duration-200">
        <img src="https://images.unsplash.com/photo-1739932215472-15ebf0ab6cf4?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product" className="h-40 w-full object-cover" />
        <h2 className="text-lg fontsemibold mt4-">Product Name</h2>
        <h2 className="text-lg fontsemibold mt4-">Product Description</h2>
        <h2 className="text-lg fontsemibold mt4-">$100</h2>
        </a>
        </div>
    )
}
export default ProductCart