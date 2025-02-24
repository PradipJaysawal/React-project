import React from "react";
import ServiceCard from "./ServiceCard";

function ServiceContainer(){
    const Services = [
        {
            id: 1,
            title: "Service 1",
            description: "this is description",
            image:'https://picsum.photos/200'
        },

        {
            id: 2,
            title: "Service 2",
            description: "This is about id:2",
            image:'https://picsum.photos/300'
        },

        {
            id: 3,
            title: "Service 3",
            description: "This is about id:3",
            image:'https://picsum.photos/400'
        },

        {
            id: 4,
            title: "Service 4",
            description: "This is about id:4",
            image:'https://picsum.photos/600'
        },
    ]
    return(
        <div>
                <h1 className="text-center font-bold text-2xl">Our Services</h1>
            <div className="grid grid-cols-4 gap-4 px-20 py-6">
                {Services.map((service)=>(
                    // <ProductCart key={product.id} productname={product.productname} price={product.price} description={product.description} /> //single product
                    <ServiceCard key={service.id} service={service} /> 
                ))}
            </div>
        </div>
    )
}

export default ServiceContainer