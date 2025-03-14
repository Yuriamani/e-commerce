import React from 'react'
import Header from "../components/common/Header";

const ShopPage = () => {
  const productsData = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", category: "Electronics", price: 200, img: "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" },
    { id: 2, name: "Jane Smith", email: "john.doe@example.com", category: "Clothing", price: 50, img: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" },
    { id: 3, name: "Bob Johnson", email: "john.doe@example.com", category: "Electronics", price: 150, img: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" },
    { id: 4, name: "Alice Brown", email: "john.doe@example.com", category: "Clothing", price: 70, img: "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" },
    { id: 5, name: "Charlie Wilson", email: "john.doe@example.com", category: "Food", price: 30, img: "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" },
  ];

  return (
    <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
			<Header title='Shops' />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
        {productsData.map((product) => (
        <div>
      <div className='flex flex-col sm:flex-row items-center mb-6'>
				<img
					src='https://randomuser.me/api/portraits/men/3.jpg'
					alt='Profile'
					className='rounded-full w-20 h-20 object-cover mr-4'
				/>

				<div>
					<h3 className='text-lg font-semibold text-gray-100'>{product.name}</h3>
					<p className='text-gray-400'>{product.email}</p>
				</div>
			</div>
      <div className="carousel rounded-box">
      {productsData.map((product) => (
        <div className="carousel-item">
        <img
          src={product.img}
          alt="Burger" />
      </div>
      ))}
  </div>
      </div> ))}

      <div>
      <div className='flex flex-col sm:flex-row items-center mb-6'>
				<img
					src='https://randomuser.me/api/portraits/men/3.jpg'
					alt='Profile'
					className='rounded-full w-20 h-20 object-cover mr-4'
				/>

				<div>
					<h3 className='text-lg font-semibold text-gray-100'>John Doe</h3>
					<p className='text-gray-400'>john.doe@example.com</p>
				</div>
			</div>
      </div>
      
				</div>
        </main>
    </div>
  )
}

export default ShopPage

// import Header from "../components/common/Header";

// import React, { useState } from "react";

// // Sample product data
// const products = [
//   { id: 1, name: "Product 1", category: "Electronics", price: 200 },
//   { id: 2, name: "Product 2", category: "Clothing", price: 50 },
//   { id: 3, name: "Product 3", category: "Electronics", price: 150 },
//   { id: 4, name: "Product 4", category: "Clothing", price: 70 },
//   { id: 5, name: "Product 5", category: "Food", price: 30 },
// ];

// // Filter component
// const ShopPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [minPrice, setMinPrice] = useState(0);
//   const [maxPrice, setMaxPrice] = useState(1000);

//   // Filtering logic
//   const filteredProducts = products.filter((product) => {
//     const withinCategory = selectedCategory === "All" || product.category === selectedCategory;
//     const withinPriceRange = product.price >= minPrice && product.price <= maxPrice;
//     return withinCategory && withinPriceRange;
//   });

//   return (
//     <div className="flex-1 overflow-auto relative z-10 p-4">
//       <Header title='Shops' />
//       <h2 className="text-xl font-bold mb-4">Filter Products</h2>
      
//       {/* Category Filter */}
//       <div className="mb-4">
//         <label className="block text-sm mb-2">Category:</label>
//         <select
//           value={selectedCategory}
//           onChange={(e) => setSelectedCategory(e.target.value)}
//           className="border p-2 rounded"
//         >
//           <option value="All">All</option>
//           <option value="Electronics">Electronics</option>
//           <option value="Clothing">Clothing</option>
//           <option value="Food">Food</option>
//         </select>
//       </div>

//       {/* Price Range Filter */}
//       <div className="mb-4">
//         <label className="block text-sm mb-2">Price Range:</label>
//         <div className="flex space-x-2">
//           <input
//             type="number"
//             placeholder="Min Price"
//             value={minPrice}
//             onChange={(e) => setMinPrice(Number(e.target.value))}
//             className="border p-2 rounded w-full"
//           />
//           <input
//             type="number"
//             placeholder="Max Price"
//             value={maxPrice}
//             onChange={(e) => setMaxPrice(Number(e.target.value))}
//             className="border p-2 rounded w-full"
//           />
//         </div>
//       </div>

//       {/* Filtered Products */}
//       <h3 className="text-lg font-semibold mt-4">Filtered Products</h3>
//       <ul className="space-y-2">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <li key={product.id} className="border p-2 rounded">
//               {product.name} - ${product.price} ({product.category})
//             </li>
//           ))
//         ) : (
//           <li>No products found.</li>
//         )}
//       </ul>
//     </div>
//   );
// }

// export default ShopPage