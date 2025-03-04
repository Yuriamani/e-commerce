import { motion } from "framer-motion";
import ProductsCard from "../components/ProductsCard";
import { useState } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { getRandomColor } from "../lib/utils";
import img1 from '../assets/img-1.jpg'
import img2 from '../assets/img-2.jpg'
import img3 from '../assets/img-3.jpg'
import img4 from '../assets/img-4.jpg'
import img5 from '../assets/img-5.jpg'

import Header from "../components/Header"

const productsData = [
	{ id: 1, title: "John Doe", email: "john@example.com", role: "Customer", img: "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" },
	{ id: 2, title: "Jane Smith", email: "jane@example.com", role: "Admin", img: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" },
	{ id: 3, title: "Bob Johnson", email: "bob@example.com", role: "Customer", img: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" },
	{ id: 4, title: "Alice Brown", email: "alice@example.com", role: "Customer", img: "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" },
	{ id: 5, title: "Charlie Wilson", email: "charlie@example.com", role: "Moderator", img: "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" },
];

const ProductsPage = () => {
    const [selectedTimeRange, setSelectedTimeRange] = useState("Electronics");
    return (
        <div className='flex-1 relative z-10 overflow-auto'>
            <div><Header /></div>

            <motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
            <div className='mb-6'>
            <h1 className='font-bold text-3xl md:text-5xl mt-4'>Recommended Products</h1>
				<p className='text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight'>Popular choices</p>
            </div>
            <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {productsData.map((products)  => (
      <ProductsCard key={products.id} products={products} {...getRandomColor()} />
    ))}
  
</div>
        </motion.div>

        <motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
            <div className='flex items-center justify-between mb-6'>
            <h2 className='text-xl font-semibold text-gray-100'>Categories</h2>

            <select
					className='bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 
          focus:ring-blue-500
          '
					value={selectedTimeRange}
					onChange={(e) => setSelectedTimeRange(e.target.value)}
				>
					<option>Books and Magazines</option>
					<option>Groceries</option>
					<option>Edibles</option>
					<option>Furnitures</option>
				</select>
            </div>
            
        </motion.div>

        <motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
            <div className='mb-6'>
            <h2 className='text-xl font-semibold text-gray-100'>Explore</h2>
            </div>
            <div className="overflow-x-auto carousel w-full">
            <ImageList sx={{ width: 500, height: 450 }} cols={5} rowHeight={164}>
      {productsData.map((item) => (
        <ImageListItem key={item.img}>
          <figure>
    <img
      src={item.img}
      alt={item.title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
        </ImageListItem>
      ))}
    </ImageList>
  
</div>
        </motion.div>
			
            </div>
    )
}

export default ProductsPage;