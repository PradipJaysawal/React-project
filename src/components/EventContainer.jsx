import React from "react";
import EventCard from "./EventCard";

function EventContainer(){
    const events = [
        {
            id: 1,
            title: "event 1",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis recusandae itaque natus, laboriosam odit dignissimos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita impedit nisi quod doloribus deleniti! Fugit qui, maiores provident doloribus repellendus veritatis nihil odio illum quam, ipsa quae voluptates aut ducimus quos sunt magni omnis, ullam facere nisi vitae molestiae ea amet. Officiis quas possimus, animi dicta quaerat perspiciatis eum nesciunt?  ",
            image:'https://picsum.photos/200',
            date:'2081/20/11'
        },

        {
            id: 2,
            title: "event 2",
            description: "This is about id:2Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis recusandae itaque natus, laboriosam odit dignissimos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita impedit nisi quod doloribus deleniti! Fugit qui, maiores provident doloribus repellendus veritatis nihil odio illum quam, ipsa quae voluptates aut ducimus quos sunt magni omnis, ullam facere nisi vitae molestiae ea amet. Officiis quas possimus, animi dicta quaerat perspiciatis eum nesciunt?",
            image:'https://picsum.photos/300',
            date:'2081/20/11'

        },

        {
            id: 3,
            title: "event 3",
            description: "This is about id:3Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis recusandae itaque natus, laboriosam odit dignissimos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita impedit nisi quod doloribus deleniti! Fugit qui, maiores provident doloribus repellendus veritatis nihil odio illum quam, ipsa quae voluptates aut ducimus quos sunt magni omnis, ullam facere nisi vitae molestiae ea amet. Officiis quas possimus, animi dicta quaerat perspiciatis eum nesciunt?",
            image:'https://picsum.photos/400',
            date:'2081/20/11'

        },

        {
            id: 4,
            title: "event 4",
            description: "This is about id:4Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis recusandae itaque natus, laboriosam odit dignissimos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita impedit nisi quod doloribus deleniti! Fugit qui, maiores provident doloribus repellendus veritatis nihil odio illum quam, ipsa quae voluptates aut ducimus quos sunt magni omnis, ullam facere nisi vitae molestiae ea amet. Officiis quas possimus, animi dicta quaerat perspiciatis eum nesciunt?",
            image:'https://picsum.photos/600',
            date:'2081/20/11'

        },
    ]
    return(
        <div>
                <h1 className="text-center font-bold text-2xl">Our Events</h1>
            <div className="grid grid-cols-4 gap-4 px-20 py-6">
                {events.map((event)=>(
                    // <ProductCart key={product.id} productname={product.productname} price={product.price} description={product.description} /> //single product
                    <EventCard key={event.id} event={event} /> 
                ))}
            </div>
        
        </div>
    )
}

export default EventContainer