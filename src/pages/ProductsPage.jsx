import { motion } from "framer-motion";
import ProductsCard from "../components/ProductsCard";
import { useState } from "react";
import { Search } from "lucide-react";
import { getRandomColor } from "../lib/utils";
import img1 from '../assets/img-1.jpg'
import img2 from '../assets/img-2.jpg'
import img3 from '../assets/img-3.jpg'
import img4 from '../assets/img-4.jpg'
import img5 from '../assets/img-5.jpg'

import Header from "../components/common/Header";

const productsData = [
	{ id: 1, name: "John Doe", category: "Electronics", price: 200, img: "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" },
	{ id: 2, name: "Jane Smith", category: "Clothing", price: 50, img: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" },
	{ id: 3, name: "Bob Johnson", category: "Electronics", price: 150, img: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" },
	{ id: 4, name: "Alice Brown", category: "Clothing", price: 70, img: "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" },
	{ id: 5, name: "Charlie Wilson", category: "Food", price: 30, img: "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" },
];

const ProductsPage = () => {
	const [selectedCategory, setSelectedCategory] = useState("All");
	  const [minPrice, setMinPrice] = useState(0);
	  const [maxPrice, setMaxPrice] = useState(1000);
	  const [searchTerm, setSearchTerm] = useState(""); // New search term state
	
	  // Filtering logic
	  const filteredProducts = productsData.filter((product) => {
		const withinCategory = selectedCategory === "All" || product.category === selectedCategory;
		const withinPriceRange = product.price >= minPrice && product.price <= maxPrice;
		const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase()); // Search term match
		return withinCategory && withinPriceRange && matchesSearchTerm;
	  });
    return (
        <div className='flex-1 relative z-10 overflow-auto'>
            <Header title='Products' />

            <main className='max-w-7xl mx-2 py-6 px-4 lg:px-8'>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 justify-between items-center mb-6'>
              <div>
            <h1 className='font-bold text-3xl md:text-5xl mt-4'>Recommended Products</h1>
				<p className='text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight'>Popular choices</p>
        </div>
            
            <div className='relative'>
					<input
						type='text'
						placeholder='Search products...'
						className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
						onChange={(e) => setSearchTerm(e.target.value)}
						value={searchTerm}
					/>
					<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
				</div>

				{/* Category Filter */}
        <div className="mb-4">
        <p className='text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight'>Category:</p>
        <select
					className='bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 
          focus:ring-blue-500
          '
					value={selectedCategory}
					onChange={(e) => setSelectedCategory(e.target.value)}
				>
					<option value="All">All</option>
					<option value="Electronics">Electronics</option>
					<option value="Clothing">Clothing</option>
					<option value="Food">Food</option>
				</select>
        </div>

				{/* Price Range Filter */}
				<div className="mb-4">
        <p className='text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight'>Price Range:</p>
        <div className="flex space-x-2">
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            className='bg-gray-700 text-white placeholder-gray-400 rounded-lg p-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className='bg-gray-700 text-white placeholder-gray-400 rounded-lg p-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
      </div>


	  {/* Filtered Products */}
				</div>
            <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
      <ProductsCard key={product.id} products={product} {...getRandomColor()} />
    ))
) : (<ul className="space-y-2">
  <li>No products found.</li></ul>
)}
  
</div>
			</main>
            </div>
    )
}

export default ProductsPage;