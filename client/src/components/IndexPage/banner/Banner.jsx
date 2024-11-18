import React from 'react'
import "./banner.css"
import FormBanner from "./FormBanner/FormBanner.jsx"

const Banner = () => {
  return (
    <div className='banner_container'>
      <h2 className='banner_h2'>Luis Barber Shop</h2>
      <FormBanner/>
    </div>
  )
}

export default Banner