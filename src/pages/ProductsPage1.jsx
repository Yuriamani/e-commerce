import React, { useEffect, useState } from 'react'
import Products from '../components/products/Products';
import Categories from '../components/products/Categories';
import Header from "../components/common/Header";

const ProductsPage1 = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const fetchProducts = async () => {
            const response = await fetch(`https://fakestoreapi.com/products`)
            const data = await response.json()
            console.log(data, 'data')
            setProducts(data)
        }
        fetchProducts()

    },[])

  return (
    <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
			<Header title='Products' />
    <Categories />
    <div className="flex flex-col text-center w-full mt-5">
        <h2 className="text-xs text-black tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">All Products</h1>
        </div>
        {
        products.length > 0 ?
        <Products products={products}/>
        :
        <div></div>
      }
    </div>
  )
}

export default ProductsPage1
