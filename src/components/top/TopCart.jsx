import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Tdata from "./Tdata"


import "./style.css"

const TopCart = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <>
      <Slider {...settings}>
        {Tdata.map((value, index) => {
          return (
            <>
              <div className='container' key={index}>
                <div className="row-content">
                  <div className="col-content">
                    <div className='img'>
                      <img src={value.cover} alt='' />
                    </div>
                  </div>
                  <div className="col-content">
                    <div className='best'>
                      <h1>{value.para}</h1>
                    </div><br /><br />
                    <div className="data">
                      <div><p className='desc'>{value.desc}</p></div>
                      <div><p className='author'>{value.author}</p></div>
                      <div><p className='note'>{value.note}</p></div>
                    </div>

                  </div>
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default TopCart
