import React from 'react'
import { RiFacebookCircleFill, RiInstagramFill, RiPhoneFill, RiTimeFill, RiTwitterFill } from 'react-icons/ri'

const TopBar = () => {
  return (
     <div className="bg-blue-700 flex justify-between py-7 px-15">
                <div className="flex gap-3 ">
                    <RiInstagramFill size={20} className='text-white text-sm'/>
                    <RiFacebookCircleFill size={20} className='text-white text-sm'/>
                    <RiTwitterFill size={20} className='text-white text-sm'/>
                </div>

                <div className="flex gap-3 ">
                    <div className='flex gap-1 items-center'>
                    <RiPhoneFill size={20} className='text-white text-sm'/>
                    <p className="text-white">+9829434998</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                    <RiTimeFill size={20} className='text-white text-sm'/>
                    <p className="text-white">081/06/11, 8:30 PM</p>
                    </div>
                </div>

        </div> 
  )
}

export default TopBar
