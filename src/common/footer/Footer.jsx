import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'> 
          <div className='img'>
            <img src='./images/slide-3.png' width='100%' height='100%' />
          </div>
          </div>

          <div className='box'>
            <h1>Dealerz</h1> 
            
            <ul>
              <li>Terms & Conditions</li><br />
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='icon f_flex width footicon '>
                <i className='ff icon-circle'>Yt</i>
                <i className='ff icon-circle'>Fb</i>
                <i className='ff icon-circle'>tw</i>
                <i className='ff icon-circle'>Ig</i>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
