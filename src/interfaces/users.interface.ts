export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  verified: boolean;
  role: "admin" | "user";
  active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
