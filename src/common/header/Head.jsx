import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <h1 className='logo'>Dealerz.</h1>
            
            
          </div>
           <div className='right  RText'>
           <i className='fa fa-phone'></i>
            <label>Call Center </label>
            <i className='fa fa-truck'></i>
            <label>Shipping & Returns</label>
            
          </div> 
        </div>
      </section>
    </>
  )
}

export default Head
