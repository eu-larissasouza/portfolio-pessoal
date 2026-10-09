'use client'
import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext({ language: 'pt', setLanguage: () => {} })
const locale = { pt: 'pt-BR', en: 'en', es: 'es' }
const translations = {
  'São Paulo, Brasil': ['São Paulo, Brazil', 'São Paulo, Brasil'],
  'Atuando com backend em Java, Golang e Kotlin em sistemas de larga escala. Funcionalidades distribuídas com contratos claros, testes automatizados, observabilidade e qualidade.': [
      'Working on backend systems with Java, Go, and Kotlin at scale. Distributed features with clear contracts, automated tests, observability, and quality.',
      'Trabajo en sistemas backend con Java, Go y Kotlin a gran escala. Funcionalidades distribuidas con contratos claros, pruebas automatizadas, observabilidad y calidad.'
    ],
  'Conteúdo técnico e de carreira em conferências e eventos universitários, de arquitetura Java a inclusão e acessibilidade.': [
      'Technical and career content at conferences and university events, from Java architecture to inclusion and accessibility.',
      'Contenido técnico y de carrera en conferencias y eventos universitarios, desde arquitectura Java hasta inclusión y accesibilidad.'
    ],
  'Também me voluntario para contribuir com comunidades em eventos, compartilhar aprendizados e aproximar mais pessoas da tecnologia.': [
      'I also volunteer at events to support communities, share what I learn, and bring more people into technology.',
      'También hago voluntariado en eventos para apoyar comunidades, compartir aprendizajes y acercar a más personas a la tecnología.'
    ],
  'Estou explorando a área de mentoria como meu próximo passo, para apoiar quem está construindo carreira em tecnologia.': [
      'I’m exploring mentorship as my next step, to support people building a career in technology.',
      'Estoy explorando la mentoría como próximo paso para apoyar a quienes construyen una carrera en tecnología.'
    ],
  'Bastidores, tecnologia e conversas sobre construir software e comunidade.': [
    'Behind the scenes, technology, and conversations about building software and community.',
    'Detrás de escena, tecnología y conversaciones sobre cómo construir software y comunidad.'
  ],
  'Vamos conversar': ['Let’s talk', 'Hablemos'],
  'Vamos construir algo incrível juntos?': [
    'Shall we build something great together?',
    '¿Construimos algo increíble juntos?'
  ],
  'Aprecie cada momento da sua jornada.': [
    'Enjoy every moment of your journey.',
    'Disfruta cada momento de tu recorrido.'
  ],
  'Software Engineer': ['Software Engineer', "Ingeniera de software (Software Engineer)"],
  Atual: ['Present', 'Actualidad'],
  'Atuação backend com Java, Spring Boot, Project Reactor e Go, em desenvolvimento, arquitetura, sustentação, testes automatizados e observabilidade. Participação em iniciativas no Brasil, México e Argentina.': [
      'Backend work with Java, Spring Boot, Project Reactor, and Go across development, architecture, operations, automated testing, and observability. Contributing to initiatives in Brazil, Mexico, and Argentina.',
      'Trabajo backend con Java, Spring Boot, Project Reactor y Go en desarrollo, arquitectura, mantenimiento, pruebas automatizadas y observabilidad. Participación en iniciativas en Brasil, México y Argentina.'
    ],
  'Técnico integrado · IFSP': ['Integrated technical program · IFSP', "Formación técnica integrada · IFSP"],
  'Análise e Desenvolvimento de Sistemas': [
    'Systems Analysis and Development',
    'Análisis y Desarrollo de Sistemas'
  ],
  'Tecnólogo · Senac São Paulo · transferência externa': [
    'Technology degree · Senac São Paulo · transfer student',
    'Tecnólogo · Senac São Paulo · transferencia externa'
  ],
  Sobre: ['About', 'Sobre mí'],
  'Código, palco e comunidade.': [
    'Code, stage, and community.',
    'Código, escenario y comunidad.'
  ],
  'Sou Larissa Souza, mas todo mundo me chama de Lary. Trabalho com engenharia backend em ecossistemas Java de alta escala, entregando funcionalidades que atravessam vários microsserviços.': [
      'I’m Larissa Souza, though everyone calls me Lary. I work in backend engineering across large-scale Java ecosystems, delivering features that span multiple microservices.',
      'Soy Larissa Souza, aunque todos me llaman Lary. Trabajo en ingeniería backend en ecosistemas Java de gran escala y desarrollo funcionalidades que abarcan varios microservicios.'
    ],
  'Fora do código, construo comunidade. Subo no palco para compartilhar o que aprendi em produção e conversar sobre carreira, inclusão e acessibilidade. Também escrevo conteúdo técnico para quem está começando e para quem já está no meio da jornada.': [
      'Beyond code, I build community. I take the stage to share what I’ve learned in production and talk about careers, inclusion, and accessibility. I also write technical content for people starting out and those already on the journey.',
      'Además del código, construyo comunidad. Subo al escenario para compartir lo que aprendí en producción y hablar sobre carrera, inclusión y accesibilidad. También escribo contenido técnico para quienes comienzan y quienes ya están en el camino.'
    ],
  'Acredito na tecnologia como ferramenta para melhorar a vida das pessoas e em comunidades fortes como parte essencial dessa construção.': [
      'I believe technology can improve people’s lives, and strong communities are an essential part of making that happen.',
      'Creo que la tecnología puede mejorar la vida de las personas y que las comunidades sólidas son esenciales para lograrlo.'
    ],
  Base: ['Location', 'Ubicación'],
  Foco: ['Focus', 'Enfoque'],
  'Engenharia backend': ['Backend engineering', 'Ingeniería backend'],
  'Backend engineering + Tech community': [
    'Backend engineering + Tech community',
    'Backend engineering + Tech community'
  ],
  Stack: ['Tech stack', 'Tecnologías'],
  'Java, Golang e Kotlin em sistemas de larga escala': [
    'Java, Go, and Kotlin in large scale systems',
    'Java, Go y Kotlin en sistemas de gran escala'
  ],
  Comunidade: ['Community', 'Comunidad'],
  'Palestras, conexões e voluntariado': [
    'Talks, connections, and volunteering',
    'Charlas, conexiones y voluntariado'
  ],
  Idiomas: ['Languages', 'Idiomas'],
  'Português, espanhol intermediário e inglês técnico': [
    'Portuguese, intermediate Spanish, and technical English',
    'Portugués, español intermedio e inglés técnico'
  ],
  'Retrato de Lary Souza sorrindo': [
    'Portrait of Lary Souza smiling',
    'Retrato de Lary Souza sonriendo'
  ],
  'Ver currículo': ['View résumé', 'Ver currículum'],
  'Palcos e comunidade': ['Talks and community', 'Charlas y comunidad'],
  'Engenharia de software · São Paulo': [
    'Software engineering · São Paulo',
    'Ingeniería de software · São Paulo'
  ],
  'Mover o mundo através da tecnologia.': [
    'Move the world through technology.',
    'Mover el mundo a través de la tecnología.'
  ],
  'Evoluir a engenharia através das pessoas.': [
    'Advance engineering through people.',
    'Hacer evolucionar la ingeniería a través de las personas.'
  ],
  Apresentação: ['Introduction', 'Presentación'],
  'Redes sociais': ['Social media', 'Redes sociales'],
  Trajetória: ['Journey', 'Trayectoria'],
  'Experiência e formação.': [
    'Experience and education.',
    'Experiencia y formación.'
  ],
  'Experiência profissional': [
    'Professional experience',
    'Experiencia profesional'
  ],
  'Formação acadêmica': ['Education', 'Formación académica'],
  Áreas: ['Focus areas', 'Áreas'],
  'Onde eu atuo': ['What I do', 'A qué me dedico'],
  'Próximo passo': ['Next step', 'Próximo paso'],
  'Conecte-se comigo': ['Connect with me', 'Conecta conmigo'],
  'Acompanhe a minha jornada': ['Follow my journey', 'Acompaña mi recorrido'],
  'Obrigada por passar por aqui': [
    'Thanks for stopping by',
    'Gracias por pasar por aquí'
  ],
  'Aprecie cada momento da sua': [
    'Enjoy every moment of your',
    'Disfruta cada momento de tu'
  ],
  'Feito com Amor': ['Made with love', 'Hecho con amor'],
  'Voltar ao início': ['Back to top', 'Volver al inicio'],
  'Lugares por onde passei': [
    'Places I’ve been',
    'Lugares por los que he pasado'
  ],
  'Palcos e bastidores': [
    'Talks and behind the scenes',
    'Charlas y detrás de escena'
  ],
  'Selecione um evento para explorar fotos, materiais e registros disponíveis.': [
      'Select an event to explore available photos, materials, and highlights.',
      'Selecciona un evento para explorar fotos, materiales y registros disponibles.'
    ],
  'Materiais e registros': [
    'Materials and highlights',
    'Materiales y registros'
  ],
  'Um pouco do que construí e aprendi em cada encontro.': [
    'A little of what I built and learned at each event.',
    'Un poco de lo que construí y aprendí en cada encuentro.'
  ],
  'Atuação backend com Java, Golang e Kotlin em sistemas de larga escala. Funcionalidades distribuídas com contratos claros, testes automatizados, observabilidade e qualidade.': [
      'Backend engineering with Java, Go, and Kotlin in large-scale systems. Distributed features with clear contracts, automated tests, observability, and quality.',
      'Trabajo backend con Java, Go y Kotlin en sistemas a gran escala. Funcionalidades distribuidas con contratos claros, pruebas automatizadas, observabilidad y calidad.'
    ],
  Palestras: ['Talks', 'Charlas'],
  Mentoria: ['Mentorship', 'Mentoría'],
  'Mercado Livre · vertical de Pharma': [
    'Mercado Livre · Pharma vertical',
    'Mercado Livre · vertical de Pharma'
  ],
  'Mercado Livre · formação intensiva': [
    'Mercado Livre · intensive training',
    'Mercado Livre · formación intensiva'
  ],
  'IT Bootcamp · Java, Wave 10': [
    'IT Bootcamp · Java, Wave 10',
    'Bootcamp de TI · Java, Wave 10'
  ],
  'Estagiária de Engenharia de Software': [
    'Software Engineering Intern',
    'Pasante de Ingeniería de Software'
  ],
  'Monitoração Técnica · Centro de Comando': [
    'Technical Monitoring · Command Center',
    'Monitoreo Técnico · Centro de Comando'
  ],
  'Analista de Sistemas Júnior': [
    'Junior Systems Analyst',
    'Analista de Sistemas Junior'
  ],
  'Estagiária de Desenvolvimento': [
    'Development Intern',
    'Pasante de Desarrollo'
  ],
  'Formação prática em Java, Spring Boot, desenvolvimento backend e padrões de engenharia do ecossistema Mercado Livre.': [
      'Hands-on training in Java, Spring Boot, backend development, and engineering practices across Mercado Livre’s ecosystem.',
      'Formación práctica en Java, Spring Boot, desarrollo backend y prácticas de ingeniería del ecosistema de Mercado Livre.'
    ],
  'Desenvolvimento backend com Java, uso de serviços AWS como SQS e documentação técnica.': [
      'Backend development with Java, AWS services such as SQS, and technical documentation.',
      'Desarrollo backend con Java, servicios de AWS como SQS y documentación técnica.'
    ],
  'Acompanhamento da operação e disponibilidade de sistemas críticos, com ferramentas de monitoração e apoio à documentação operacional.': [
      'Monitoring the operation and availability of critical systems, using monitoring tools and supporting operational documentation.',
      'Seguimiento de la operación y disponibilidad de sistemas críticos, con herramientas de monitoreo y apoyo a la documentación operativa.'
    ],
  'Desenvolvimento e evolução de produtos, migrações técnicas e investigação de problemas com Java.': [
      'Product development and evolution, technical migrations, and Java issue investigation.',
      'Desarrollo y evolución de productos, migraciones técnicas e investigación de problemas con Java.'
    ],
  'Formação em SQL, PL/SQL, Java e React, seguida de atuação na área de Engenharia de Produto.': [
      'Training in SQL, PL/SQL, Java, and React, followed by work in Product Engineering.',
      'Formación en SQL, PL/SQL, Java y React, seguida de trabajo en Ingeniería de Producto.'
    ],
  'em andamento · previsão dez. 2027': [
    'In progress · expected Dec. 2027',
    'En curso · previsto dic. 2027'
  ],
  'Bacharelado · FIAP': ['Bachelor’s degree · FIAP', 'Licenciatura · FIAP'],
  'ago. 2023 — abr. 2026 · não concluído': [
    'Aug. 2023 — Apr. 2026 · not completed',
    'ago. 2023 — abr. 2026 · sin concluir'
  ],
  'Conhecimentos da graduação aproveitados na transferência externa para ADS no Senac São Paulo.': [
      'Coursework applied toward an external transfer to the Systems Analysis and Development program at Senac São Paulo.',
      'Conocimientos aprovechados en el traslado externo a Análisis y Desarrollo de Sistemas en Senac São Paulo.'
    ],
  'ago. 2021 — ago. 2022': ['Aug. 2021 — Aug. 2022', 'ago. 2021 — ago. 2022'],
  'ago. 2022 — nov. 2023': ['Aug. 2022 — Nov. 2023', 'ago. 2022 — nov. 2023'],
  'jun. 2024 — dez. 2024': ['Jun. 2024 — Dec. 2024', 'jun. 2024 — dic. 2024'],
  'fev. 2024 — abr. 2024': ['Feb. 2024 — Apr. 2024', 'feb. 2024 — abr. 2024'],
  'dez. 2024 — mar. 2025': ['Dec. 2024 — Mar. 2025', 'dic. 2024 — mar. 2025'],
  'fev. 2019 — dez. 2022': ['Feb. 2019 — Dec. 2022', 'feb. 2019 — dic. 2022'],
  'Backend engineering + tech community': [
    'Backend engineering + tech community',
    'Ingeniería backend + comunidad tecnológica'
  ],
  'Fechar currículo': ['Close résumé', 'Cerrar currículum'],
  'Currículo · Larissa Souza': [
    'Résumé · Larissa Souza',
    'Currículum · Larissa Souza'
  ],
  'Abrir PDF em outra aba': [
    'Open PDF in a new tab',
    'Abrir PDF en otra pestaña'
  ],
  'Currículo de Larissa Souza': [
    'Résumé of Larissa Souza',
    'Currículum de Larissa Souza'
  ],
  'Lary Souza apresentando uma palestra no palco': [
    'Lary Souza giving a talk on stage',
    'Lary Souza dando una charla en el escenario'
  ],
  'Momento anterior': ['Previous event', 'Evento anterior'],
  'Próximo momento': ['Next event', 'Próximo evento'],
  Temas: ['Topics', 'Temas'],
  'Tecnologia, pessoas e conexões': [
    'Technology, people, and connections',
    'Tecnología, personas y conexiones'
  ],
  'Aprender junto, criar conexões que permanecem.': [
    'Learning together and building lasting connections.',
    'Aprender juntos y crear conexiones duraderas.'
  ],
  'Em eventos, aprendo nas palestras e também nas conversas entre uma sessão e outra. Conheço pessoas novas, reencontro quem já faz parte da minha trajetória e troco experiências com profissionais que admiro. Cada encontro amplia meu olhar sobre tecnologia e comunidade, e geram conexões que vão muito além de um evento.': [
      'At events, I learn from the talks and from the conversations between sessions. I meet new people, reconnect with those already in my life, and exchange ideas with professionals I admire. Every gathering broadens my view of technology and community and creates connections that last beyond the event.',
      'En los eventos, aprendo en las charlas y también en las conversaciones entre sesiones. Conozco gente nueva, me reencuentro con quienes ya forman parte de mi recorrido e intercambio experiencias con profesionales que admiro. Cada encuentro amplía mi mirada sobre tecnología y comunidad y crea vínculos que van más allá del evento.'
    ],
  'Ilustração de um notebook com código e uma xícara de café': [
    'Illustration of a laptop with code and a cup of coffee',
    'Ilustración de una laptop con código y una taza de café'
  ],
  'Espaço reservado para foto': [
    'Photo placeholder',
    'Espacio reservado para foto'
  ],
  'Registro visual': ['Photo highlight', 'Registro visual'],
  'Ver momento:': ['View event:', 'Ver evento:'],
  'Escrita técnica · Engenharia de software': [
    'Technical writing · Software engineering',
    'Redacción técnica · Ingeniería de software'
  ],
  'Compartilhar aprendizados também faz parte da jornada': [
    'Sharing what I learn is part of the journey too',
    'Compartir lo aprendido también forma parte del camino'
  ],
  'Um espaço para compartilhar aprendizados e experiências em tecnologia.': [
    'A space to share what I learn and my experiences in technology.',
    'Un espacio para compartir aprendizajes y experiencias en tecnología.'
  ],
  'Ainda estou preparando os primeiros artigos. A ideia é publicar mensalmente e também sempre que surgir algo bacana para compartilhar.': [
      'I’m preparing my first articles. I plan to publish monthly and whenever I have something useful to share.',
      'Estoy preparando mis primeros artículos. La idea es publicar cada mes y también cuando surja algo interesante para compartir.'
    ],
  'Escrita técnica': ['Technical writing', 'Redacción técnica'],
  'Acessar perfil': ['Visit profile', 'Visitar perfil'],
  'Construção contínua': ['Ongoing', 'En construcción continua'],
  'Setembro de 2026': ['September 2026', 'Septiembre de 2026'],
  'Palestrante | Painelista': ['Speaker | Panelist', 'Ponente | Panelista'],
  'Uma feature, quatro microsserviços': [
    'One feature, four microservices',
    'Una funcionalidad, cuatro microservicios'
  ],
  'Trilha Arquitetura Java · The Developer’s Conference': [
    'Java Architecture track · The Developer’s Conference',
    'Track de Arquitectura Java · The Developer’s Conference'
  ],
  'Compartilhei aprendizados de uma feature que atravessa quatro microsserviços, com Server-Driven UI, programação reativa e um bug real de Mono.zip() num fan-out de sete fontes de dados. Também integrei o painel “Arquitetura Java em Tempos de IA: fundamentos, contexto e decisões que ainda importam”. Entre palestras, revi pessoas queridas e fiz novas conexões.': [
      'I shared lessons from a feature spanning four microservices, using Server-Driven UI and reactive programming, including a real Mono.zip() bug in a fan-out across seven data sources. I also joined the panel “Java Architecture in the Age of AI: fundamentals, context, and decisions that still matter.” Between talks, I reconnected with friends and made new connections.',
      'Compartí aprendizajes de una funcionalidad que atraviesa cuatro microservicios, con Server-Driven UI, programación reactiva y un error real de Mono.zip() en una distribución fan-out (reparto de solicitudes) entre siete fuentes de datos. También participé en el panel “Arquitectura Java en tiempos de IA: fundamentos, contexto y decisiones que aún importan”. Entre charlas, reencontré a personas queridas e hice nuevas conexiones.'
    ],
  'Programação reativa': ['Reactive programming', 'Programación reactiva'],
  'Demo interativa': ['Interactive demo', 'Demo interactiva'],
  Slides: ['Slides', 'Diapositivas'],
  Repositório: ['Repository', 'Repositorio'],
  'Setembro de 2025': ['September 2025', 'Septiembre de 2025'],
  Painelista: ['Panelist', 'Panelista'],
  'Além da sala de aula: como a comunidade tech transforma a jornada universitária': [
      'Beyond the classroom: how tech communities shape the university journey',
      'Más allá del aula: cómo la comunidad tecnológica transforma la vida universitaria'
    ],
  'Community Lounge · The Developer’s Conference': [
    'Community Lounge · The Developer’s Conference',
    'Community Lounge · The Developer’s Conference'
  ],
  'Participei do painel “Além da Sala de Aula: Como a Comunidade Tech Transforma a Jornada Universitária”, no Community Lounge do TDC São Paulo 2025.': [
      'I joined the panel “Beyond the Classroom: How the Tech Community Shapes the University Journey” at the TDC São Paulo 2025 Community Lounge.',
      'Participé en el panel “Más allá del aula: cómo la comunidad tecnológica transforma la vida universitaria”, en el Community Lounge del TDC São Paulo 2025.'
    ],
  'Registro no LinkedIn': ['LinkedIn post', 'Publicación de LinkedIn'],
  'Comunidade tech': ['Tech community', 'Comunidad tecnológica'],
  'Abril de 2025': ['April 2025', 'Abril de 2025'],
  'Voluntária · Social Media · GDG São Paulo': [
    'Volunteer · Social media · GDG São Paulo',
    'Voluntaria · Redes sociales · GDG São Paulo'
  ],
  'IWD São Paulo: Redefinir o possível': [
    'IWD São Paulo: Redefining what’s possible',
    'IWD São Paulo: Redefinir lo posible'
  ],
  'Cobertura e conteúdo em tempo real para a comunidade.': [
    'Live coverage and content for the community.',
    'Cobertura y contenido en tiempo real para la comunidad.'
  ],
  'Atuei como voluntária nas mídias sociais do GDG São Paulo, registrando momentos e editando vídeos em tempo real durante o IWD São Paulo 2025.': [
      'I volunteered with GDG São Paulo’s social media team, capturing moments and editing videos in real time during IWD São Paulo 2025.',
      'Fui voluntaria en las redes sociales de GDG São Paulo, registrando momentos y editando videos en tiempo real durante IWD São Paulo 2025.'
    ],
  Voluntariado: ['Volunteering', 'Voluntariado'],
  Comunicação: ['Communications', 'Comunicación'],
  'Outubro de 2024': ['October 2024', 'Octubre de 2024'],
  'Codificando um mundo melhor': [
    'Coding a better world',
    'Programando un mundo mejor'
  ],
  'O papel de quem desenvolve na criação de tecnologia mais inclusiva.': [
    'The role developers play in creating more inclusive technology.',
    'El papel de quienes desarrollan en la creación de tecnología más inclusiva.'
  ],
  'Na Semana da Computação do Centro Universitário Adventista de São Paulo, falei sobre como profissionais de tecnologia podem criar soluções que promovam inclusão e acessibilidade, inclusive para pessoas com deficiências auditivas ou visuais. Depois da palestra, estudantes me procuraram para conversar sobre um projeto de inclusão na faculdade. Essa troca foi a melhor motivação para atravessar o nervosismo de subir ao palco.': [
      'At the Computer Science Week at Centro Universitário Adventista de São Paulo, I spoke about how technology professionals can create solutions that promote inclusion and accessibility, including for people with hearing or visual impairments. After the talk, students approached me about an inclusion project at their college. That exchange helped me overcome the nerves of taking the stage.',
      'En la Semana de Computación del Centro Universitário Adventista de São Paulo, hablé sobre cómo los profesionales de tecnología pueden crear soluciones que promuevan la inclusión y la accesibilidad, también para personas con discapacidad auditiva o visual. Después de la charla, estudiantes se acercaron para conversar sobre un proyecto de inclusión en la universidad. Ese intercambio fue la mejor motivación para superar los nervios de subir al escenario.'
    ],
  Acessibilidade: ['Accessibility', 'Accesibilidad'],
  'Palestra no Canva': ['Talk on Canva', 'Charla en Canva'],
  'Comunidade 7tech': ['7tech community', 'Comunidad 7tech'],
  'Julho de 2024': ['July 2024', 'Julio de 2024'],
  'Voluntária · GDG São Paulo · Palco Dev': [
    'Volunteer · GDG São Paulo · Dev Stage',
    'Voluntaria · GDG São Paulo · Escenario Dev'
  ],
  'Comunidade em movimento no Palco Dev': [
    'Community in motion at the Dev Stage',
    'Comunidad en movimiento en el Escenario Dev'
  ],
  'Apoio à comunidade GDG São Paulo durante a Campus Party Brasil 16.': [
    'Supporting GDG São Paulo at Campus Party Brasil 16.',
    'Apoyo a la comunidad GDG São Paulo durante Campus Party Brasil 16.'
  ],
  'No Palco Dev, apresentei palestrantes ao público, registrei fotos e vídeos e ajudei a acompanhar as transmissões ao vivo no canal da comunidade.': [
      'At the Dev Stage, I introduced speakers, took photos and videos, and helped monitor live streams on the community channel.',
      'En el Escenario Dev, presenté a ponentes, tomé fotos y videos y ayudé a seguir las transmisiones en vivo del canal de la comunidad.'
    ],
  'Registro na Campus Party': [
    'Campus Party post',
    'Publicación de Campus Party'
  ],
  'Meu primeiro painel': ['My first panel', 'Mi primer panel'],
  'Foto oficial do IWD São Paulo 2025, com a comunidade reunida': [
    'Official IWD São Paulo 2025 photo with the community together',
    'Foto oficial de IWD São Paulo 2025 con la comunidad reunida'
  ],
  'Lary Souza participando do painel no TDC São Paulo 2026': [
    'Lary Souza on a panel at TDC São Paulo 2026',
    'Lary Souza participando en el panel de TDC São Paulo 2026'
  ],
  'Lary Souza participando do painel no TDC São Paulo 2025': [
    'Lary Souza on a panel at TDC São Paulo 2025',
    'Lary Souza participando en el panel de TDC São Paulo 2025'
  ],
  'Lary Souza palestrando na COMPWEEK 2024': [
    'Lary Souza speaking at COMPWEEK 2024',
    'Lary Souza dando una charla en COMPWEEK 2024'
  ],
  'Lary Souza no Palco Dev durante a Campus Party 16': [
    'Lary Souza at the Dev Stage during Campus Party 16',
    'Lary Souza en el Escenario Dev durante Campus Party 16'
  ],
  'Meu setup de trabalho com notebook, teclado e iluminação roxa': [
    'My workstation with a laptop, keyboard, and purple lighting',
    'Mi espacio de trabajo con laptop, teclado e iluminación violeta'
  ],
  'Meu espaço de escrita': ['My writing space', 'Mi espacio de escritura'],
  'Lary Souza de rosa com amigas no AWSome Women Community': [
    'Lary Souza in pink with friends at AWSome Women Community',
    'Lary Souza de rosa con amigas en AWSome Women Community'
  ],
  'Conversa no palco do Web Summit': [
    'Conversation on the Web Summit stage',
    'Conversación en el escenario de Web Summit'
  ],
  'Grupo reunido em frente ao palco do MELI Celebra': [
    'Group gathered in front of the MELI Celebra stage',
    'Grupo reunido frente al escenario de MELI Celebra'
  ],
  'Quatro mulheres em frente ao painel Feel the Future': [
    'Four women in front of the Feel the Future panel',
    'Cuatro mujeres frente al panel Feel the Future'
  ],
  'Momentos em palestras e comunidade': [
    'Talks and community moments',
    'Momentos de charlas y comunidad'
  ],
  'Ver momento': ['View event', 'Ver evento'],
  Informática: ['Computer science', 'Informática'],
  'Sistemas de Informação': ['Information Systems', 'Sistemas de Información'],
  'Fale comigo': ['Contact me', 'Hablemos'],
  'E-mail': ['Email', 'Correo'],
  'Feature flag': ['Feature flag', 'Feature flag'],
  Universidade: ['University', 'Universidad'],
  Carreira: ['Career', 'Carrera'],
  Inclusão: ['Inclusion', 'Inclusión'],
  'GDG São Paulo': ['GDG São Paulo', 'GDG São Paulo'],
  'Italo Gabriel': ['Italo Gabriel', 'Italo Gabriel'],
  Voluntária: ['Volunteer', 'Voluntaria'],
  Palestrante: ['Speaker', 'Ponente'],
  'Atuação backend com Java, uso de serviços AWS como SQS e documentação técnica.': [
      'Backend development with Java, AWS services such as SQS, and technical documentation.',
      'Desarrollo backend con Java, servicios de AWS como SQS y documentación técnica.'
    ],
  'Currículo disponível apenas em português.': ['This résumé is currently available only in Portuguese.', 'Este currículum solo está disponible en portugués.'],
  'Keep building. Keep learning. Keep sharing.': ['Keep building. Keep learning. Keep sharing.', 'Sigue construyendo. Sigue aprendiendo. Sigue compartiendo.']
}
export function translate(text, language) {
  const value = translations[text]
  return value
    ? language === 'en'
      ? value[0]
      : language === 'es'
        ? value[1]
        : text
    : text
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('pt')
  const [ready, setReady] = useState(false)
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('lary-language')
      if (['pt', 'en', 'es'].includes(saved)) setLanguage(saved)
    } catch {}
    setReady(true)
  }, [])
  useEffect(() => {
    document.documentElement.lang = locale[language] || locale.pt
    const titles = {
      pt: [
        'Lary Souza | Engenharia de software e comunidade',
        'Engenharia backend, tecnologia e comunidade com Lary Souza.'
      ],
      en: [
        'Lary Souza | Software engineering and community',
        'Backend engineering, technology, and community with Lary Souza.'
      ],
      es: [
        'Lary Souza | Ingeniería de software y comunidad',
        'Ingeniería backend, tecnología y comunidad con Lary Souza.'
      ]
    }
    document.title = titles[language][0]
    const description = document.querySelector('meta[name="description"]')
    if (description) description.content = titles[language][1]
    if (ready) {
      try {
        window.localStorage.setItem('lary-language', language)
      } catch {}
    }
  }, [language, ready])
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
export function useTranslate() {
  const { language } = useLanguage()
  return text => translate(text, language)
}
