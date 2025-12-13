import * as jose from 'jose';
import { env } from "$env/dynamic/private";
import prisma from "$lib/server/prisma";

export async function handle({ event, resolve }) {
  const token = event.cookies.get("auth_token");
  console.log('Token exists:', !!token);

  if (token) {
    try {
      const secret = new TextEncoder().encode(env.JWT_SECRET);
      const { payload } = await jose.jwtVerify(token, secret);
      console.log('JWT verified, payload:', payload);
      
      const user = await prisma.user.findUnique({
        where: { id: payload.userId as string },
        select: {
          id: true,
          name: true,
          username: true,
          email: true,
        },
      });

      console.log('Found user:', user);
      event.locals.user = user;
    } catch (error) {
      console.log('JWT verify failed:', error.message);
      event.locals.user = null;
    }
  } else {
    console.log('No token found');
    event.locals.user = null;
  }

  return resolve(event);
}