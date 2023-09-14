import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET as string;

/**
 * Generate token with payload
 * @param payload
 * @returns
 */
const generateToken = (payload: any) => {
  const token = sign(
    {
      id: payload.id,
      role: payload.role,
    },
    JWT_SECRET,
    {
      expiresIn: "2h",
    }
  );
  return token;
};

/**
 * Verify token with secret
 * @param token
 * @returns
 */
const verifyToken = (token: string) => {
  const decoded = verify(token, JWT_SECRET);
  return decoded;
};

export { generateToken, verifyToken };
