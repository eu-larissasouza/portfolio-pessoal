'use client'

import { useRef } from 'react'
import {
  ArrowTopRightOnSquareIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'

const resumeUrl =
  '/docs/Curr%C3%ADculo%20-%20Larissa%20Alves%20de%20Souza.pdf'

export default function ResumeViewer() {
  const dialogRef = useRef(null)

  return (
    <>
      <button
        className="button button-primary about-resume"
        type="button"
        onClick={() => dialogRef.current?.showModal()}
      >
        Ver currículo
      </button>
      <dialog
        className="resume-dialog"
        ref={dialogRef}
        aria-labelledby="resume-title"
        onClick={event => {
          if (event.target === event.currentTarget) event.currentTarget.close()
        }}
      >
        <div className="resume-dialog-content">
          <header className="resume-dialog-header">
            <h2 id="resume-title">Currículo · Larissa Souza</h2>
            <button
              className="resume-dialog-close"
              type="button"
              aria-label="Fechar currículo"
              onClick={() => dialogRef.current?.close()}
            >
              <XMarkIcon aria-hidden="true" />
            </button>
          </header>
          <iframe
            className="resume-frame"
            src={resumeUrl}
            title="Currículo de Larissa Souza"
          />
          <a
            className="resume-dialog-link"
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Abrir PDF em outra aba
            <ArrowTopRightOnSquareIcon aria-hidden="true" />
          </a>
        </div>
      </dialog>
    </>
  )
}
