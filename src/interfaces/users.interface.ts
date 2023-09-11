import { Auth } from "./auth.interface";

export interface User extends Auth {
  id?: number;
  name: string;
  verified?: boolean;
  role?: "admin" | "user";
  active?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
