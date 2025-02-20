import React from "react";
import ProductCart from "./ProductCart";

function ProducutContainer(){
    return(
        <div>
            <div className="grid grid-cols-4 gap-4 px-20 py-20">
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
            </div>
        </div>
    )
}

export default ProducutContainer