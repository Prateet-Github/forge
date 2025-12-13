import prisma from "$lib/server/prisma";
import bcrypt from "bcrypt";
import { json } from "@sveltejs/kit";

export async function POST({ request }) {
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

  await prisma.user.create({
    data: {
      name,
      username,
      email,
      password: hashedPassword,
    },
  });

  return json({ message: "Signup successful" }, { status: 201 });
}