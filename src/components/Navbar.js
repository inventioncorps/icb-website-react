import React from 'react'
import Link from 'next/link'
import NavItem from './NavItem'

const Navbar = () => {

    
     const navItems = [
         {
             name: 'About', subItems: [
                 {
                item: 'Our Story',
                path: '/our-story',
                color: 'red',
             },
                 {item: 'Members',
                path: '/members',
                color: 'red',}
             ]
         },
         {
             name: 'Work', subItems: [
                 {
                item: 'Projects',
                path: '/projects',
                color: 'green',
             },
                 {item: 'Showcase',
                path: '/showcase',
                color: 'green',}
             ]
         },
     ]
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
                    <NavItem name={item.name} subItems={item.subItems}/>
                </div>
            ))}</div>
    )
}

export default Navbar