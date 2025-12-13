<form
  method="POST"
  class="min-h-screen w-full bg-white dark:bg-black text-black dark:text-white flex justify-center items-center mx-auto px-4"
>
  <div
    class="flex flex-col gap-4 justify-center items-center border border-gray-300 p-4 dark:border-gray-800 rounded-2xl max-w-sm w-full"
  >
    <h1 class="text-2xl font-bold text-center">Create a new Account</h1>
    <input
      name="name"
      type="text"
      placeholder="Email"
      class="border border-gray-300 p-4 dark:border-gray-800 rounded-2xl outline-none w-full"
    />
    <input
      name="username"
      type="text"
      placeholder="Username"
      class="border border-gray-300 p-4 dark:border-gray-800 rounded-2xl outline-none w-full"
    />
    <input
      name="email"
      type="email"
      placeholder="Email"
      class="border border-gray-300 p-4 dark:border-gray-800 rounded-2xl outline-none w-full"
    />
    <input
      name="password"
      type="password"
      placeholder="Password"
      class="border border-gray-300 p-4 dark:border-gray-800 rounded-2xl outline-none w-full"
    />

    <p class="text-xs font-semibold">
      Already have an Account?{""}
      <span class="hover:underline cursor-pointer">
        <a href="/login">Login</a>
      </span>
    </p>

    <button
      type="submit"
      class="p-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl w-full cursor-pointer hover:opacity-80 transition"
    >
      Sign Up
    </button>
  </div>
</form>
