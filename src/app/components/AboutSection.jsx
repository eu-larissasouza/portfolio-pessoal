'use client'
import { useTranslate } from './LanguageProvider'
import Image from 'next/image'
import ResumeViewer from './ResumeViewer'

const AboutSection = () => {
  const t = useTranslate()
  return (
    <section className="section about-section" id="sobre">
      <div className="about-copy">
        <p className="eyebrow">{t('Sobre')}</p>
        <h2>{t('Código, palco e comunidade.')}</h2>
        <p className="about-lead">{t('Sou Larissa Souza, mas todo mundo me chama de Lary. Trabalho com engenharia backend em ecossistemas Java de alta escala, entregando funcionalidades que atravessam vários microsserviços.')}</p>
        <p>{t('Fora do código, construo comunidade. Subo no palco para compartilhar o que aprendi em produção e conversar sobre carreira, inclusão e acessibilidade. Também escrevo conteúdo técnico para quem está começando e para quem já está no meio da jornada.')}</p>
        <p>{t('Acredito na tecnologia como ferramenta para melhorar a vida das pessoas e em comunidades fortes como parte essencial dessa construção.')}</p>
      </div>
      <aside className="about-aside">
        <div className="portrait">
          <div className="portrait-ring">
            <Image
              src="/images/lary/PERFIL.png"
              alt={t('Retrato de Lary Souza sorrindo')}
              fill
              sizes="108px"
            />
          </div>
          <div>
            <strong>Lary Souza</strong>
            <span>{t('Backend engineering + tech community')}</span>
          </div>
        </div>
        <dl className="facts">
          <div>
            <dt>{t('Base')}</dt>
            <dd>{t('São Paulo, Brasil')}</dd>
          </div>
          <div>
            <dt>{t('Foco')}</dt>
            <dd>{t('Engenharia backend')}</dd>
          </div>
          <div>
            <dt>{t('Stack')}</dt>
            <dd>{t('Java, Golang e Kotlin em sistemas de larga escala')}</dd>
          </div>
          <div>
            <dt>{t('Comunidade')}</dt>
            <dd>{t('Palestras, conexões e voluntariado')}</dd>
          </div>
          <div>
            <dt>{t('Idiomas')}</dt>
            <dd>{t('Português, espanhol intermediário e inglês técnico')}</dd>
          </div>
        </dl>
        <ResumeViewer />
      </aside>
    </section>
  )
}

export default AboutSection
