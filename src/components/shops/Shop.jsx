import React from "react"
import Navbar from "./Navbar"
import ShopCart from "./ShopCart"
import "./style.css"

const Shop = ({ addToCart, shopItems }) => {
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          

          <div className='contentWidth'>
            <div className='heading d_flex'>
                <h1>Our Premium Collections</h1>
            </div>
            <Navbar />
             
           
            <div className='product-content  grid1'>
              <ShopCart addToCart={addToCart} shopItems={shopItems} />
            </div> <br></br>
            <div><button className=' endbtn'>Find Out More</button></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop
