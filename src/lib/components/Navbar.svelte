<script>
  import { Menu, X, User } from "lucide-svelte";

  export let user;

  let open = false;

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
    { name: "Blog", link: "/blog" },
    { name: "Careers", link: "/careers" },
  ];
</script>

<nav class="sticky top-0 z-50 w-full bg-black text-white">
  <!-- Top bar -->
  <div class="flex items-center justify-between px-4 py-3">
    <h1 class="font-bold">V0</h1>

    <!-- Desktop menu -->
    <ul class="hidden md:flex gap-10 text-sm">
      {#each navItems as item}
        <li>
          <a href={item.link} class="hover:text-gray-300 transition-colors">
            {item.name}
          </a>
        </li>
      {/each}
    </ul>

    <div class="hidden md:flex gap-2 items-center">
      {#if user}
        <!-- Logged in user -->
        <div class="flex items-center gap-2 px-3 py-1 border border-gray-700 rounded">
          <User class="size-4" />
          <span class="text-sm">{user.name || user.email || user.username || 'User'}</span>
        </div>
        <form method="POST" action="/api/auth/logout">
          <button
            type="submit"
            class="border hover:opacity-90 cursor-pointer border-gray-700 rounded py-1 px-2 text-xs"
          >
            Sign Out
          </button>
        </form>
      {:else}
        <!-- Not logged in -->
        <button
          class="border hover:opacity-90 cursor-pointer border-gray-700 rounded py-1 px-2 text-xs"
        >
          <a href="/login">Sign In</a>
        </button>
        <button
          class="bg-white hover:opacity-90 cursor-pointer text-black rounded py-1 px-2 text-xs"
        >
          <a href="/signup">Sign Up</a>
        </button>
      {/if}
    </div>

    <!-- Mobile menu button -->
    <button class="md:hidden" on:click={() => (open = !open)}>
      {#if open}
        <X class="size-6" />
      {:else}
        <Menu class="size-6" />
      {/if}
    </button>
  </div>

  <!-- Mobile menu -->
  {#if open}
    <div
      class="absolute top-full left-0 w-full
           bg-black border-t border-gray-700
           md:hidden z-50"
    >
      <div class="px-4 py-4 space-y-4">
        <ul class="flex flex-col gap-3 text-sm">
          {#each navItems as item}
            <li>
              <a
                href={item.link}
                class="block hover:text-gray-300"
                on:click={() => (open = false)}
              >
                {item.name}
              </a>
            </li>
          {/each}
        </ul>

        <div class="pt-2">
          {#if user}
            <!-- Logged in user - mobile -->
            <div class="flex items-center gap-2 px-3 py-2 border border-gray-700 rounded mb-2">
              <User class="size-4" />
              <span class="text-sm">{user.name || user.email || user.username || 'User'}</span>
            </div>
            <form method="POST" action="/api/auth/logout">
              <button type="submit" class="w-full border border-gray-700 rounded py-2 text-sm">
                Sign Out
              </button>
            </form>
          {:else}
            <!-- Not logged in - mobile -->
            <div class="flex gap-2">
              <button class="flex-1 border border-gray-700 rounded py-2 text-sm">
                <a href="/login" class="block">Sign In</a>
              </button>
              <button class="flex-1 bg-white text-black rounded py-2 text-sm">
                <a href="/signup" class="block">Sign Up</a>
              </button>
            </div>
          {/if}
        </div>
      </div>
    </div>
  {/if}
</nav>