'use client'
import { useTranslate } from './LanguageProvider'
const experiences = [
  {
    role: 'Software Engineer',
    organization: 'Mercado Livre · vertical de Pharma',
    period: 'Atual',
    description:
      'Atuação backend com Java, Spring Boot, Project Reactor e Go, em desenvolvimento, arquitetura, sustentação, testes automatizados e observabilidade. Participação em iniciativas no Brasil, México e Argentina.'
  },
  {
    role: 'IT Bootcamp · Java, Wave 10',
    organization: 'Mercado Livre · formação intensiva',
    period: 'dez. 2024 — mar. 2025',
    description:
      'Formação prática em Java, Spring Boot, desenvolvimento backend e padrões de engenharia do ecossistema Mercado Livre.'
  },
  {
    role: 'Estagiária de Engenharia de Software',
    organization: 'Itaú Unibanco',
    period: 'jun. 2024 — dez. 2024',
    description:
      'Desenvolvimento backend com Java, uso de serviços AWS como SQS e documentação técnica.'
  },
  {
    role: 'Monitoração Técnica · Centro de Comando',
    organization: 'Núclea',
    period: 'fev. 2024 — abr. 2024',
    description:
      'Acompanhamento da operação e disponibilidade de sistemas críticos, com ferramentas de monitoração e apoio à documentação operacional.'
  },
  {
    role: 'Analista de Sistemas Júnior',
    organization: 'Kiman Solutions',
    period: 'ago. 2022 — nov. 2023',
    description:
      'Desenvolvimento e evolução de produtos, migrações técnicas e investigação de problemas com Java.'
  },
  {
    role: 'Estagiária de Desenvolvimento',
    organization: 'Kiman Solutions',
    period: 'ago. 2021 — ago. 2022',
    description:
      'Formação em SQL, PL/SQL, Java e React, seguida de atuação na área de Engenharia de Produto.'
  }
]

const education = [
  {
    course: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Tecnólogo · Senac São Paulo · transferência externa',
    period: 'em andamento · previsão dez. 2027'
  },
  {
    course: 'Sistemas de Informação',
    institution: 'Bacharelado · FIAP',
    period: 'ago. 2023 — abr. 2026 · não concluído',
    description:
      'Conhecimentos da graduação aproveitados na transferência externa para ADS no Senac São Paulo.'
  },
  {
    course: 'Informática',
    institution: 'Técnico integrado · IFSP',
    period: 'fev. 2019 — dez. 2022'
  }
]

function Timeline({ items, renderItem }) {
  return (
    <div className="trajectory-list">
      {items.map(item => (
        <article className="trajectory-item" key={item.role || item.course}>
          {renderItem(item)}
        </article>
      ))}
    </div>
  )
}

export default function JourneySection() {
  const t = useTranslate()
  return (
    <section className="section trajectory-section" id="trajetoria">
      <p className="eyebrow">{t('Trajetória')}</p>
      <h2>{t('Experiência e formação.')}</h2>
      <div className="trajectory-grid">
        <div className="trajectory-column">
          <h3>{t('Experiência profissional')}</h3>
          <Timeline
            items={experiences}
            renderItem={experience => (
              <>
                <div className="trajectory-item-heading">
                  <h4>{t(experience.role)}</h4>
                  <span className="trajectory-period">{t(experience.period)}</span>
                </div>
                <p className="trajectory-organization">
                  {t(experience.organization)}
                </p>
                <p className="trajectory-description">
                  {t(experience.description)}
                </p>
              </>
            )}
          />
        </div>
        <div className="trajectory-column">
          <h3>{t('Formação acadêmica')}</h3>
          <Timeline
            items={education}
            renderItem={course => (
              <>
                <div className="trajectory-item-heading">
                  <h4>{t(course.course)}</h4>
                  <span className="trajectory-period">{t(course.period)}</span>
                </div>
                <p className="trajectory-organization">{t(course.institution)}</p>
                {course.description && (
                  <p className="trajectory-description">
                    {t(course.description)}
                  </p>
                )}
              </>
            )}
          />
        </div>
      </div>
    </section>
  )
}
