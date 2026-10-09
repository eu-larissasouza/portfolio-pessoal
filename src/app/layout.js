import './globals.css'
import { LanguageProvider } from './components/LanguageProvider'

export const metadata = {
  title: 'Lary Souza | Engenharia de software e comunidade',
  description: 'Engenharia backend, tecnologia e comunidade com Lary Souza.',
  icons: { icon: '/images/lary/favicon.png' }
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@700&family=JetBrains+Mono:wght@400;500&family=Lexend:wght@400;500;600&family=Lexend+Deca:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  )
}
