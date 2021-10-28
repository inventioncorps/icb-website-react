import React from 'react'
import Link from 'next/link'

const NavSubItem = ({ name, path}) => {

    return (
        <Link href={path}>
                {name}
        </Link>
    )
}

export default NavSubItem