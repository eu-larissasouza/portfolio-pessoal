'use client'
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
  {
    title: 'Habilidades',
    id: 'skills',
    content: (
      <p>
        #AnáliseDeDados #SQL #PL/SQL #Excel #HTML #CSS #JavaScript #React #Java
      </p>
    )
  },
  {
    title: 'Educação',
    id: 'education',
    content: (
      <ul className="list-disc pl-2">
        <li>
          IFSP - Ensino Médio e Técnico Integrado em Informática, 2019-2022
        </li>
        <li>
          FIAP - Graduanda em Sistemas de Informação, cursando 3º semestre, com
          previsão de conclusão para 07/2027
        </li>
      </ul>
    )
  }
//   {
//     title: 'Certificações',
//     id: 'certifications',
//     content: (
//       <ul className="list-disc pl-2">
//         <li>AWS Cloud Practitioner</li>
//         <li>Google Professional Cloud Developer</li>
//       </ul>
//     )
//   }
]

const AboutSection = () => {
  const [tab, setTab] = useState('skills')
  const [isPending, startTransition] = useTransition()

  const handleTabChange = id => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mim</h2>
          <p className="text-base lg:text-lg">
            Apaixonada pela programação e desenvolvimento, enxergo a tecnologia
            como ferramenta a ser acessível e utilizada para melhorar a
            qualidade de vida das pessoas, pois acredito que diante de tantos
            avanços tecnológicos, é essencial que todos possam ser contemplados
            pelos benefícios da tecnologia e, sob estes valores, busco
            oportunidades para desenvolver seus conhecimentos.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              {' '}
              Habilidades{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              {' '}
              Educação{' '}
            </TabButton>
{/*             <TabButton */}
{/*               selectTab={() => handleTabChange('certifications')} */}
{/*               active={tab === 'certifications'} */}
{/*             > */}
{/*               {' '} */}
{/*               Certificações{' '} */}
{/*             </TabButton> */}
          </div>
          <div className="mt-8">{TAB_DATA.find(t => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
