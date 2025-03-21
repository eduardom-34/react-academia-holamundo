import { z } from 'zod';

const typesTipos = ["Familiar", "Trabajo", "Amigo", "Otros"] as const;

export const userSchema = z.object({
  name: z.string()
  .min(1, {message: 'Nombre es requerido'})
  .min(3, {message: "Longitud minima 3"}),

  lastname: z.string({ required_error: "Apellido es requerido"})
  .min(1, {message: 'Apellido es requerido'})
  .min(3, {message: "Longitud minima 3"}),

  email: z.string({ required_error: "Email es requerido"})
    .min(1, {message: 'Email es requerido'})
    .min(3, {message: "Longitud minima 3"}),

  tipo: z.enum(typesTipos, { message: "Por favor selecciona una opcion valida"})
})

export type userForm = z.infer<typeof userSchema>;