import React from "react"
import "./style.css"



const Cart = ({ CartItem, addToCart, decreaseQty }) => {

  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)


  return (
    <>
      <section className='home'>
        <div className='container d_flex'>


          <div className='right'>
            <img src="./images/SlideCard/slide-3.png" alt='' />
          </div>
          <div className='left'>
            <h1>Fur Jacket</h1>
            <p>this is a branded coat.It is lightweight,comfortable and crease resistance.this is a branded coat.It is lightweight,comfortable and crease resistance.this is a branded coat.It is lightweight,comfortable and crease resistance.this is a branded coat.It is lightweight,comfortable and crease resistance</p><br /><br />
            <div className='icon f_flex width footicon '>
                <i className='ff icon-circle'>S</i>
                <i className='ff icon-circle'>M</i>
                <i className='ff icon-circle'>L</i>
                <i className='ff icon-circle'>XL</i>
          </div>
            <button className='btn-primary' >Add to Cart</button>
          </div>
        </div>
      </section>


      <section className='cart-items'>
        <div className='container d_flex'>
          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}


            {CartItem.map((item) => {
              const productQty = item.price * item.qty

              return (

                <div className='cart-list product d_flex' key={item.id}>
                  <div className='img'>
                    <img src={item.cover} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.00 * {item.qty}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart'>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>


                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => addToCart(item)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-total product'>
            <h2>Cart Summary</h2>
            <div className=' d_flex'>
              <h4>Total Price :</h4>
              <h3>${totalPrice}.00</h3>
            </div>
          </div>

        </div>
        <div className='container d_flex'>
          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items product'></h1>}


          </div>

          <div className='cart-total product'>
            <h2>Apply Coupon</h2>
            <div className=' d_flex align-items-center'>
              <h4>enter code :</h4>
              <input type="text" />
            </div>
          </div>

        </div>




       
      </section>
    </>
  )
}

export default Cart
