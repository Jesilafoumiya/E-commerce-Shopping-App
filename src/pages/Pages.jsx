import React from "react"
import Home from "../components/MainPage/Home"
import Shop from "../components/shops/Shop"
import FlashDeals from "../components/flashDeals/FlashDeals"
import TopCate from "../components/top/TopCate"


const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      
    </>
  )
}

export default Pages
