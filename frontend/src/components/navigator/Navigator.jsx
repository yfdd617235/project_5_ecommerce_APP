import React from 'react'
import { NavLink } from 'react-router-dom'
import logoE from '../logos/logoE.svg';
import './navigator.css'

function Navigator() {
    function  clicnavtop(){
        window.scrollTo({top:0})
      }
    return (
        <>
            <div className='nav-container'>
                <div className='name-container'>
                    <h2>E-COMMERCE</h2>
                    <img className='img-logo' src={logoE} alt="Logo-Ecommerce" />
                </div>
                <nav className='navigator' >
                    <ul className='navMenu' >
                        <li><NavLink onClick={clicnavtop} className="link-menu" to="/">Home</NavLink></li>
                        <li><NavLink onClick={clicnavtop} className="link-menu" to="/LogIn">LogIn</NavLink></li>
                        <li><NavLink onClick={clicnavtop} className="link-menu" to="/SignUp">SignUp</NavLink></li>
                        <li><NavLink onClick={clicnavtop} className="link-menu" to="/Products">Products</NavLink></li>
                    </ul>
                </nav>
            </div>

        </>
    )
}

export default Navigator;