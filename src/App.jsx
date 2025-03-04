import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import HomePage from "./pages/HomePage"
import FavouritesPage from "./pages/FavouritesPage"
import ProductsPage from "./pages/ProductsPage";
import ShopPage from "./pages/ShopPage"
import HistoryPage from "./pages/HistoryPage"
import WalletPage from "./pages/WalletPage";
import CartPage from "./pages/CartPage"
import SettingsPage from "./pages/SettingsPage"



function App() {

  return (
    // <div>
    <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
      {/*Background*/}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-900 opacity-80"/>
        <div className="absolute inset-0 backdrop-blur-sm"/>
      </div>
      <Sidebar />

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/shops" element={<ShopPage/>} />
        <Route path="/favourites" element={<FavouritesPage/>} />
        <Route path="/wallet" element={<WalletPage/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/history" element={<HistoryPage/>} />
        <Route path="/settings" element={<SettingsPage/>} />
      </Routes>
</div>
  )
}

export default App
