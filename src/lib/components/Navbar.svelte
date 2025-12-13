<script>
  import { Menu, X } from "lucide-svelte";

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

    <div class="hidden md:flex gap-2">
      <button class="border border-gray-700 rounded py-1 px-2 text-xs">
        Sign In
      </button>
      <button class="bg-white text-black rounded py-1 px-2 text-xs">
        Sign Up
      </button>
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

        <div class="flex gap-2 pt-2">
          <button class="flex-1 border border-gray-700 rounded py-2 text-sm">
            Sign In
          </button>
          <button class="flex-1 bg-white text-black rounded py-2 text-sm">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  {/if}
</nav>
