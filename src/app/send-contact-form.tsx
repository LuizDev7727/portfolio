'use client'

import { Button } from "@/components/ui/button"
import { useActionState } from "react"
import sendContactAction from "./actions"
import { Loader2, Mail } from "lucide-react"

export default function SendContactForm() {

  const [state, formAction, pending] = useActionState(sendContactAction, null)
  
  return (
    <form action={formAction} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
          Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          disabled={pending}
          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
          placeholder="Seu nome completo"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          disabled={pending}
          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
          placeholder="seu@email.com"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-zinc-300 mb-2">
          Descrição do Problema
        </label>
        <textarea
          disabled={pending}
          id="description"
          name="description"
          rows={5}
          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent resize-none"
          placeholder="Descreva seu projeto ou problema que precisa resolver..."
        />
      </div>

      <Button disabled={pending} className="w-full bg-lime-400 text-zinc-950 hover:bg-lime-500 font-semibold py-3">
        {
          pending ? <Loader2 className="animate-spin size-4"/> : (
            <div className="flex items-center">
              <Mail className="size-4 mr-2" />
              Enviar Mensagem
            </div>
          )
        }
      </Button>
    </form>
  )
}