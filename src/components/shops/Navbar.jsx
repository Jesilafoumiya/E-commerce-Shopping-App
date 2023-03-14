import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          

          <div className='navlinks'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              
              <li>
                <Link to='/'>All Products</Link>
              </li>
              <li>
                <Link to='/pages'>Coats & Jackets</Link>
              </li>
              <li>
                <Link to='/user'>Dressed</Link>
              </li>
              <li>
                <Link to='/vendor'>PlaySuit</Link>
              </li>
              <li>
                <Link to='/track'>Short</Link>
              </li>
              <li>
                <Link to='/'>Skirt</Link>
              </li>
              <li>
                <Link to='/'>T-Shirt</Link>
              </li>
             </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
