import { Heart, Store, Logs } from "lucide-react";
import { useState } from "react";

const ProductsCard = ({ products, bg, badge }) => {
	
	const [isFavorite, setIsFavorite] = useState(localStorage.getItem("favorites")?.includes(products.title));

	const addProductsToFavorites = () => {
		let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
		const isProductsAlreadyInFavorites = favorites.some((fav) => fav.title === products.title);

		if (isProductsAlreadyInFavorites) {
			favorites = favorites.filter((fav) => fav.title !== products.title);
			setIsFavorite(false);
		} else {
			favorites.push(products);
			setIsFavorite(true);
		}

		localStorage.setItem("favorites", JSON.stringify(favorites));
	};

	return (
		<div className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative`}>
			<a
				href=""
				target='_blank'
				className='relative h-32'
			>
				<div className='skeleton absolute inset-0' />
				<img
					src={products.img}
					alt='products img'
					className='rounded-md w-full h-full object-cover cursor-pointer opacity-0 transition-opacity duration-500'
					onLoad={(e) => {
						e.currentTarget.style.opacity = 1;
						e.currentTarget.previousElementSibling.style.display = "none";
					}}
				/>
				<div
					className='absolute bottom-2 left-2 rounded-full p-1 cursor-pointer flex items-center
							 gap-1 text-sm
							'
				>
					<Logs size={16} /> {products.id} Remaining
				</div>

				<div
					className='absolute top-1 right-2 rounded-full p-1 cursor-pointer'
					onClick={(e) => {
						e.preventDefault();
						addProductsToFavorites();
					}}
				>
					{!isFavorite && <Heart size={20} className='hover:fill-red-500 hover:text-red-500' />}
					{isFavorite && <Heart size={20} className='fill-red-500 text-red-500' />}
				</div>
			</a>

			<div className='flex mt-1'>
				<p className='font-bold tracking-wide'>{products.title}</p>
			</div>
			<p className='my-2'>
				{products.email[0].charAt(0).toUpperCase() + products.email[0].slice(1)} Kitchen
			</p>

			<div className='flex gap-2 mt-auto'>
					<div className={`flex gap-1 ${badge} items-center p-1 rounded-md`}>
						<Store size={16} />
						<span className='text-sm tracking-tighter font-semibold'>{products.title}</span>
					</div>
					{/* <div className="items-center gap-2 card-actions justify-end flex-1">
					<Store size={16} />
      					<button className="btn btn-primary">Add to Cart</button>
    				</div> */}
				
			</div>
		</div>
	);
};
export default ProductsCard;