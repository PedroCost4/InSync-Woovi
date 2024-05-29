import { SignJWT, jwtVerify } from 'jose'
import type { IncomingHttpHeaders } from "node:http";
import type { Context } from "./context";
import { UserLoader } from "./modules/user/UserLoader";
import { UserModel, type User } from "./modules/user/UserModel";

export const getToken = (headers: IncomingHttpHeaders) => {
  if (!headers.authorization || !headers.authorization.startsWith("Bearer ")) {
    return null;
  }
  return headers.authorization.split(" ")[1];
};

export const generateToken = async (user: User) => {
  const secret = new TextEncoder().encode(
    process.env.JWT_SECRET as string,
  )

  return await new SignJWT({ 'urn:example:claim': true, userId: user.id })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setIssuer('urn:example:issuer')
    .setAudience('urn:example:audience')
    .setExpirationTime('5d')
    .sign(secret)
}

export const verifyToken = async (token: string, context: Context) => {
  try {
    const secret = new TextEncoder().encode(
      process.env.JWT_SECRET as string,
    )

    const { payload } = await jwtVerify<{ userId: string }>(token, secret, {
      issuer: 'urn:example:issuer',
      audience: 'urn:example:audience',
    })

    return await UserLoader.load(context, 
      payload.userId
    );
  } catch (_) {
    return null;
  }
};
