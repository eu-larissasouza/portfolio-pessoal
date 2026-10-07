'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { PhotoIcon } from '@heroicons/react/24/outline'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const moments = [
  {
    title: 'DEV.to',
    year: 'Construção contínua',
    role: 'Escrita técnica · Engenharia de software',
    heading: (
      <>
        Compartilhar aprendizados também faz parte da <em>jornada</em>
      </>
    ),
    summary:
      'Um espaço para compartilhar aprendizados e experiências em tecnologia.',
    description:
      'Ainda estou preparando os primeiros artigos. A ideia é publicar mensalmente e também sempre que surgir algo bacana para compartilhar.',
    topics: ['Escrita técnica', 'Engenharia de software', 'Comunidade'],
    image: '/images/lary/setup-devto.jpg',
    alt: 'Meu setup de trabalho com notebook, teclado e iluminação roxa',
    imageCaption: 'Meu espaço de escrita',
    links: [
      {
        label: 'Acessar perfil',
        href: 'https://dev.to/larysouza'
      }
    ],
    color: 'purple'
  },
  {
    title: 'TDC São Paulo 2026',
    year: 'Setembro de 2026',
    role: 'Palestrante | Painelista',
    heading: (
      <>
        Uma feature, <em>quatro</em> microsserviços
      </>
    ),
    summary: 'Trilha Arquitetura Java · The Developer’s Conference',
    description: (
      <>
        Compartilhei aprendizados de uma feature que atravessa quatro
        microsserviços, com Server-Driven UI, programação reativa e um bug real
        de <code>Mono.zip()</code> num fan-out de sete fontes de dados. Também
        integrei o painel “Arquitetura Java em Tempos de IA: fundamentos,
        contexto e decisões que ainda importam”. Entre palestras, revi pessoas
        queridas e fiz novas conexões.
      </>
    ),
    topics: ['SDUI', 'Java', 'Programação reativa', 'Feature flag'],
    image: '/images/lary/TDCSP2026_palestra.jpg',
    alt: 'Lary Souza participando do painel no TDC São Paulo 2026',
    links: [
      {
        label: 'Slides',
        href: 'https://eu-larissasouza.github.io/tdc2026-uma-feature-4-microsservicos/'
      },
      {
        label: 'Demo interativa',
        href: 'https://eu-larissasouza.github.io/tdc2026-uma-feature-4-microsservicos/demo-mono-zip'
      },
      {
        label: 'Repositório',
        href: 'https://github.com/eu-larissasouza/tdc2026-uma-feature-4-microsservicos'
      }
      /*{
        label: 'Artigo Técnico',
        href: 'https://github.com/eu-larissasouza/tdc2026-uma-feature-4-microsservicos'
      }*/
    ],
    color: 'orange'
  },
  {
    title: 'TDC São Paulo 2025',
    year: 'Setembro de 2025',
    role: 'Painelista',
    heading: (
      <>
        Além da sala de aula: como a comunidade tech transforma a jornada
        universitária
      </>
    ),
    summary: 'Community Lounge · The Developer’s Conference',
    description:
      'Participei do painel “Além da Sala de Aula: Como a Comunidade Tech Transforma a Jornada Universitária”, no Community Lounge do TDC São Paulo 2025.',
    topics: ['Comunidade tech', 'Universidade', 'Carreira'],
    image: '/images/lary/TDC2025-Painel.jpg',
    alt: 'Lary Souza participando do painel no TDC São Paulo 2025',
    links: [
      {
        label: 'Registro no LinkedIn',
        href: 'https://www.linkedin.com/feed/update/urn:li:activity:7377368037416460289/'
      }
    ],
    color: 'blue'
  },
  {
    title: 'IWD São Paulo 2025',
    year: 'Abril de 2025',
    role: 'Voluntária · Social Media · GDG São Paulo',
    heading: (
      <>
        IWD São Paulo: <em>Redefinir o possível</em>
      </>
    ),
    summary: 'Cobertura e conteúdo em tempo real para a comunidade.',
    description:
      'Atuei como voluntária nas mídias sociais do GDG São Paulo, registrando momentos e editando vídeos em tempo real durante o IWD São Paulo 2025.',
    topics: ['Voluntariado', 'Comunicação', 'Comunidade'],
    image: '/images/lary/IWD2025-FotoOficial.png',
    alt: 'Foto oficial do IWD São Paulo 2025, com a comunidade reunida',
    links: [
      {
        label: 'Registro no LinkedIn',
        href: 'https://www.linkedin.com/feed/update/urn:li:activity:7316176871044341762/'
      }
    ],
    color: 'purple'
  },
  {
    title: 'COMPWEEK · UNASP 2024',
    year: 'Outubro de 2024',
    role: 'Palestrante',
    heading: (
      <>
        Codificando um <em>mundo melhor</em>
      </>
    ),
    summary:
      'O papel de quem desenvolve na criação de tecnologia mais inclusiva.',
    description:
      'Na Semana da Computação do Centro Universitário Adventista de São Paulo, falei sobre como profissionais de tecnologia podem criar soluções que promovam inclusão e acessibilidade, inclusive para pessoas com deficiências auditivas ou visuais. Depois da palestra, estudantes me procuraram para conversar sobre um projeto de inclusão na faculdade. Essa troca foi a melhor motivação para atravessar o nervosismo de subir ao palco.',
    topics: ['Inclusão', 'Acessibilidade', 'Carreira'],
    image: '/images/lary/Compweek-Palestra.png',
    alt: 'Lary Souza palestrando na COMPWEEK 2024',
    links: [
      {
        label: 'Palestra no Canva',
        href: 'https://canva.link/hju5c369c8g0yv0'
      },
      {
        label: 'Registro no LinkedIn',
        href: 'https://www.linkedin.com/feed/update/urn:li:activity:7253436810142380032/'
      },
      {
        label: 'Comunidade 7tech',
        href: 'https://www.linkedin.com/company/comunidade7tech/'
      },
      {
        label: 'Italo Gabriel',
        href: 'https://www.linkedin.com/in/italogabrielcs/'
      }
    ],
    color: 'pink'
  },
  {
    title: 'Campus Party 16 · CPBR16',
    year: 'Julho de 2024',
    role: 'Voluntária · GDG São Paulo · Palco Dev',
    heading: (
      <>
        Comunidade em movimento no <em>Palco Dev</em>
      </>
    ),
    summary:
      'Apoio à comunidade GDG São Paulo durante a Campus Party Brasil 16.',
    description:
      'No Palco Dev, apresentei palestrantes ao público, registrei fotos e vídeos e ajudei a acompanhar as transmissões ao vivo no canal da comunidade.',
    topics: ['Voluntariado', 'GDG São Paulo', 'Palco Dev'],
    image: '/images/lary/PalcoDev-CampusParty.jpg',
    alt: 'Lary Souza no Palco Dev durante a Campus Party 16',
    links: [
      {
        label: 'Registro na Campus Party',
        href: 'https://pt.linkedin.com/feed/update/urn:li:activity:7221277205836812289/'
      },
      {
        label: 'Meu primeiro painel',
        href: 'https://www.linkedin.com/feed/update/urn:li:activity:7217185799648251904/'
      }
    ],
    color: 'yellow'
  }
]

