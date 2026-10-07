import Image from 'next/image'
import Link from 'next/link'

const heroSocialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/_lary.souza._',
    icon: '/instagram-icon.svg'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/larissa-a-souza/',
    icon: '/linkedin-icon.svg'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/eu-larissasouza',
    icon: '/github-icon.svg'
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@lary.souzaa',
    icon: '/youtube-icon.png'
  }
]

const HeroSection = () => {
  return (
    <section className="hero" id="inicio" aria-label="Apresentação">
      <figure className="hero-photo">
        <Image
          src="/images/lary/lary-hero.jpg"
          alt="Lary Souza apresentando uma palestra no palco"
          fill
          priority
          sizes="(max-width: 820px) 100vw, 46vw"
        />
      </figure>
      <div className="hero-panel">
        <p className="hero-kicker">Engenharia de software · São Paulo</p>
        <h1>
          <span>Lary</span>
          <span>Souza</span>
        </h1>
        <div className="hero-copy">
          <p className="hero-role">
            Backend engineering <span>+</span> tech community
          </p>
          <p className="hero-lead">
            <span>Mover o mundo através da tecnologia.</span>
            <strong>Evoluir a engenharia através das pessoas.</strong>
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="#palestras">
              Palcos e comunidade
            </Link>
          </div>
          <nav className="hero-socials" aria-label="Redes sociais">
            {heroSocialLinks.map(link => (
              <Link
                className="hero-social-link"
                href={link.href}
                key={link.label}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                title={link.label}
              >
                <Image src={link.icon} alt="" width={24} height={24} />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
