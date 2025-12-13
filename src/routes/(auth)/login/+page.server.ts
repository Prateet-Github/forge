import { fail, redirect } from "@sveltejs/kit";

export const actions = {
  default: async ({ request, fetch }) => {
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");

    if (!email || !password) {
      return fail(400, { error: "Missing fields" });
    }

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      return fail(401, { error: "Invalid credentials" });
    }

    throw redirect(302, "/");
  },
};