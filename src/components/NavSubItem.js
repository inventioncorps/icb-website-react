import React from 'react'

const NavSubItem = ({ name, path}) => {

    return (
        <Link href={path}>
                {name}
        </Link>
    )
}

export default NavSubItem