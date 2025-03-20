import React from "react";

function ServiceCard({service}){
    return(
        <>
        <div>
            <a href="" className="bg-gray-200 p-4 rounded-lg shadow-lg block hover:shadow-xl hover:-translate-y-1 transition duration-200">
             <img src={service.image} alt="product" className="h-40 w-full object-cover" /> 
                <h2 className="text-lg font-semibold mt-4">{service.title}</h2>
                <h2 className="text-lg mt-4 line-clamp-2">{service.description}</h2>
                </a>
        </div>
        </>
        )
}
export default ServiceCard;
