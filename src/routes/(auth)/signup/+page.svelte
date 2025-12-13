<form method="POST">
  <div class="flex flex-col gap-4 border p-4 border-gray-700 rounded-2xl">
    <h1 class="text-2xl font-bold text-center">Create a new Account</h1>
    <input
      name="name"
      type="text"
      placeholder="Name"
      class="border p-4 border-gray-700 rounded-2xl outline-none w-full bg-black focus:border-gray-500 transition"
    />
    <input
      name="username"
      type="text"
      placeholder="Username"
      class="border p-4 border-gray-700 rounded-2xl outline-none w-full bg-black focus:border-gray-500 transition"
    />
    <input
      name="email"
      type="email"
      placeholder="Email"
      class="border p-4 border-gray-700 rounded-2xl outline-none w-full bg-black focus:border-gray-500 transition"
    />
    <input
      name="password"
      type="password"
      placeholder="Password"
      class="border p-4 border-gray-700 rounded-2xl outline-none w-full bg-black focus:border-gray-500 transition"
    />

    <p class="text-xs font-semibold text-center">
      Already have an Account? <a href="/login" class="hover:underline">Login</a
      >
    </p>

    <button
      type="submit"
      class="p-4 bg-white text-black rounded-2xl w-full hover:opacity-80 transition font-semibold"
    >
      Sign Up
    </button>
  </div>
</form>
