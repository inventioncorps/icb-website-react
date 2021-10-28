import React from 'react'
import NavItem from './NavItem'

const Navbar = () => {

    
     const navItems = [
         {
             name: 'About',
             subItems: [
                 {
                name: 'Our Story',
                path: '/our-story',
                color: 'red',
             },
                {
                item: 'Members',
                path: '/members',
                color: 'red',
                }
             ],
             path = '' // TODO find better way of having no path
         },
         {
             name: 'Work',
             subItems: [
                {
                    name: 'Projects',
                    path: '/projects',
                    color: 'green',
                },
                {
                    name: 'Showcase',
                    path: '/showcase',
                    color: 'green',
                }
             ],
             path = '' // TODO find better way of having no path
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
        // TODO render ICB logo and link to home button
        <div style={navStyle}>
            {navItems.map((item) => (
                <div style={navItemStyle} key={item.name}>
                    <NavItem name={item.name} subItems={item.subItems} link={item.link}/>
                </div>
            ))}</div>
    )
}

export default Navbar