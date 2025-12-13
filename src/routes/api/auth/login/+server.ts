import prisma from "$lib/server/prisma";
import bcrypt from "bcrypt";
import * as jose from "jose";
import { json } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";

export async function POST({ request, cookies }) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return json({ error: "Missing fields" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return json({ error: "Invalid credentials" }, { status: 401 });
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    return json({ error: "Invalid credentials" }, { status: 401 });
  }

  // Create JWT with jose
  const secret = new TextEncoder().encode(env.JWT_SECRET);
  const token = await new jose.SignJWT({ userId: user.id })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(secret);

  cookies.set("auth_token", token, {
    httpOnly: true,
    sameSite: "strict",
    secure: false, // true in production
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return json({ message: "Login successful" });
}