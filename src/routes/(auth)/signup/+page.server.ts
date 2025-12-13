import { fail, redirect } from "@sveltejs/kit";

export const actions = {
  default: async ({ request, fetch }) => {
    const data = await request.formData();

    const payload = {
      name: data.get("name"),
      username: data.get("username"),
      email: data.get("email"),
      password: data.get("password"),
    };

  
    if (Object.values(payload).some((v) => !v)) {
      return fail(400, { error: "All fields are required" });
    }

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return fail(400, { error: "Signup failed" });
    }

   
    throw redirect(303, "/");
  },
};