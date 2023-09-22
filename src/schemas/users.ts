import z from "zod";
import { User } from "../interfaces/users.interface";

export const UserSchema = z.object({
  name: z.string({
    required_error: "Nombre es requerido",
  }),
  email: z
    .string({
      required_error: "Correo electronico es requerido",
    })
    .email(),
  password: z.string({
    required_error: "Contraseña es requerida",
  }),
  role: z.enum(["admin", "user"]).optional(),
  active: z.boolean().optional(),
  verified: z.boolean().optional(),
});

export const validateUser = (user: User) => {
  return UserSchema.safeParse(user);
};

export const validatePartialUser = (user: User) => {
  return UserSchema.partial().safeParse(user);
};
