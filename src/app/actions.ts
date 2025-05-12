'use server'

import { createClientSupabase } from "@/utils/supabase/server"
import { z } from "zod"

const sendContactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  description: z.string(),
})

export default async function sendContactAction(prevState:any, form:FormData) {
  
  const result = sendContactSchema.safeParse(Object.fromEntries(form))

  if(!result.success) {
    const errors = result.error.flatten().fieldErrors
    console.log(errors)
    return { success: false, message: null, errors }
  }

  const { name, email, description } = result.data

  const supabase = await createClientSupabase()

  const { error } = await supabase.from('Customers').insert({
    name: name,
    email: email,
    description: description
  })

  console.log(error)

}