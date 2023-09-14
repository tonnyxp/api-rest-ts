import z from "zod";
import { User } from "../interfaces/users.interface";

const userSchema = z.object({
  name: z.string().optional(),
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

const validateUser = (user: User) => {
  return userSchema.safeParse(user);
};

const validatePartialUser = (user: User) => {
  return userSchema.partial().safeParse(user);
};

export { validateUser, validatePartialUser };
