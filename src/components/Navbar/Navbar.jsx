import React, { useEffect, useRef } from 'react';
import './Navbar.css';
import logo from  '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import dropdown from '../../assets/caret_icon.svg'
import { logout } from '../../firebase';




const Navbar = () => {

const Navref = useRef();

useEffect(() => {
    window.addEventListener('scroll',()=>{
        if(window.scrollY >= 80){
            Navref.current.classList.add('nav-dark')
        }
        else{
            Navref.current.classList.remove('nav-dark')
        }
    })
,[]})




  return (
    <div ref={Navref} className='Navbar'>
        <div className="Navbar-left">
            <img src={logo} alt="" />
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by Languages</li>
            </ul>
        </div>
        <div className="Navbar-right">

        <img src={search_icon} alt=""  className='icon'/>
        <p>children</p>
        <img src={bell_icon} alt=""  className='icon'/>
        <div className='Navbar-profile'>
            <img src={profile}  alt=""  className='profile'/>
            <img src={dropdown} alt="" />
            <div className="dropdown">
                <p onClick={()=>{logout()}}>Sign out NetFlix</p>
            </div>

        </div>

        </div>
            

        </div>
      
    
  );
}

export default Navbar;
