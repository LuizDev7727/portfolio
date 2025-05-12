'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useActionState } from "react"
import sendContactAction from "./actions"
import { Loader2 } from "lucide-react"

export default function SendContactForm() {

  const [state, formAction, pending] = useActionState(sendContactAction, null)
  
  return (
    <form action={formAction} className="space-y-4 mt-10 w-full">
      <Label htmlFor="name">Nome</Label>
      <Input id="name" readOnly={pending} name="name" placeholder="Nome completo" className="w-full"/>
      <Label htmlFor="email">E-mail</Label>
      <Input id="email" readOnly={pending} name="email" placeholder="Seu melhor e-mail" className="w-full"/>
      <Label htmlFor="description">Descrição</Label>
      <Input id="description" readOnly={pending} name="description" placeholder="Descreva a sua dor ou necessidade" className="w-full"/>
      <Button className="w-full" type="submit" disabled={pending}>
        {
          pending ? <Loader2 className='animate-spin size-5'/> : 'Enviar Proposta'
        }
      </Button>
    </form>
  )
}