import React from 'react'
import { Link } from 'react-router-dom'
import reduxImage from '../assets/redux.svg'
const Navbar = () => {
    return (
        <div className='navbar w-full h-14 px-10 bg-black text-white flex items-center justify-between'>
            <div className="logo flex items-center gap-3">
                <img src={reduxImage} alt="" className='h-12' />
                <span className='text text-2xl font-semibold'>Redux ToolKit</span>
            </div>
            <div className="navlink flex gap-7 justify-between items-center">
                <Link to='/' >Home</Link>
                <Link to='/cart' >Cart</Link>
                <span className='cart-text flex items-center gap-2 font-bold '>Cart Items : <span className='quantity text-xl text-cyan-600'>0</span></span>
            </div>
        </div>
    )
}

export default Navbar
