import React, { useState } from "react"
import { Link } from "react-router-dom"
const ShopCart = ({ shopItems, addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      {shopItems.map((shopItems, index) => {
        return (
          <><div className='box'>
            <div className='product mtop'>
              <div className='img'>

                <img src={shopItems.cover} alt='' />

              </div>
              <div className='product-details'>
                <h3>{shopItems.name}</h3>
                <h1>{shopItems.name}</h1>
                <div className='price'>
                <Link to='/pages/Items'>
                  <button><i className='fa fa-arrow-circle-right'></i></button>
                  </Link>

                   <button onClick={() => addToCart(shopItems)}>
                  <i className='fa fa-plus'></i>
                  </button> 
                </div>
              </div>
            </div>
          </div></>
        )
      })}
    </>
  )
}

export default ShopCart
