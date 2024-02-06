import React from 'react'
import './Layout.scss'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='layout'>
            <Navbar />
            <div className='main'>
                <span className='tag tag-open'>&lt;body&gt;</span>
                <Outlet />
                <span className='tag tag-close'>&lt;/body&gt;</span>
            </div>
        </div>
    )
}

export default Layout