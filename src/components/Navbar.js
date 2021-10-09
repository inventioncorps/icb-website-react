import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css' // TODO remove

const Navbar = () => {
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Apply', path: '/apply' },
        { name: 'Our Story', path: '/our-story' },
        { name: 'Partner', path: '/partner' },
        { name: 'Projects', path: '/projects' },
        { name: 'Showcase', path: '/showcase' },
        { name: 'Members', path: '/members' }]
    
    const navStyle = {
        position: 'fixed',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexDirection: 'row',
        zIndex: '2',
        top: '0',
    }

    const navItemStyle = {
        display: 'flex',
        width: '10vw',
    }
    return (
        <div style={navStyle}>
            {navItems.map((item) => (
                <div style={navItemStyle} key={item.name}>
                    <Link href={item.path}>
                        {item.name}
                    </Link>
                </div>
            ))}</div>
    )
}

export default Navbar