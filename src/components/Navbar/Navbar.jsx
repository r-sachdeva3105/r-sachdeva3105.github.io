import React from 'react'
import './Navbar.scss'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

    const location = useLocation();

    return (
        <div className='navbar'>
            <span className='logo'>&lt;Rajat /&gt;</span>
            <ul>
                <li className={location.pathname === '/' ? 'active' : ''}>
                    <Link exact='true' to='/'>HOME</Link>
                </li>
                <li className={location.pathname === '/about' ? 'active' : ''}>
                    <Link exact='true' to='/about'>ABOUT</Link>
                </li>
                <li className={location.pathname === '/skills' ? 'active' : ''}>
                    <Link exact='true' to='/skills'>SKILLS</Link>
                </li>
                <li className={location.pathname === '/projects' ? 'active' : ''}>
                    <Link exact='true' to='/projects'>PROJECTS</Link>
                </li>
                <li className={location.pathname === '/contact' ? 'active' : ''}>
                    <Link exact='true' to='/contact'>CONTACT</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar