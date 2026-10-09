<h1 align="center">Lary Souza · Portfólio</h1>

<p align="center">
  Engenharia backend, palcos e comunidade em um só lugar.<br>
  <strong>Mover o mundo através da tecnologia. Evoluir a engenharia através das pessoas.</strong>
</p>

<p align="center">
  <a href="https://larysouza.vercel.app/"><img alt="Site no ar" src="https://img.shields.io/badge/site-larysouza.vercel.app-6A2BDB?style=flat"></a>
  <img alt="Next.js 13" src="https://img.shields.io/badge/Next.js-13-17122E?style=flat&logo=nextdotjs">
  <img alt="React 18" src="https://img.shields.io/badge/React-18-3B5BFF?style=flat&logo=react&logoColor=white">
  <img alt="Tailwind CSS 3" src="https://img.shields.io/badge/Tailwind_CSS-3-E8338C?style=flat&logo=tailwindcss&logoColor=white">
  <img alt="Licença MIT" src="https://img.shields.io/badge/licença-MIT-F5873B?style=flat">
</p>

<p align="center">
  <a href="https://larysouza.vercel.app/"><strong>Ver o portfólio</strong></a> ·
  <a href="https://linkme.bio/_lary.souza._">Link na bio</a> ·
  <a href="https://www.linkedin.com/in/larissa-a-souza/">LinkedIn</a>
</p>

## Sobre o projeto

Este é o meu portfólio pessoal. Ele reúne quem eu sou como engenheira backend e como parte da comunidade tech: trajetória, palestras, momentos em eventos, voluntariado e todas as minhas redes, com a mesma identidade visual que uso nos meus posts.

## Demonstração

<!-- Para incluir o vídeo: edite este README no github.com, arraste o arquivo MP4 para esta linha e o GitHub gera o link do player. -->

https://github.com/user-attachments/assets/51b85df2-8b8d-4340-81ba-d18c9fb6450c

## O que tem no site

| Seção                              | O que mostra                                                                                                                 |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Início**                         | Apresentação, frases da marca e links diretos para as redes                                                                  |
| **Sobre**                          | "Código, palco e comunidade" e o currículo em PDF, aberto num modal dentro da página                                         |
| **Trajetória**                     | Experiência profissional e formação                                                                                          |
| **Palcos e bastidores**            | Palestras, painéis, voluntariado e escrita técnica, em cartões em camadas que se navegam pelas abas coloridas ou pelas setas |
| **Tecnologia, pessoas e conexões** | Texto sobre aprender junto e criar conexões, com galeria de momentos em eventos                                              |
| **Áreas**                          | Engenharia backend, palestras, comunidade e mentoria (próximo passo)                                                         |
| **Redes**                          | Instagram, LinkedIn, YouTube, GitHub, e-mail e formulário de contato                                                         |

Detalhes que valem a pena:

- Tema claro e escuro. O site respeita a preferência do sistema e guarda a escolha no navegador.
- Layout responsivo para desktop, tablet e celular.
- Botão de voltar ao topo.
- Animações reduzidas para quem usa `prefers-reduced-motion`.

## Tecnologias

- [Next.js 13](https://nextjs.org/) (App Router) e [React 18](https://react.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/), configurado no projeto, com os estilos das seções em CSS próprio (`src/app/globals.css`)
- [Heroicons](https://heroicons.com/)
- Fontes do Google Fonts: Archivo Narrow, Lexend, Lexend Deca e JetBrains Mono
- Hospedagem na [Vercel](https://vercel.com/)

## Identidade visual

| Cor                | Hex       | Uso                             |
| ------------------ | --------- | ------------------------------- |
| Roxo Jornada       | `#6A2BDB` | Cor principal, capas e fundos   |
| Noite              | `#17122E` | Textos, código e fundos escuros |
| Rosa Palco         | `#E8338C` | Destaques e eyebrows            |
| Laranja Pôr do Sol | `#F5873B` | Detalhes                        |
| Amarelo Creme      | `#FFD27A` | Frases sobre fundo escuro       |
| Azul Tela          | `#3B5BFF` | Tech, diagramas e links         |
| Creme              | `#FFF6E9` | Fundo claro                     |

Tipografia: **Archivo Narrow Bold** nos títulos, **Lexend** no texto, **Lexend Deca** no nome e **JetBrains Mono** em códigos e rótulos.

## Como rodar

Você precisa do [Node.js](https://nodejs.org/) 18 ou superior.

```bash
git clone https://github.com/eu-larissasouza/portfolio-pessoal.git
cd portfolio-pessoal
npm install
npm run dev
```

Abra `http://localhost:3000` no navegador.

| Comando         | O que faz                                    |
| --------------- | -------------------------------------------- |
| `npm run dev`   | Servidor de desenvolvimento                  |
| `npm run build` | Gera a versão de produção                    |
| `npm start`     | Serve a versão de produção (depois do build) |
| `npm run lint`  | Verifica o código com o ESLint               |

## Como atualizar o conteúdo

Os textos ficam em listas no começo de cada componente, dentro de `src/app/components/`. Para adicionar um item, copie um objeto da lista e troque os dados.

| O que atualizar                            | Onde                                                                      |
| ------------------------------------------ | ------------------------------------------------------------------------- |
| Palestras, painéis, voluntariado e escrita | `moments` em `CommunitySection.jsx`                                       |
| Fotos da galeria de eventos                | `eventPhotos` em `CommunitySection.jsx`                                   |
| Experiência e formação                     | `experiences` e `education` em `JourneySection.jsx`                       |
| Áreas de atuação                           | `focusAreas` em `FocusSection.jsx`                                        |
| Redes e contatos                           | `links` em `SocialSection.jsx`                                            |
| Currículo                                  | Troque o PDF em `public/docs/` e ajuste `resumeUrl` em `ResumeViewer.jsx` |
| Fotos e ilustrações                        | `public/images/lary/`                                                     |
| Cores e espaçamentos                       | Variáveis no começo de `src/app/globals.css`                              |

## Estrutura

```text
src/app/
├── layout.js            idioma (pt-BR), metadados e fontes
├── page.js              ordem das seções
├── globals.css          cores, tipografia e estilos das seções
└── components/
    ├── Navbar.jsx · MenuOverlay.jsx · NavLink.jsx · ThemeToggle.jsx
    ├── HeroSection.jsx · AboutSection.jsx · ResumeViewer.jsx
    ├── JourneySection.jsx · CommunitySection.jsx
    ├── FocusSection.jsx · SocialSection.jsx
    └── Footer.jsx · BackToTop.jsx
public/
├── images/lary/         fotos, ilustrações e ícones
└── docs/                currículo em PDF
```

## Deploy

O site é publicado na Vercel. Para publicar uma cópia, importe o repositório na Vercel, que reconhece o Next.js sozinha, ou rode `npm run build` e `npm start` em qualquer servidor com Node.js.

## Contato

- LinkedIn: [in/larissa-a-souza](https://www.linkedin.com/in/larissa-a-souza/)
- Instagram: [@\_lary.souza.\_](https://instagram.com/_lary.souza._)
- YouTube: [@lary.souzaa](https://www.youtube.com/@lary.souzaa)
- GitHub: [eu-larissasouza](https://github.com/eu-larissasouza)
- DEV.to: [larysouza](https://dev.to/larysouza)
- Fale comigo: [formulário de contato](https://forms.gle/XwR1H4HrFyQ4HgHq7)

## Licença

Distribuído sob a licença MIT. Veja o arquivo [LICENSE](LICENSE). A estrutura inicial do projeto parte de um template de portfólio open source (© 2023 Judy Gab, MIT), que foi bastante adaptado.

---

<p align="center">Aprecie cada momento da sua jornada. 💜</p>
