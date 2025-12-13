<form method="POST">
  <div class="flex flex-col gap-4 border p-4 border-gray-700 rounded-2xl">
    <h1 class="text-2xl font-bold text-center">Login Page</h1>
    <input
      name="email"
      type="email"
      placeholder="Email"
      class="border p-4 border-gray-700 rounded-2xl outline-none w-full"
    />
    <input
      name="password"
      type="password"
      placeholder="Password"
      class="border p-4 border-gray-700 rounded-2xl outline-none w-full"
    />
    <p class="text-xs font-semibold text-center">
      Don't have an Account? <a href="/signup" class="hover:underline"
        >Sign Up</a
      >
    </p>
    <button
      type="submit"
      class="p-4 bg-white text-black rounded-2xl w-full hover:opacity-80 transition font-semibold"
    >
      Login
    </button>
  </div>
</form>
