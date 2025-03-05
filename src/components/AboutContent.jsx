import React from "react";

function AboutContent() {
  return (
    <>
      <h1 className="text-center font-bold text-2xl mt-2">About Us</h1>
      <div className="flex py-10 px-24 items-center gap-10">
        <div className="flex-none">
          <img 
            className="w-80 h-60 rounded-lg shadow-lg object-cover" 
            src="https://images.unsplash.com/photo-1683207906680-ee74d1425423?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Pet Shop"/>
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-2xl">Pet Shop</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, eveniet illo? Maxime assumenda quidem minus laborum recusandae perspiciatis delectus laboriosam, nam, error debitis molestias? Pariatur.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis recusandae itaque natus, laboriosam odit dignissimos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita impedit nisi quod doloribus deleniti! Fugit qui, maiores provident doloribus repellendus veritatis nihil odio illum quam, ipsa quae voluptates aut ducimus quos sunt magni omnis, ullam facere nisi vitae molestiae ea amet. Officiis quas possimus, animi dicta quaerat perspiciatis eum nesciunt?
          </p>
          <a href="">
          <button className="mt-4 px-4 py-2 bg-blue-900 text-white font-bold rounded-lg hover:bg-black">Know More</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default AboutContent;
