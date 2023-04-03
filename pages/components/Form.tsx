import React from 'react'

type Props = {}

function Form({}: Props) {
  return (
    <form className="w-3/4">
      <div className=" mb-4">
        <div className="w-full mb-4">
          <label className="block text-slate-200 mb-2 2xl:text-xl">
            Nombre completo
          </label>
          <input
            className="appearance-none bg-white border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            id="name"
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
            id="email"
            type="email"
            placeholder="Correo electrónico"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2 2xl:text-xl">Mensaje</label>
        <textarea
          className="appearance-none bg-white border resize-none border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          id="message"
          placeholder="Escribe tu mensaje aquí"
          rows={4}
        />
      </div>
      <div className="flex justify-end">
        <button
          className="border border-slate-100 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Enviar
        </button>
      </div>
    </form>
  )
}

export default Form