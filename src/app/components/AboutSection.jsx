import Image from 'next/image'
import ResumeViewer from './ResumeViewer'

const AboutSection = () => {
  return (
    <section className="section about-section" id="sobre">
      <div className="about-copy">
        <p className="eyebrow">Sobre</p>
        <h2>Código, palco e comunidade.</h2>
        <p className="about-lead">
          Sou Larissa Souza, mas todo mundo me chama de Lary. Trabalho com
          engenharia backend em ecossistemas Java de alta escala, entregando
          funcionalidades que atravessam vários microsserviços.
        </p>
        <p>
          Fora do código, construo comunidade. Subo no palco para compartilhar o
          que aprendi em produção e conversar sobre carreira, inclusão e
          acessibilidade. Também escrevo conteúdo técnico para quem está
          começando e para quem já está no meio da jornada.
        </p>
        <p>
          Acredito na tecnologia como ferramenta para melhorar a vida das
          pessoas e em comunidades fortes como parte essencial dessa construção.
        </p>
      </div>
      <aside className="about-aside">
        <div className="portrait">
          <div className="portrait-ring">
            <Image
              src="/images/lary/PERFIL.png"
              alt="Retrato de Lary Souza sorrindo"
              fill
              sizes="108px"
            />
          </div>
          <div>
            <strong>Lary Souza</strong>
            <span>Backend engineering + tech community</span>
          </div>
        </div>
        <dl className="facts">
          <div>
            <dt>Base</dt>
            <dd>São Paulo, Brasil</dd>
          </div>
          <div>
            <dt>Foco</dt>
            <dd>Engenharia backend</dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>Java, Golang e Kotlin em sistemas de larga escala</dd>
          </div>
          <div>
            <dt>Comunidade</dt>
            <dd>Palestras, conexões e voluntariado</dd>
          </div>
          <div>
            <dt>Idiomas</dt>
            <dd>Português, espanhol intermediário e inglês técnico</dd>
          </div>
        </dl>
        <ResumeViewer />
      </aside>
    </section>
  )
}

export default AboutSection
