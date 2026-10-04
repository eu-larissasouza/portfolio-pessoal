import Image from 'next/image'

const focusAreas = [
  {
    number: '01',
    title: 'Engenharia backend',
    icon: '/images/lary/microsservicos-noite.svg',
    color: 'orange',
    description:
      'Atuando com backend em Java, Golang e Kotlin em sistemas de larga escala. Funcionalidades distribuídas com contratos claros, testes automatizados, observabilidade e qualidade.'
  },
  {
    number: '02',
    title: 'Palestras',
    icon: '/images/lary/palestra-creme.svg',
    color: 'pink',
    description:
      'Conteúdo técnico e de carreira em conferências e eventos universitários, de arquitetura Java a inclusão e acessibilidade.'
  },
  {
    number: '03',
    title: 'Comunidade',
    icon: '/images/lary/comunidade-creme.svg',
    color: 'purple',
    description:
      'Também me voluntario para contribuir com comunidades em eventos, compartilhar aprendizados e aproximar mais pessoas da tecnologia.'
  },
  {
    number: '04',
    title: 'Mentoria',
    icon: '/images/lary/jornada-creme.svg',
    color: 'blue',
    description:
      'Estou explorando a área de mentoria como meu próximo passo, para apoiar quem está construindo carreira em tecnologia.',
    next: true
  }
]

export default function FocusSection() {
  return (
    <section className="section focus-section" id="areas">
      <p className="eyebrow">Áreas</p>
      <h2>Onde eu atuo</h2>
      <div className="focus-grid">
        {focusAreas.map(area => (
          <article
            className={`focus-item${area.next ? ' focus-next' : ''}`}
            key={area.number}
          >
            <span
              className={`focus-icon focus-icon-${area.color}`}
              aria-hidden="true"
            >
              <Image
                src={area.icon}
                alt=""
                width={60}
                height={60}
                sizes="60px"
              />
            </span>
            <span className="focus-number">
              {area.number}
              {area.next && <small>Próximo passo</small>}
            </span>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
