import { z } from 'zod';

export const userSchema = z.object({
  name: z.string()
  .min(1, {message: 'Nombre es requerido'})
  .min(3, {message: 'Longitud minima 3'}),

  lastname: z.string({ required_error: 'Apellido es requerido' })
  .min(3, {message: 'Longitud minima 3'}),
  // para numeros podemos usar algo así:
  amount: z.number({ coerce: true, invalid_type_error: "numero requerido"})
})


export type userForm = z.infer<typeof userSchema>;