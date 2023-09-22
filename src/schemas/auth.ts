import { UserSchema } from "./users";
import { User } from "../interfaces/users.interface";

export const validateLogin = (user: User) => {
  return UserSchema.pick({ email: true, password: true }).safeParse(user);
};

export const validateRegister = (user: User) => {
  return UserSchema.safeParse(user);
};
