'use client'

import Link from 'next/link'
import { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import { useLanguage } from './LanguageProvider'

const labels = {
  pt: ['Sobre', 'Trajetória', 'Palcos + comunidade', 'Áreas', 'Conecte-se comigo'],
  en: ['About', 'Experience', 'Talks + community', 'Focus areas', 'Connect with me'],
  es: ['Sobre mí', 'Trayectoria', 'Charlas + comunidad', 'Áreas', 'Conecta conmigo']
}
const paths = ['#sobre', '#trajetoria', '#palestras', '#areas', '#redes']

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const { language } = useLanguage()
  const navLinks = paths.map((path, index) => ({ path, title: labels[language][index] }))
  const menuLabel = language === 'en'
    ? (navbarOpen ? 'Close menu' : 'Open menu')
    : language === 'es'
      ? (navbarOpen ? 'Cerrar menú' : 'Abrir menú')
      : (navbarOpen ? 'Fechar menu' : 'Abrir menu')

  return (
    <nav className="topbar" aria-label={language === 'en' ? 'Main navigation' : language === 'es' ? 'Navegación principal' : 'Navegação principal'}>
      <div className="topbar-inner">
        <Link href="/#inicio" className="brand" aria-label={language === 'en' ? 'Lary Souza, home' : language === 'es' ? 'Lary Souza, inicio' : 'Lary Souza, início'}>
          <span className="brand-name">Lary Souza</span>
        </Link>
        <div className="mobile-menu">
          <button type="button" onClick={() => setNavbarOpen(!navbarOpen)} className="menu-toggle" aria-label={menuLabel} aria-expanded={navbarOpen}>
            {navbarOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </button>
        </div>
        <div className="desktop-menu" id="navbar">
          <ul>{navLinks.map(link => <li key={link.path}><NavLink href={link.path} title={link.title} /></li>)}</ul>
        </div>
        <LanguageToggle />
        <ThemeToggle />
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} onNavigate={() => setNavbarOpen(false)} /> : null}
    </nav>
  )
}
