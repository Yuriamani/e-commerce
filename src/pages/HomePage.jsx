import Header from "../components/common/Header";
import Hero from "../components/home/Hero";
import PopularProducts from "../components/home/PopularProducts";
import Services from "../components/home/Services";
import SuperQuality from "../components/home/SuperQuality";
import SpecialOffers from "../components/home/SpecialOffers";
import CustomerReviews from "../components/home/CustomerReviews";
import Subscribe from "../components/home/Subscribe";
import Footer from "../components/home/Footer";
const HomePage = () => {

  return (
    <div className='flex-1 overflow-auto relative z-10 '>
			<Header title='Home' />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding ">
        <PopularProducts />
      </section>
      <section className="padding ">
        <SuperQuality />
      </section>
      <section className="padding-x py-10 ">
        <Services />
      </section>
      <section className="padding ">
        <SpecialOffers />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8 ">
        <Footer />
      </section>
    </div>
  );
};

export default HomePage;