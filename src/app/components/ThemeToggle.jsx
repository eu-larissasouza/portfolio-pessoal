'use client'

import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

export default function ThemeToggle() {
  const [mode, setMode] = useState('light')

  useEffect(() => {
    let savedMode
    try {
      savedMode = window.localStorage.getItem('lary-theme')
    } catch {}
    const initialMode =
      savedMode ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light')
    document.documentElement.dataset.theme = initialMode
    setMode(initialMode)
  }, [])

  const toggleMode = () => {
    const nextMode = mode === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = nextMode
    setMode(nextMode)
    try {
      window.localStorage.setItem('lary-theme', nextMode)
    } catch {}
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleMode}
      aria-label={`Ativar tema ${mode === 'dark' ? 'claro' : 'escuro'}`}
    >
      {mode === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}
