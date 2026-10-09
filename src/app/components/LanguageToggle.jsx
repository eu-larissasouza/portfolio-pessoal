'use client'

import { useRef } from 'react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { useLanguage } from './LanguageProvider'

const options = [
  { code: 'pt', flag: 'br', label: 'Português' },
  { code: 'en', flag: 'us', label: 'English' },
  { code: 'es', flag: 'es', label: 'Español' }
]

const labels = {
  pt: { select: 'Selecionar idioma', current: 'Idioma atual' },
  en: { select: 'Select language', current: 'Current language' },
  es: { select: 'Seleccionar idioma', current: 'Idioma actual' }
}

function FlagIcon({ country }) {
  if (country === 'br') {
    return (
      <svg className="flag-icon" viewBox="0 0 24 16" aria-hidden="true">
        <rect width="24" height="16" rx="2" fill="#009b3a" />
        <path d="M12 2 22 8 12 14 2 8Z" fill="#ffdf00" />
        <circle cx="12" cy="8" r="3.2" fill="#002776" />
        <path d="M9.3 7.7c1.9-.8 3.7-.7 5.2.2" fill="none" stroke="#fff" strokeWidth=".45" />
      </svg>
    )
  }
  if (country === 'us') {
    return (
      <svg className="flag-icon" viewBox="0 0 24 16" aria-hidden="true">
        <rect width="24" height="16" rx="2" fill="#fff" />
        <path d="M0 0h24v1.25H0zM0 2.5h24v1.25H0zM0 5h24v1.25H0zM0 7.5h24v1.25H0zM0 10h24v1.25H0zM0 12.5h24v1.25H0zM0 15h24v1H0z" fill="#b22234" />
        <path d="M0 0h10.5v8H0z" fill="#3c3b6e" />
        <g fill="#fff"><circle cx="2" cy="1.5" r=".45"/><circle cx="5" cy="1.5" r=".45"/><circle cx="8" cy="1.5" r=".45"/><circle cx="3.5" cy="3.5" r=".45"/><circle cx="6.5" cy="3.5" r=".45"/><circle cx="2" cy="5.5" r=".45"/><circle cx="5" cy="5.5" r=".45"/><circle cx="8" cy="5.5" r=".45"/></g>
      </svg>
    )
  }
  return (
    <svg className="flag-icon" viewBox="0 0 24 16" aria-hidden="true">
      <rect width="24" height="16" rx="2" fill="#aa151b" />
      <path d="M0 4h24v8H0z" fill="#f1bf00" />
    </svg>
  )
}

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const pickerRef = useRef(null)
  const current = options.find(option => option.code === language) || options[0]

  const chooseLanguage = code => {
    setLanguage(code)
    if (pickerRef.current) pickerRef.current.open = false
    pickerRef.current?.querySelector('summary')?.focus()
  }

  return (
    <details className="language-picker" ref={pickerRef}>
      <summary aria-label={labels[language].select} title={labels[language].select}>
        <span className="language-flag-circle"><FlagIcon country={current.flag} /></span>
      </summary>
      <div className="language-picker-menu" role="group" aria-label={labels[language].select}>
        {options.map(option => (
          <button
            key={option.code}
            type="button"
            lang={option.code}
            aria-pressed={language === option.code}
            aria-label={option.label}
            onClick={() => chooseLanguage(option.code)}
          >
            <span className="language-flag-circle"><FlagIcon country={option.flag} /></span>
            <span>{option.label}</span>
            {language === option.code && <CheckIcon aria-hidden="true" />}
          </button>
        ))}
      </div>
    </details>
  )
}
