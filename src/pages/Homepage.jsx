import React from 'react'
import { Products } from '../components'
const Homepage = () => {
  return (
    <div className="homepage px-6 py-6  w-full h-screen flex flex-col gap-6">
        <h2 className="heading-text text-center font-bold text-3xl">Welcome to Redux Toolkit Store</h2>
        <Products />
    </div>
  )
}

export default Homepage
