import React from 'react'
import Link from 'next/link'
import NavSubItem from './NavSubItem'

const NavItem = ({ name, path, subItems}) => {

    const hover = false //TODO implement change on hover
    if (!subItems) { // if link exists, item cannot have subitems.
        return (
            <Link href={path}>
                {name}
            </Link>
        )
    } else if (hover) {
        return (
            <div>
                {name}
                {/* Note this div should only be displayed on hover. */}
                {subItems.map((item) => (
                <div key={item.name}>
                    <NavSubItem name={item.name} path={item.path}/>
                </div>
                ))
            }
            </div>
            )
    }
    else {
        return (
            <div>
                {name}
            </div>
        )
    }
}

export default NavItem