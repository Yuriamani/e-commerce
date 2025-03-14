import PopularProductsCard from "./PopularProductsCard";
import { motion } from "framer-motion";

const productsData = [
	{ id: 1, name: "John Doe", price: 200, category: "Customer", imgURL: "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" },
	{ id: 2, name: "Jane Smith", price: 50, category: "Admin", imgURL: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" },
	{ id: 3, name: "Bob Johnson", price: 150, category: "Customer", imgURL: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" },
	{ id: 4, name: "Alice Brown", price: 70, category: "Customer", imgURL: "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" },
];

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our
          <span className="text-coral-red"> Popular</span> Products
        </h2>

        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray ">
          Experience top-notch quality and style with our sought-after
          selections. Descover a world of comfort, design, and value.
        </p>

        <motion.div
          className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {productsData.map((product) => (
            <PopularProductsCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PopularProducts;