import React from 'react'
import { Link } from 'react-router-dom' 

const Commercial = () => {
  return (
    <div className='px-55 pt-15  flex justify-between'>
      <div className='bg-blue-200 shadow-2xl w-70 rounded-lg hover:bg-sky-400'>
        <Link 
        to="/Office" >
        <h1 className='pr-11 pl-8 pt-15 text-xl font-semibold font-Open-Sans text-gray-500 hover:text-red-400 hover:text-2xl'>
            Office for Co-working
        </h1>
        <img src="https://static.99acres.com/universalhp/img/d_hp_property_type_1.webp" alt="office"
         className='h-54 w-70 rounded-b-lg'/>
        </Link>
      </div>
      <div className='bg-red-200 shadow-2xl w-70 rounded-lg hover:bg-sky-100 '>
        <Link 
        to="/Shops" >
        <h1 className='pr-11 pl-8 pt-15 text-xl font-semibold font-Open-Sans text-gray-500 hover:text-2xl hover:text-red-300'>
            Shops for Rent
        </h1>
        <img src="https://static.99acres.com/universalhp/img/d_hp_property_type_1.webp" alt="office"
         className='h-61 w-70 rounded-b-lg'/>
        </Link>
      </div>
      <div className='bg-blue-200 shadow-2xl w-70 rounded-lg hover:bg-sky-400'>
        <Link 
        to="/Floors" >
        <h1 className='pr-11 pl-8 pt-15 text-xl font-semibold font-Open-Sans text-gray-500 hover:text-red-400 hover:text-2xl'>
            Builder Floor
        </h1>
        <img src="https://static.99acres.com/universalhp/img/d_hp_property_type_4.webp" alt="office"
         className='h-61 w-70 rounded-b-lg'/>
        </Link>
      </div>
    </div>
  )
}

export default Commercial
