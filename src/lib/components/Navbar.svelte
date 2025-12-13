<script>
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
    { name: "Blog", link: "/blog" },
    { name: "Careers", link: "/careers" },
  ];
</script>

<nav
  class="w-full flex items-center justify-between bg-black text-white z-50 border-b border-gray-700 p-3 sticky top-0 mx-auto"
>
  <h1 class="font-bold">V0</h1>
  <ul class="text-sm justify-center gap-10 hidden md:flex">
    {#each navItems as item}
      <li>
        <a class="hover:text-gray-300 transition-colors" href={item.link}
          >{item.name}</a
        >
      </li>
    {/each}
  </ul>

  <div class="gap-2 hidden md:flex">
    <button
      title="Sign In"
      class="border border-gray-700 rounded py-1 px-2 text-xs hover:opacity-90 cursor-pointer"
      >Sign In</button
    >
    <button
      title="Sign Up"
      class="bg-white text-black rounded py-1 px-2 text-xs hover:opacity-90 cursor-pointer"
      >Sign Up</button
    >
  </div>
</nav>
