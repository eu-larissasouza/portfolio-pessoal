'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  {
    title: 'Sobre',
    path: '#sobre'
  },
  {
    title: 'Trajetória',
    path: '#trajetoria'
  },
  {
    title: 'Palcos + comunidade',
    path: '#palestras'
  },
  {
    title: 'Áreas',
    path: '#areas'
  },
  {
    title: 'Conecte-se comigo',
    path: '#redes'
  }
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className="topbar" aria-label="Navegação principal">
      <div className="topbar-inner">
        <Link href="/#inicio" className="brand" aria-label="Lary Souza, início">
          <span className="brand-name">Lary Souza</span>
        </Link>
        <div className="mobile-menu">
          <button
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="menu-toggle"
            aria-label={navbarOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={navbarOpen}
          >
            {navbarOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>
        <div className="desktop-menu" id="navbar">
          <ul>
            {navLinks.map(link => (
              <li key={link.path}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        <ThemeToggle />
      </div>
      {navbarOpen ? (
        <MenuOverlay links={navLinks} onNavigate={() => setNavbarOpen(false)} />
      ) : null}
    </nav>
  )
}

export default Navbar
