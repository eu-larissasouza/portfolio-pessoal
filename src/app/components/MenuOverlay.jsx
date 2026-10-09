import React from 'react'
import NavLink from './NavLink'
import LanguageToggle from './LanguageToggle'
import ThemeToggle from './ThemeToggle'

const MenuOverlay = ({ links, onNavigate }) => {
  return (
    <ul className="mobile-menu-panel">
      {links.map(link => (
        <li key={link.path} onClick={onNavigate}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
      <li className="mobile-menu-settings">
        <LanguageToggle />
        <ThemeToggle />
      </li>
    </ul>
  )
}

export default MenuOverlay
