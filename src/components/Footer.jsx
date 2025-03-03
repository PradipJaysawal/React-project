import React from "react";
import { RiPhoneFill } from "react-icons/ri";

function Footer(){
    return(
        <div>
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
                    <div className="flex items-center space-x-2">
                        <RiPhoneFill/>
                        <p>9829434998</p>
                    </div>
                </ul>
            </div>
            </div>
            <div className="bg-blue-800 text-white text-center p-4">
                <p>&copy; Pradipwa ko Pasal</p>
            </div>
        
        </div>
    )
}
export default Footer;