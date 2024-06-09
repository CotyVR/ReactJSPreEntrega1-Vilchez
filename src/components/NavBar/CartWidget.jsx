import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";

const CartWidget = () => {
  return (
    <div className='carrito'>
      <FaCartArrowDown size={25} color='rgb(0, 0, 120)' />
      <p>1</p>
    </div>
  )
}

export default CartWidget


