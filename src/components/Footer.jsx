import React from "react";

function Footer(){
    return(
        <div className="grid grid-cols-3 gap-4 bg-blue-600 text-white py-10 px-20">
            <div>
                <h1 className="text-2xl font-bold">About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quaerat cumque sit, commodi voluptate asperiores!</p>
            </div>
            <div>
                <h1 className="text-2xl font-bold">Services</h1>
                <ul>
                    <li>Services</li>
                    <li>Services</li>
                    <li>Services</li>
                </ul>
            </div>
            <div>
                <h1 className="text-2xl font-bold">Contact Us</h1>
                <ul>
                    <p>98*****</p>
                    <p>98*****</p>
                    <p>98*****</p>
                </ul>
            </div>
        </div>
    )
}
export default Footer;