'use client'
import { useTranslate } from './LanguageProvider'
import React from 'react'

const Footer = () => {
  const t = useTranslate()
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>{t('Feito com Amor')} © {new Date().getFullYear()} Lary Souza</span>
      </div>
    </footer>
  )
}

export default Footer
