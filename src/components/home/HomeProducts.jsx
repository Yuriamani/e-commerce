import React from 'react'
import { motion } from "framer-motion";

const productsData = [
	{ id: 1, title: "Men's Clothing", img: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" },
	{ id: 2, title: "Women's Clothing", img: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" },
	{ id: 3, title: "Jewelery", img: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" },
	{ id: 4, title: "Electronics", img: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600"},
];

const HomeProducts = () => {
  return (
    <>
      <div className="container my-3 py-3">

        <h2 className="text-2xl font-semibold text-gray-100 text-center py-4">Our Products</h2>
        
        
            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
            <motion.div 
            className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >{productsData.map((products)  => (
            <motion.div  key={products.id}
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700'
			whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
		>
      <div className='px-4 py-5 sm:p-6'>
      <span className='flex items-center text-sm font-medium text-gray-400'>
      <img className="card-img-top img-fluid" src={products.img} alt="" height={160} />
      </span>
      <p className='mt-1 text-3xl font-semibold text-gray-100'>{products.title}</p>
  </div></motion.div>   ))} </motion.div> </main>

  <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10'>
        {
          productsData.map(products => (
            <div key={products.id} className='bg-white shadow-md rounded-lg px-10 py-10'>
              <img src={products.img} alt={products.title} className='rounded-md h-48' />
              <div className='mt-4'>
                <h1 className='text-lg uppercase font-bold'>{products.title}</h1>
                {/* <p className='mt-2 text-gray-600 text-sm'>{product.description.slice(0, 40)}...</p> */}
                {/* <p className='mt-2 text-gray-600'>${product.price}</p> */}
              </div>
              <div className='mt-6 flex justify-between items-center'>
                
              </div>
            </div>
          ))
        }
      </div>
   
    
      </div>
    </>
  )
}

export default HomeProducts