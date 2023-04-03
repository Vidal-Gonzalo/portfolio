import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import ExclamationCircle from '@heroicons/react/24/solid/ExclamationCircleIcon'
import Check from '@heroicons/react/24/solid/CheckIcon'
import PaperAirplane from '@heroicons/react/24/solid/PaperAirplaneIcon'
import Clock from '@heroicons/react/24/solid/ClockIcon'
import { motion } from 'framer-motion'

type Props = {}

function Form({}: Props) {
  const form = useRef<HTMLFormElement>(null)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    const service = process.env.NEXT_PUBLIC_EMAILJS_SERVICE
    const template = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY

    if (form.current && service && template && publicKey) {
      emailjs.sendForm(service, template, form.current, publicKey).then(
        () => {
          setIsLoading(false)
          setSent(true)
        },
        (error) => {
          console.error(error)
          setIsLoading(false)
          setError(true)
        },
      )
    }
  }

  return (
    <form className="w-3/4" ref={form} onSubmit={sendEmail}>
      <div className="mb-4">
        <div className="w-full mb-4">
          <label className="block text-slate-200 mb-2 2xl:text-xl">
            Nombre completo
          </label>
          <input
            className="appearance-none bg-white border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            id="from_name"
            name="from_name"
            type="text"
            placeholder="Nombre"
          />
        </div>
        <div className="w-full mb-4">
          <label className="block text-slate-200 mb-2 2xl:text-xl">
            Correo electrónico
          </label>
          <input
            className="appearance-none bg-white border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            type="email"
            name="from_email"
            id="from_email"
            placeholder="Correo electrónico"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2 2xl:text-xl">Mensaje</label>
        <textarea
          className="appearance-none bg-white border resize-none border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          id="message"
          name="message"
          placeholder="Escribe tu mensaje aquí"
          rows={4}
        />
      </div>
      <div className="flex justify-end">
        <button
          className={`border border-slate-100 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center ${
            error && 'border-red-500'
          } ${isLoading && 'border-yellow-500'} ${sent && 'border-green-500'}`}
          type="submit"
          disabled={isLoading || sent || error}
        >
          {!error && !sent && !isLoading && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex items-center"
            >
              Enviar
              <PaperAirplane className="ml-2 h-6 w-6" />
            </motion.span>
          )}
          {isLoading && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex items-center"
            >
              Cargando
              <Clock className="ml-2 h-6 w-6" />
            </motion.span>
          )}
          {error && (
            <>
              Error <ExclamationCircle className="ml-2 h-6 w-6" />
            </>
          )}
          {sent && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex items-center"
            >
              Enviado <Check className="ml-2 h-6 w-6" />
            </motion.span>
          )}
        </button>
      </div>
    </form>
  )
}

export default Form
