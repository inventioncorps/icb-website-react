import React from 'react'
import Link from 'next/link'
import NavSubItem from './NavSubItem'

const NavItem = ({ name, path, subItems}) => {

    if (link !== '' && !subItems) { // if link exists, item cannot have subitems.
        return (
            <Link href={path}>
                {name}
            </Link>
        )
    } else {
        return (
            <div>
                {/* Note this div should only be displayed on hover. */}
                {subItems.map((item) => (
                <div style='' key={item.name}>
                    <NavSubItem name={item.name} path={item.path}/>
                </div>
                ))
            }
            </div>
            )
    }
}

export default NavItem