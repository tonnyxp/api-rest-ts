import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET as string;

/**
 * Generate token with payload
 * @param payload
 * @returns
 */
const generateToken = async (payload: any) => {
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
const verifyToken = async (token: string) => {
  try {
    return verify(token, JWT_SECRET);
  } catch (err) {
    return false;
  }
};

export { generateToken, verifyToken };
