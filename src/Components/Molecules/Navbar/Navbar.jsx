import React from 'react'
import FoodLogo from '../../../assets/EPA-makefood.svg';
import style from './Navbar.module.css'
import { NavLink, Outlet } from 'react-router-dom';
function Navbar() {
  return (
    <>
    <Outlet/>
    <header className={style.navbarContainer}>
    <div className={style.leftContainer}>
        <img src={FoodLogo} alt="Food Logo" width='25%' height='50px' />
        <h5 className={style.logoText}>Yash's Cafe</h5>
      </div>
      <div className={style.rightContainer}>
        <nav className={style.navbarList}>
            <NavLink className={style.links} to='/'>Home</NavLink>
            <NavLink className={style.links} to='/about'>About</NavLink>
            <NavLink className={style.links} to='/menu'>Menu</NavLink>
            <NavLink className={style.links} to='/contact'>Contact Us</NavLink>
        </nav>
      </div>
    </header>
    </>
  )
}

export default Navbar