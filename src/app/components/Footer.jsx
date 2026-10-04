import React from 'react'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} Lary Souza</span>
        <a href="#inicio">Voltar ao início ↑</a>
      </div>
    </footer>
  )
}

export default Footer
