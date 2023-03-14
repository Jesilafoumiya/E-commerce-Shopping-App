import React from "react"
import { Link } from "react-router-dom"
import "./Header.css"

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
         <div className='container c_flex'>
           <div className='navlink'>
            <ul className='secondfirst'>
              
              <li>
                <Link to='/'>Shop</Link>
              </li>
              <li>
                <Link to='/pages'>promo</Link>
              </li>
              <li>
                <Link to='/user'>About</Link>
              </li>
              <li>
                <Link to='/vendor'>Blog</Link>
              </li>
              
            </ul>

              
  
          </div> 
          <div className='search-box f_flex'>
            
            <input type='text' placeholder='Search what you need' />
            <i className='fa fa-search'></i>
            {/* <span>All Category</span> */}
          </div>

          <div className='icon f_flex width'>
          <i className='fa fa-heart icon-circle'></i>
            <div className='cart'>

              <Link to='/cart'>
                <i className='fa fa-shopping-cart icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
            <i className='fa fa-user icon-circle'></i>
            <i className='fa fa-bell icon-circle'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
