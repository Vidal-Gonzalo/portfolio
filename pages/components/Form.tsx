import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import ExclamationCircle from '@heroicons/react/24/solid/ExclamationCircleIcon'
import Check from '@heroicons/react/24/solid/CheckIcon'
import PaperAirplane from '@heroicons/react/24/solid/PaperAirplaneIcon'
import Clock from '@heroicons/react/24/solid/ClockIcon'
import { motion } from 'framer-motion'
import { Input } from '@/typings'

type Props = {
  inputs: Input[]
}

function Form({ inputs }: Props) {
  const form = useRef<HTMLFormElement>(null)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const service = process.env.NEXT_PUBLIC_EMAILJS_SERVICE
    const template = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY

    const requiredFields = ['from_name', 'from_email', 'message']
    const isFormValid = requiredFields.every((field) => {
      return (
        form.current &&
        form.current[field] &&
        form.current[field].value.trim() !== ''
      )
    })

    if (form.current && service && template && publicKey && isFormValid) {
      setIsLoading(true)
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
      form.current.reset()
    }
  }

  return (
    <form className="w-full lg:w-3/4" ref={form} onSubmit={sendEmail}>
      <div className="mb-4">
        {inputs?.map((input, index) => {
          const id =
            input.label === 'E-mail'
              ? 'from_email'
              : input.label === 'Full name'
                ? 'from_name'
                : 'message'
          const name =
            input.label === 'E-mail'
              ? 'from_email'
              : input.label === 'Full name'
                ? 'from_name'
                : 'message'

          return (
            <div className="w-full mb-4" key={index}>
              <label className="block text-slate-200 mb-2 2xl:text-xl">
                {input.label}
              </label>
              {input.type === 'textarea' ? (
                <textarea
                  className="appearance-none bg-white border resize-none border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id={id}
                  name={name}
                  placeholder={input.placeholder}
                  rows={4}
                />
              ) : (
                <input
                  className="appearance-none bg-white border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id={id}
                  name={name}
                  type={input.type}
                  placeholder={input.placeholder}
                />
              )}
            </div>
          )
        })}
      </div>
      <div className="w-full flex justify-end">
        <button
          className={`w-full lg:w-[35%] justify-center border border-slate-100 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center ${error && 'border-red-500'
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
              Send
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
              Loading
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
              Sent <Check className="ml-2 h-6 w-6" />
            </motion.span>
          )}
        </button>
      </div>
    </form>
  )
}

export default Form
