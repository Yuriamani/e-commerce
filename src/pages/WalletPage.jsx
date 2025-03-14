import Header from "../components/common/Header";

import React, { useState } from "react";

// Sample product data
const products = [
  { id: 1, name: "Product 1", category: "Electronics", price: 200 },
  { id: 2, name: "Product 2", category: "Clothing", price: 50 },
  { id: 3, name: "Product 3", category: "Electronics", price: 150 },
  { id: 4, name: "Product 4", category: "Clothing", price: 70 },
  { id: 5, name: "Product 5", category: "Food", price: 30 },
];

// Filter component
export default function WalletPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [searchTerm, setSearchTerm] = useState(""); // New search term state

  // Filtering logic
  const filteredProducts = products.filter((product) => {
    const withinCategory = selectedCategory === "All" || product.category === selectedCategory;
    const withinPriceRange = product.price >= minPrice && product.price <= maxPrice;
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase()); // Search term match
    return withinCategory && withinPriceRange && matchesSearchTerm;
  });

  return (
    <div className="flex-1 overflow-auto relative z-10 p-4">
      <Header title='My Wallet' />
      <h2 className="text-xl font-bold mb-4">Filter Products</h2>

      {/* Search Bar */}
      <div className="mb-4">
        <label className="block text-sm mb-2">Search by Name:</label>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term
          className="border p-2 rounded w-full"
        />
      </div>

      {/* Category Filter */}
      <div className="mb-4">
        <label className="block text-sm mb-2">Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Food">Food</option>
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="mb-4">
        <label className="block text-sm mb-2">Price Range:</label>
        <div className="flex space-x-2">
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            className="border p-2 rounded w-full"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="border p-2 rounded w-full"
          />
        </div>
      </div>

      {/* Filtered Products */}
      <h3 className="text-lg font-semibold mt-4">Filtered Products</h3>
      <ul className="space-y-2">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li key={product.id} className="border p-2 rounded">
              {product.name} - ${product.price} ({product.category})
            </li>
          ))
        ) : (
          <li>No products found.</li>
        )}
      </ul>
    </div>
  );
}
