import React from 'react'
import logo from "../images/logo.webp";
const navigation = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul>
          <li>MENU</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
    <button className='btn1'>LOGIN</button>
    </div>
  )
}

export default navigation