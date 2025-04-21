import React, { use, useEffect, useState } from 'react'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Ri24HoursFill, RiBankCard2Fill, RiShoppingCart2Fill, RiStarFill, RiTruckFill, RiVerifiedBadgeFill } from 'react-icons/ri'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { API_URL, API_URL_PRODUCT } from '../constants/apiConstant'
import { toast } from 'react-toastify'
import ProductCart from '../components/ProductCart'
import Chart from '../components/Chart'

function SingleProduct() {

    const {id} = useParams();
    //access the product object from the state
    const [product, setProduct] = useState([])
    const [relatedProducts, setRelatedProducts] = useState([])
    const navigation = useNavigate()
    

    const [Qty, setQty] = useState(1)
    const increment = () => {
        setQty(Qty + 1)
    }
    const decrement = () => {
        if (Qty > 1) {
            setQty(Qty - 1)
        }
    }

    useEffect(() => {
        axios.get(`${API_URL}/viewproduct/${id}`)
        .then((response) => {
            setProduct(response.data.product)
            setRelatedProducts(response.data.relatedproducts)
        })
    }, [id]);

    const handleAddToCart = () => {
        const token = localStorage.getItem('token')
        if(!token) {
            alert('Please login to add products to cart')
            return
        }
        axios.post(`${API_URL}/cart/store`, {
            product_id: product.id,
            qty: Qty
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            if(response.status === 200) {
                toast.success(response.data.message)
            }
            else {
                toast.error('Error: ' + response.data.message)
            }
        })
    }


    const handleClick = (id)=>{
        navigation(`/product/${id}`);
    }


    
  return (
    <div>
        <TopBar />
        <Navbar />
        <div className='grid grid-cols-4 gap-4 md:px-32 px-20 py-10'>
            <div>
                <img src={API_URL_PRODUCT + product.photopath} alt='product' className='w-full' />
            </div>
            <div className='col-span-2'>
                <h1 className='text-2xl font-bold'>{product.name}</h1>
                <div className='flex items-center py-2'>
                    <RiStarFill className='text-yellow-500' />
                    <RiStarFill className='text-yellow-500' />
                    <RiStarFill className='text-yellow-500' />
                    <RiStarFill className='text-yellow-500' />
                    <RiStarFill className='text-yellow-500' />
                    <p>(200)</p>
                </div>
                <p className='text-lg font-bold'>${product.price}</p>
                <p className='text-sm text-gray-600'>
                    {product.description}
                </p>
                <div className='flex items-center py-2'>
                    <button onClick={decrement} className='bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded cursor-pointer'>-</button>
                    <p className='px-4'>{Qty}</p>
                    <button onClick={increment} className='bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded cursor-pointer'>+</button>
                    
                </div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2 cursor-pointer'onClick={handleAddToCart}><RiShoppingCart2Fill/> Add to Cart</button>
                
            </div>
            <div className='border-l border-gray-200 pl-2 text-gray-700'>
                <p className='flex items-center gap-2'><RiTruckFill /> Free Delivery </p>
                <p className='flex items-center gap-2'><Ri24HoursFill /> 24/7 Support </p>
                <p className='flex items-center gap-2'><RiVerifiedBadgeFill /> 100% Original </p>
                <p className='flex items-center gap-2'><RiBankCard2Fill /> Secure Payments </p>
            </div>
        </div>
        
        
        <div>
                <h1 className="font-bold text-2xl mt-2 mx-20">Related Products</h1>
                <div className="grid grid-cols-4 gap-4 px-20 py-6">
                {relatedProducts.map((product)=>(
                    <ProductCart key={product.id} product={product} onClick={()=> handleClick(product.id)} /> 
                ))}
            </div>
        </div>
        <Chart />
        <Footer />
    </div>
  )
}

export default SingleProduct