const eventPhotos = [
  {
    src: '/images/lary/event-awsome-women.jpg',
    alt: 'Lary Souza de rosa com amigas no AWSome Women Community',
    caption: 'AWSome Women Community'
  },
  {
    src: '/images/lary/event-web-summit.jpg',
    alt: 'Conversa no palco do Web Summit',
    caption: 'Web Summit'
  },
  {
    src: '/images/lary/event-meli.jpg',
    alt: 'Grupo reunido em frente ao palco do MELI Celebra',
    caption: 'MELI Celebra'
  },
  {
    src: '/images/lary/event-fiap-next.jpg',
    alt: 'Quatro mulheres em frente ao painel Feel the Future',
    caption: 'FIAP · Next'
  }
]

export default function CommunitySection() {
  const [active, setActive] = useState(0)
  const activeMomentRef = useRef(null)
  const shouldScrollToMomentRef = useRef(false)

  useEffect(() => {
    if (!shouldScrollToMomentRef.current) return

    shouldScrollToMomentRef.current = false
    const activeMoment = activeMomentRef.current
    if (!activeMoment) return

    const scrollToActiveMoment = () => {
      const stickyHeaderHeight =
        document.querySelector('.topbar')?.getBoundingClientRect().height ?? 0
      const targetTop =
        window.scrollY +
        activeMoment.getBoundingClientRect().top -
        stickyHeaderHeight -
        10

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'auto'
          : 'smooth'
      })
    }
    const activeCard = activeMoment.closest('.event-card')

    if (!activeCard) {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(scrollToActiveMoment)
      })
      return
    }

    const handleTransitionEnd = event => {
      if (event.target === activeCard && event.propertyName === 'transform') {
        window.clearTimeout(fallbackTimeout)
        activeCard.removeEventListener('transitionend', handleTransitionEnd)
        scrollToActiveMoment()
      }
    }
    const fallbackTimeout = window.setTimeout(() => {
      activeCard.removeEventListener('transitionend', handleTransitionEnd)
      scrollToActiveMoment()
    }, 500)

    activeCard.addEventListener('transitionend', handleTransitionEnd)

    return () => {
      window.clearTimeout(fallbackTimeout)
      activeCard.removeEventListener('transitionend', handleTransitionEnd)
    }
  }, [active])

  const selectMoment = index => {
    if (index === active) return

    shouldScrollToMomentRef.current = true
    setActive(index)
  }

  const changeMoment = direction => {
    selectMoment((active + direction + moments.length) % moments.length)
  }

  return (
    <>
      <section className="section stages-section" id="palestras">
        <p className="eyebrow">Palcos e bastidores</p>
        <h2>Lugares por onde passei</h2>
        <p className="stages-lede">
          Selecione um evento para explorar fotos, materiais e registros
          disponíveis.
        </p>
        <div
          className="event-stack"
          style={{ '--event-count': moments.length }}
          aria-label="Momentos em palestras e comunidade"
        >
          {moments.map((item, index) => {
            const distance = (index - active + moments.length) % moments.length
            const isActive = distance === 0

            return (
              <article
                className={`event-card event-${item.color}${isActive ? ' is-front' : ''}`}
                key={item.title}
                style={{
                  '--distance': distance,
                  '--layer': moments.length - distance
                }}
              >
                <button
                  className="event-tab"
                  type="button"
                  aria-pressed={isActive}
                  aria-label={`Ver momento: ${item.title}`}
                  onClick={() => selectMoment(index)}
                >
                  <span>{item.title}</span>
                  <small>{item.year}</small>
                </button>
                {isActive && (
                  <div className="event-body">
                    <div className="event-copy" ref={activeMomentRef}>
                      <p className="event-kicker">
                        {item.title} <span>{item.year}</span>
                      </p>
                      <p className="event-role">{item.role}</p>
                      <h3>{item.heading}</h3>
                      <p className="event-summary">{item.summary}</p>
                      <p className="event-description">{item.description}</p>
                      <ul className="topic-list" aria-label="Temas">
                        {item.topics.map(topic => (
                          <li key={topic}>{topic}</li>
                        ))}
                      </ul>
                      {item.links && (
                        <div>
                          <p className="event-links-label">
                            Materiais e registros
                          </p>
                          <div className="event-links">
                            {item.links.map(link => (
                              <a
                                className="button button-primary"
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {link.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    {item.image ? (
                      <figure
                        className={`event-media${item.imageCaption ? ' event-media--portrait' : ''}`}
                      >
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          sizes="(max-width: 820px) 100vw, 38vw"
                        />
                        {item.imageCaption && (
                          <figcaption className="event-media-caption">
                            {item.imageCaption}
                          </figcaption>
                        )}
                      </figure>
                    ) : (
                      <figure
                        className="event-media event-photo-slot"
                        role="img"
                        aria-label={`${item.visualCaption || 'Espaço reservado para foto'}: ${item.title}`}
                      >
                        {item.visualLabel ? (
                          <strong className="event-platform-mark">
                            {item.visualLabel}
                          </strong>
                        ) : (
                          <PhotoIcon aria-hidden="true" />
                        )}
                        <figcaption>
                          <span>{item.visualCaption || 'Registro visual'}</span>
                          <strong>{item.title}</strong>
                        </figcaption>
                      </figure>
                    )}
                  </div>
                )}
              </article>
            )
          })}
        </div>
        <div className="event-controls">
          <p>Um pouco do que construí e aprendi em cada encontro.</p>
          <div className="event-pager">
            <button
              type="button"
              aria-label="Momento anterior"
              onClick={() => changeMoment(-1)}
            >
              <ChevronLeftIcon />
            </button>
            <span aria-live="polite">
              {String(active + 1).padStart(2, '0')} /{' '}
              {String(moments.length).padStart(2, '0')}
            </span>
            <button
              type="button"
              aria-label="Próximo momento"
              onClick={() => changeMoment(1)}
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </section>

      <section
        className="section events-section"
        aria-labelledby="events-title"
      >
        <div className="events-intro">
          <div className="events-intro-copy">
            <p className="eyebrow">Tecnologia, pessoas e conexões</p>
            <h2 id="events-title">
              Aprender junto, criar conexões que permanecem.
            </h2>
            <p className="events-lede">
              Em eventos, aprendo nas palestras e também nas conversas entre uma
              sessão e outra. Conheço pessoas novas, reencontro quem já faz
              parte da minha trajetória e troco experiências com profissionais
              que admiro. Cada encontro amplia meu olhar sobre tecnologia e
              comunidade, e geram conexões que vão muito além de um evento.
            </p>
          </div>
          <figure className="events-notebook">
            <Image
              src="/images/lary/computer-illustration.png"
              alt="Ilustração de um notebook com código e uma xícara de café"
              width={439}
              height={285}
              sizes="(max-width: 820px) 80vw, 30vw"
            />
          </figure>
        </div>
        <ul className="event-gallery">
          {eventPhotos.map((photo, index) => (
            <li key={photo.caption}>
              <figure>
                <div className="gallery-image">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 700px) 48vw, 24vw"
                  />
                </div>
                <figcaption>
                  <span>0{index + 1}</span>
                  {photo.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
