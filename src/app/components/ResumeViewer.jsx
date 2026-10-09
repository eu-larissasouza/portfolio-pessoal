'use client'
import { useLanguage, useTranslate } from './LanguageProvider'

import { useRef } from 'react'
import {
  ArrowTopRightOnSquareIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'

const resumeUrl =
  '/docs/Curr%C3%ADculo%20-%20Larissa%20Alves%20de%20Souza.pdf'

export default function ResumeViewer() {
  const t = useTranslate()
  const { language } = useLanguage()
  const dialogRef = useRef(null)

  return (
    <>
      <button
        className="button button-primary about-resume"
        type="button"
        onClick={() => dialogRef.current?.showModal()}
      >{t('Ver currículo')}</button>
      <dialog
        className="resume-dialog"
        ref={dialogRef}
        aria-labelledby="resume-title"
        onClick={event => {
          if (event.target === event.currentTarget) event.currentTarget.close()
        }}
      >
        <div className="resume-dialog-content">
          {language !== 'pt' && <p className="resume-language-note">{t('Currículo disponível apenas em português.')}</p>}
          <header className="resume-dialog-header">
            <h2 id="resume-title">{t('Currículo · Larissa Souza')}</h2>
            <button
              className="resume-dialog-close"
              type="button"
              aria-label={t('Fechar currículo')}
              onClick={() => dialogRef.current?.close()}
            >
              <XMarkIcon aria-hidden="true" />
            </button>
          </header>
          <iframe
            className="resume-frame"
            src={`${resumeUrl}#view=FitH`}
            title={t('Currículo de Larissa Souza')}
          />
          <a
            className="resume-dialog-link"
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            {t('Abrir PDF em outra aba')}
            <ArrowTopRightOnSquareIcon aria-hidden="true" />
          </a>
        </div>
      </dialog>
    </>
  )
}
