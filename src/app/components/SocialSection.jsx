import Image from 'next/image'
import {
  ChatBubbleLeftRightIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'

const links = [
  {
    label: 'Instagram',
    value: '@_lary.souza._',
    href: 'https://instagram.com/_lary.souza._',
    icon: '/instagram-icon.svg'
  },
  {
    label: 'LinkedIn',
    value: 'in/larissa-a-souza',
    href: 'https://www.linkedin.com/in/larissa-a-souza/',
    icon: '/linkedin-icon.svg'
  },
  {
    label: 'YouTube',
    value: '@lary.souzaa',
    href: 'https://www.youtube.com/@lary.souzaa',
    icon: '/youtube-icon.png'
  },
  {
    label: 'GitHub',
    value: 'eu-larissasouza',
    href: 'https://github.com/eu-larissasouza',
    icon: '/github-icon.svg'
  },
  {
    label: 'E-mail',
    value: 'Vamos conversar',
    href: 'mailto:larissa.alves.souza@outlook.com',
    icon: EnvelopeIcon
  },
  {
    label: 'Fale comigo',
    value: 'Vamos construir algo incrível juntos?',
    href: 'https://forms.gle/XwR1H4HrFyQ4HgHq7',
    icon: ChatBubbleLeftRightIcon
  }
]

export default function SocialSection() {
  return (
    <section className="section social-section" id="redes">
      <p className="eyebrow">Conecte-se comigo</p>
      <h2>Acompanhe a minha jornada</h2>
      <p className="social-lede">
        Bastidores, tecnologia e conversas sobre construir software e
        comunidade.
      </p>
      <div className="social-links">
        {links.map(link => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
          >
            <span className="social-icon" aria-hidden="true">
              {typeof link.icon === 'string' ? (
                <Image src={link.icon} alt="" width={24} height={24} />
              ) : (
                <link.icon />
              )}
            </span>
            <span>
              <small>{link.label}</small>
              <strong>{link.value}</strong>
            </span>
            <span className="social-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
      </div>
      <div className="closing-panel">
        <p>Obrigada por passar por aqui</p>
        <h3>
          Aprecie cada momento da sua <span>jornada.</span>
        </h3>
        <strong className="signature">
          Keep building. Keep learning. Keep sharing.
        </strong>
      </div>
    </section>
  )
}
