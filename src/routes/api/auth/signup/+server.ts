import prisma from "$lib/server/prisma";
import bcrypt from "bcrypt";
import * as jose from "jose";
import { json } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";

export async function POST({ request, cookies }) {
  const { name, username, email, password } = await request.json();

  if (!name || !username || !email || !password) {
    return json({ error: "Missing fields" }, { status: 400 });
  }

  const existing = await prisma.user.findFirst({
    where: {
      OR: [{ email }, { username }],
    },
  });

  if (existing) {
    return json(
      { error: "Email or username already exists" },
      { status: 409 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      username,
      email,
      password: hashedPassword,
    },
  });

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

  return json({ message: "Signup successful" }, { status: 201 });
}