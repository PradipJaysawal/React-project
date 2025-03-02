import React from "react";

function EventCard({event}){
    return(
        <>
        <div>
            <a href="" className="bg-gray-200 p-4 rounded-lg shadow-lg block hover:shadow-xl hover:-translate-y-1 transition duration-200">
             <img src={event.image} alt="event" className="h-40 w-full object-cover" /> 
                <h2 className="text-lg font-semibold mt-4">{event.title}</h2>
                <h2 className="text-lg mt-4 line-clamp-3">{event.description}</h2>
                <h2 className="text-lg font-semibold mt-4">{event.date}</h2>
                </a>
        </div>
        </>
        )
}
export default EventCard;