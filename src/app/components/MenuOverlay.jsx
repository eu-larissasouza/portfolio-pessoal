import React from 'react'
import NavLink from './NavLink'

const MenuOverlay = ({ links, onNavigate }) => {
  return (
    <ul className="mobile-menu-panel">
      {links.map(link => (
        <li key={link.path} onClick={onNavigate}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  )
}

export default MenuOverlay
