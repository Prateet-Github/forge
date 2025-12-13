<script>
  import { Menu, X, User, Sparkles } from "lucide-svelte";

  export let user;

  let open = false;

  const navItems = [
    { name: "Templates", link: "/templates" },
    { name: "Resources", link: "/resources" },
    { name: "Enterprise", link: "/enterprise" },
    { name: "Pricing", link: "/pricing" },
    { name: "Students", link: "/students" },
    { name: "FAQ", link: "/faq" },
  ];
</script>

<nav class="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-xl border-b border-gray-800 text-white">
  <div class="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
    <!-- Logo -->
    <a href="/" class="flex items-center gap-2 group">
      <div class="p-1.5 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg group-hover:scale-105 transition-transform">
        <Sparkles class="size-4 text-white" />
      </div>
      <h1 class="font-bold text-xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Forge
      </h1>
    </a>

    <!-- Desktop Navigation -->
    <ul class="hidden lg:flex items-center gap-8 text-sm">
      {#each navItems as item}
        <li>
          <a 
            href={item.link} 
            class="text-gray-300 hover:text-white transition-colors relative group"
          >
            {item.name}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </a>
        </li>
      {/each}
    </ul>

    <!-- Desktop Auth -->
    <div class="hidden lg:flex gap-3 items-center">
      {#if user}
        <div class="flex items-center gap-2 px-3 py-2 bg-gray-900 border border-gray-800 rounded-lg">
          <div class="p-1 bg-gradient-to-br from-blue-600 to-purple-600 rounded">
            <User class="size-3 text-white" />
          </div>
          <span class="text-sm font-medium">
            {user.name || user.email || user.username || "User"}
          </span>
        </div>
        <form method="POST" action="/api/auth/logout">
          <button
            type="submit"
            class="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-all font-medium text-sm"
          >
            Sign Out
          </button>
        </form>
      {:else}
        <a
          href="/login"
          class="px-4 py-2 text-sm font-medium border border-gray-700 hover:border-gray-600 hover:bg-gray-900 rounded-lg transition-all"
        >
          Sign In
        </a>
        <a
          href="/signup"
          class="px-4 py-2 text-sm font-medium bg-white text-black rounded-lg hover:bg-gray-200 transition-all"
        >
          Sign Up
        </a>
      {/if}
    </div>

    <!-- Mobile Menu Button -->
    <button 
      class="lg:hidden p-2 hover:bg-gray-900 rounded-lg transition-colors" 
      on:click={() => (open = !open)}
    >
      {#if open}
        <X class="size-6" />
      {:else}
        <Menu class="size-6" />
      {/if}
    </button>
  </div>

  <!-- Mobile Menu -->
  {#if open}
    <div class="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-gray-800 z-50">
      <div class="px-4 py-6 space-y-6 max-w-7xl mx-auto">
        <!-- Mobile Navigation -->
        <ul class="flex flex-col gap-4">
          {#each navItems as item}
            <li>
              <a
                href={item.link}
                class="block text-gray-300 hover:text-white transition-colors py-2"
                on:click={() => (open = false)}
              >
                {item.name}
              </a>
            </li>
          {/each}
        </ul>

        <!-- Mobile Auth -->
        <div class="pt-4 border-t border-gray-800">
          {#if user}
            <div class="flex items-center gap-2 px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg mb-3">
              <div class="p-1 bg-gradient-to-br from-blue-600 to-purple-600 rounded">
                <User class="size-3 text-white" />
              </div>
              <span class="text-sm font-medium">
                {user.name || user.email || user.username || "User"}
              </span>
            </div>
            <form method="POST" action="/api/auth/logout">
              <button
                type="submit"
                class="w-full py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-all font-medium"
              >
                Sign Out
              </button>
            </form>
          {:else}
            <div class="flex flex-col gap-2">
              <a
                href="/login"
                class="w-full py-3 text-center border border-gray-700 hover:border-gray-600 hover:bg-gray-900 rounded-lg transition-all font-medium"
                on:click={() => (open = false)}
              >
                Sign In
              </a>
              <a
                href="/signup"
                class="w-full py-3 text-center bg-white text-black rounded-lg hover:bg-gray-200 transition-all font-medium"
                on:click={() => (open = false)}
              >
                Sign Up
              </a>
            </div>
          {/if}
        </div>
      </div>
    </div>
  {/if}
</nav>