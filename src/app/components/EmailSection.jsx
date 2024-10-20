'use client'
import React, { useState, useEffect } from 'react'
import GithubIcon from '../../../public/github-icon.svg'
import LinkedinIcon from '../../../public/linkedin-icon.svg'
import InstagramIcon from '../../../public/instagram-icon.svg'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  useEffect(() => {
    // Carregar o script do EmailJS
    const script = document.createElement('script')
    script.src =
      'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      window.emailjs.init('G3CIUaizlig3vL1ZM') // Inicializa o EmailJS com sua Public Key
    }

    // Cleanup: remove o script quando o componente for desmontado
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()

    // Enviar email usando EmailJS
    window.emailjs
      .sendForm(
        'service_tq2qg7a', // Substitua pelo seu Service ID
        'template_yz41l9b', // Substitua pelo seu Template ID
        '#contact-form' // ID do formulário
      )
      .then(
        () => {
          setEmailSubmitted(true)
          setTimeout(() => setEmailSubmitted(false), 5000)
          e.target.reset()
        },
        error => {
          console.error('Erro ao enviar email:', error)
        }
      )
  }

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Vamos nos conectar!
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Se você tiver qualquer dúvida ou apenas quiser dizer oi, envie-me uma
          mensagem e terei o prazer de entrar em contato com você.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/eu-larissasouza" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/larissa-a-souza/"
            target="_blank"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://www.instagram.com/larybytes/" target="_blank">
            <Image src={InstagramIcon} alt="Instagram Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email enviado com sucesso!
          </p>
        ) : (
          <form
            id="contact-form"
            className="flex flex-col"
            onSubmit={handleSubmit}
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="text-white block mb-2 text-sm font-medium"
              >
                Seu nome
              </label>
              <input
                name="user_name"
                type="text"
                id="name"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Seu nome"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Seu email
              </label>
              <input
                name="user_email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="seuEmail@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Assunto
              </label>
              <input
                name="user_subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Entrando em contato por"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Mensagem
              </label>
              <textarea
                name="user_message"
                id="message"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Vamos falar sobre..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Enviar mensagem
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default EmailSection
